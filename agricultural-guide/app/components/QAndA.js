import Image from 'next/image'
import React from 'react'
import QAndACard from './QAndACard'

function QandA({question}) {
    return (
        <section id="qAnda">
            <div className='header-banner bg-success'>
                <h2 className='text-with-line'>ข้อมูลถามตอบ</h2>
            </div>

            <div className="container my-5">
                <div className="row gap-3">

                    {
                        question.length > 0 && question.map(data => (
                            <QAndACard key={data.questionId}  />
                        ))
                    }
                    
                </div>
            </div>
        </section>
    )
}

export default QandA