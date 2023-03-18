import moment from 'moment';
import Image from 'next/image'
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Answer from './Answer';

function QuestionCard({data}) {

    const { user } = useSelector(state => state);
    const [answerData, setAnswerData] = useState([])
    const router = useRouter();

    console.log("data", data)
    
    const initialData = {
        answer: '', userId: '', questionId: ''
    }
    const [addAnswer, setAddAnswer] = useState(initialData);
    const { answer, userId, questionId } = addAnswer;

    async function submitAnswerHandler(e) {
        console.log("submitAnswerHandler", submitAnswerHandler)
        e.preventDefault();
        try {
            const body = {
                ...addAnswer,
                questionId: data.questionId,
                userId: user.userId
            }
            // console.log("body", body)
            const request = await fetch('/api/answer/create', {
                method: 'POST',
                body: JSON.stringify(body),
                headers: {
                    token: user.token
                }
            })
            // console.log("request", request)
            const response = await request.json();
            toast.success(response.msg);
            setAddAnswer(initialData);
            router.reload();
        } catch (err) {
            toast.error(err.msg);
        }
    }

    const getAnswer = useCallback( async () => {
        const req = await fetch(`/api/answer/${data.questionId}`);
        const reqJson = await req.json();
        setAnswerData(reqJson)
    }, [data.questionId])

    useEffect(() => {
        getAnswer()
    }, [getAnswer])

    return (
        <div className="card-wrapper shadow p-3 rounded">
            
            <span className="header d-flex justify-content-between">
                <div className="profile d-flex gap-2 align-items-center">
                    <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="profile" height={36} width={36}/>
                    <h6>Lorem, ipsum dolor.</h6>
                </div>
                <div className="edit d-flex gap-2 align-items-center">
                    {moment(data.timeStamp).format('MMMM Do YYYY, h:mm:ss a')}
                    <i className="fa-solid fa-ellipsis-vertical"></i>
                </div>
            </span>

            <div className="body my-3 fs-4" style={{textIndent: '3rem'}}>
                <div dangerouslySetInnerHTML={{ __html: data.questionInfo }} />
            </div>

            <section className='answer'>
                {
                    answerData.length > 0 &&
                    answerData.map((item, index) => (
                        <Answer answerData={item} key={index} />
                    ))
                }
            </section>

            <div className="add-answer">
                <form className="input-group mb-3" onSubmit={submitAnswerHandler}>
                    <input type="text" className="form-control" placeholder="เพิ่มคำตอบได้ที่นี่..." 
                        aria-label="Recipient's username" aria-describedby="basic-addon2"  
                        value={answer} onChange={e => setAddAnswer({...addAnswer, answer: e.target.value})}
                    />
                    <button type='submit' className="input-group-text btn btn-success" id="basic-addon2">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default QuestionCard