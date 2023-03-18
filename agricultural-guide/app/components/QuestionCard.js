import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Answer from './Answer';

function QuestionCard({data, question}) {

    const { user } = useSelector(state => state);
    
    const initialData = {
        answer: '', userId: '', questionId: ''
    }
    const [addAnswer, setAddAnswer] = useState(initialData);
    const { answer, userId, questionId } = addAnswer;

    async function submitAnswerHandler(e) {
        e.preventDefault();
        try {
            const body = {
                ...addAnswer,
                questionId: data.questionId,
                userId: user.userId
            }
            const request = await fetch('/api/answer/create', {
                method: 'POST',
                body: JSON.stringify(body),
                headers: {
                    token: user.token
                }
            })
            const response = await request.json();
            toast.success(response.msg);
            return setAddAnswer(initialData);
        } catch (err) {
            toast.error(err.msg);
        }
    }

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
            <div className="body my-3 fs-4" style={{textIndent: '3rem'}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui consectetur excepturi, voluptate veritatis beatae eum!
            </div>

            <Answer questionId={data.questionId} />

            <div className="add-answer">
                <form className="input-group mb-3" onSubmit={submitAnswerHandler}>
                    <input type="text" className="form-control" placeholder="เพิ่มคำตอบได้ที่นี่..." aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    <span className="input-group-text btn btn-success" id="basic-addon2" 
                        onChange={e => setAddAnswer({...addAnswer, answer: e.target.value})} 
                        value={answer}
                    >
                        Submit
                    </span>
                </form>
            </div>
        </div>
    )
}

export default QuestionCard