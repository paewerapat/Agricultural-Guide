import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import QuestionCard from './QuestionCard'

function Question({question}) {

    const [questionData, setQuestionData] = useState(false);

    console.log("questionData", questionData)

    useEffect(() => {
        if(!question) {
            fetch(`/api/question/get`, {
                method: 'GET'
            }).then(res => res.json())
                .then(data => setQuestionData(data))
        } else {
            setQuestionData(question)
        }
    }, [question])

    return (
        <>
        <div className='header-banner bg-success'>
            <h2 className='text-with-line'>
                ถาม-ตอบ
            </h2>
        </div>
        {
            questionData.length > 0 && questionData.map((data, index) => (
                <section id="qAnda" key={index}>
                    <div className="container my-5">
                        <div className="row gap-3">
                            <QuestionCard key={data.questionId} data={data}  />
                        </div>
                    </div>
                </section>
            ))
        }
        </>
    )
}

export default Question