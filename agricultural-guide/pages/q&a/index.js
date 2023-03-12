import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function QandA() {
    return (
        <section id="qAnda">
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

                    <div className="card-wrapper">
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
                        <div className="comment">
                            <i className="fa-regular fa-comment-dots"></i>
                            2 ความคิดเห็น
                        </div>
                    </div>
                    
                    <div className="card-wrapper">
                        <span className="header">
                            <div className="profile">
                                <Image src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="profile" height={36} width={36} />
                                <h6>Lorem, ipsum dolor.</h6>
                            </div>
                            <div className="edit">
                                <i className="fa-solid fa-ellipsis-vertical"></i>
                            </div>
                        </span>
                        <div className="body">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui consectetur excepturi, voluptate veritatis beatae eum!
                        </div>
                        <div className="comment">
                            <i className="fa-regular fa-comment-dots"></i>
                            2 ความคิดเห็น
                        </div>
                    </div>
                    
                    <div className="card-wrapper">
                        <span className="header">
                            <div className="profile">
                                <Image src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="profile" height={36} width={36} />
                                <h6>Lorem, ipsum dolor.</h6>
                            </div>
                            <div className="edit">
                                <i className="fa-solid fa-ellipsis-vertical"></i>
                            </div>
                        </span>
                        <div className="body">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui consectetur excepturi, voluptate veritatis beatae eum!
                        </div>
                        <div className="comment">
                            <i className="fa-regular fa-comment-dots"></i>
                            2 ความคิดเห็น
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default QandA