import Link from 'next/link';
import React from 'react'
import { toast } from 'react-toastify';

export default function Index({posts}) {

    async function deletePostHandler(id) {
        if(confirm("Are you sure to delete this post?") == true) {
            const res = await fetch('/api/posts/admin/delete-post', {
                method: 'POST',
                body: JSON.stringify({
                    postId: id
                })
            })
            const resJson = await res.json();
            return toast.success(resJson.msg)
        }
    }

    return (
        <>
        <div className='header-banner bg-success'>
            <h2 className='text-with-line'>
                All Posts
            </h2>
        </div>
        <div className="container py-5">
            <div className='d-flex justify-content-end'>
                <Link href={"/posts/create"}>
                    <button type='button' className='btn btn-primary'>สร้างโพสต์</button>
                </Link>
            </div>
            <div className="table-responsive">
                <table className="table mx-auto text-center">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            posts &&
                            posts?.map((post) => (
                                <tr key={post.postId}>
                                    <td>{post.postId}</td>
                                    <td>{post.title}</td>
                                    <td className='d-flex gap-2 justify-content-center'>
                                        <button className="btn btn-warning">
                                            Edit
                                        </button>
                                        <button className="btn btn-danger" type='button' onClick={() => deletePostHandler(post.postId)}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            {
                posts.length == 0 && (
                    <h2 className='text-center'>No Posts</h2>
                )
            }
        </div>
        </>
    )
}

export async function getStaticProps() {
    // Call an external API endpoint to get posts
    const res = await fetch('http://127.0.0.1:3000/api/posts/get', {
        method: 'GET'
    })
    const posts = await res.json()
  
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            posts,
        },
        revalidate: 10,
    }
}