import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import QuestionCard from './QuestionCard'

function Question({question}) {
    return (
        <>
        {
            question.length > 0 && question.map((data, index) => (
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