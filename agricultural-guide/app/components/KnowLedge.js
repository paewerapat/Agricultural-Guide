import React, { useEffect, useState } from 'react'
import KnowLedgeCard from './KnowLedgeCard'

function KnowLedge({posts}) {
    return (
        <>
            <div className='header-banner bg-success'>
                <h2 className='text-with-line'>
                    เรื่องน่ารู้
                </h2>
            </div>
            <div className="container py-5 my-5">
                <div className="row justify-content-center align-items-center row-gap-3">
                    {
                        posts.length > 0 && posts.map((post) => (
                            <div className="col-md-4 col-sm-6" key={post.postId}>
                                <KnowLedgeCard title={post.title} data={post.data} id={post.postId}  />
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default KnowLedge