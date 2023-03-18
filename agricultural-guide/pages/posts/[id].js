import { Router, useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

function PostId() {

    const router = useRouter();
    const { id } = router.query;

    const [postData, setPostData] = useState(false);

    useEffect(() => {
        fetch(`/api/posts/${id}`, {
            method: 'GET'
        }).then(res => res.json()).then(data => setPostData(data))
    }, [])

    return (
        <section id="post-id" className='container'>
            {
                postData &&
                <>
                <h2 className='mt-5 mb-3'>
                    {postData.title}
                </h2>
                {postData.data}
                </>
            }
        </section>
    )
}

export default PostId