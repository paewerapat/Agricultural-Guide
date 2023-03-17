import Image from 'next/image'
import React from 'react'
import Comment from './Comment'

function QuestionCard({data}) {
    return (
        <div className="card-wrapper shadow p-3 rounded">
        <span className="header d-flex justify-content-between">
            <div className="profile d-flex gap-2 align-items-center">
                <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="profile" height={36} width={36}/>
                <h6>Lorem, ipsum dolor.</h6>
            </div>
            <div className="edit">
                <i className="fa-solid fa-ellipsis-vertical"></i>
            </div>
        </span>
        <div className="body my-3 fs-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui consectetur excepturi, voluptate veritatis beatae eum!
        </div>
        <Comment />
    </div>
    )
}

export default QuestionCard