import Image from 'next/image'
import React from 'react'

function QAndACard() {
    return (
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
    )
}

export default QAndACard