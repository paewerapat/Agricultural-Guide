import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Comment from '../../app/components/Comment'

function Question({question}) {
    return (
        <section id="question">
            <div className='header-banner bg-success'>
                <h2 className='text-with-line'>ข้อมูลถามตอบ</h2>
            </div>

            <div className="container my-5">
                <div className="row gap-3">

                    <div className="group-button d-flex justify-content-end gap-2 mb-3">
                        <button className="btn btn-lg btn-primary" type='button'>
                            <Link href={"/question/create"}>
                                <i className="fa-solid fa-circle-question"></i> สร้างคำถาม
                            </Link>
                        </button>
                        <button className="btn btn-lg btn-success" type='button'>
                            <i className="fa-solid fa-clipboard-question"></i> ดูคำถามของฉัน
                        </button>
                    </div>

                    {
                        question && 
                        question.map((data, index) =>
                            <Question key={index} question={data} />
                        )
                    }
                
                    
                </div>
            </div>
        </section>
    )
}

export async function getStaticProps() {
    // Call an external API endpoint to get posts
    const res = await fetch('http://localhost:3000/api/question/get', {
        method: 'GET'
    })
    const question = await res.json()
  
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            question,
        },
        revalidate: 10,
    }
}

export default Question