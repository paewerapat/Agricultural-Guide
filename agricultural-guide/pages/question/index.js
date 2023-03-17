import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Comment from '../../app/components/Comment'

function Question() {
    return (
        <section id="question">
            <div className='header-banner bg-success'>
                <h2 className='text-with-line'>ข้อมูลถามตอบ</h2>
            </div>

            <div className="container my-5">
                <div className="row gap-3">

                    <div className="group-button d-flex justify-content-end gap-2 mb-3">
                        <button className="btn btn-lg btn-primary" type='button'>
                            <Link href={"/q&a/create"}>
                                <i className="fa-solid fa-circle-question"></i> สร้างคำถาม
                            </Link>
                        </button>
                        <button className="btn btn-lg btn-success" type='button'>
                            <i className="fa-solid fa-clipboard-question"></i> ดูคำถามของฉัน
                        </button>
                    </div>

                    <div className="card-wrapper shadow p-3">
                        <span className="header">
                            <div className="profile">
                                <Image src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="profile" height={36} width={36}/>
                                <h6>Lorem, ipsum dolor.</h6>
                            </div>
                            <div className="edit">
                                <i className="fa-solid fa-ellipsis-vertical"></i>
                            </div>
                        </span>
                        <div className="body">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui consectetur excepturi, voluptate veritatis beatae eum!
                        </div>

                        <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#commentCollapse" aria-expanded="false" aria-controls="commentCollapse">
                            <i className="fa-regular fa-comment-dots"></i> 2 ความคิดเห็น
                        </button>
                        <div className="collapse mb-2" id={`commentCollapse`}>
                            <div className="card card-body">
                                <Comment />
                            </div>
                        </div>

                    </div>
                
                    
                </div>
            </div>
        </section>
    )
}

export default Question