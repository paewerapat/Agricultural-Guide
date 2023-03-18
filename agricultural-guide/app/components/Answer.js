import React, { useEffect, useState } from 'react'

function Answer({questionId}) {

    const [answerData, setAnswerData] = useState([]);

    useEffect(() => {
        fetch(`/api/answer/${questionId}`, {
            method: 'GET',
        }).then(res => res.json()).then(dataRes => {
            setAnswerData(dataRes)
        })
    }, [questionId])

    return (
        <section id="answer">
            {
                answerData.length > 0 && answerData.map((data, index) => {
                    <div className='wrapper border-bottom shadow-sm px-2' key={index}>
                        <div className="profile">
                            <img src='https://static.vecteezy.com/system/resources/previews/002/275/847/original/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg' alt="profile" />
                            <p>lorem sj3i842</p>
                        </div>
                        <div className='time'>
                            <small>12 mar 2023</small>
                        </div>
                    </div>
                })
            }
        </section>
    )
}

export default Answer