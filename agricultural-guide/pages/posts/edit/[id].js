import React, { useEffect, useState } from 'react'
import { CKEditor } from 'ckeditor4-react';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

function EditPost() {

    const router = useRouter();
    const { id } = router.query;
    const { user } = useSelector(state => state)
    const [data, setData] = useState("");
    const [title, setTitle] = useState("");

    async function submitPost(e) {
        e.preventDefault();
        try {
            const body = {
                postId: id,
                title: title,
                data: data,
                adminId: user.userId
            }
            const res = await fetch("/api/posts/admin/update-post", {
                method: 'POST',
                body: JSON.stringify(body),
                headers: {
                    token: user.token
                }
            })
            const resJson = await res.json();
            toast.success(resJson.msg)
        } catch (err) {
            toast.error(err.msg)
        }
    }

    useEffect(() => {
        if(id !== undefined) {
            fetch(`/api/posts/${id}`, {
                method: 'GET'
            }).then(res => res.json()).then(post => {
                setData(post.data);
                setTitle(post.title);
            })
        }
    }, [id])

    return (
        <section className='create-post'>
            <div className='header-banner bg-success'>
                <h2 className='text-with-line'>
                    แก้ไขโพสต์
                </h2>
            </div>
            {
                data === undefined ?
                <h1 className='text-center mt-5 text-uppercase'>Post not found</h1>
                :
                <form className="container mt-5" onSubmit={submitPost}>
                    <div className="input-group mb-3">
                        <span htmlFor="title" className='input-group-text' id="title" >
                            หัวข้อ
                        </span>
                        <input className='form-control' type="text" value={title} onChange={(e) => setTitle(e.target.value)} aria-describedby="title" />
                    </div>
                    <CKEditor 
                        initData={data}
                        value={data}
                        name="create-post"
                        onChange={({editor}) => {
                            setData(editor.getData());
                        }}
                        type="classic"
                    />
                    <div className="d-block ms-auto">
                        <button type='reset' className='btn btn-secondary ms-auto mt-3'>
                            Reset
                        </button>
                        <button type='submit' className='btn btn-success ms-auto mt-3'>
                            สร้างโพสต์
                        </button>
                    </div>
                </form>
            }
        </section>
    )
}

export default EditPost