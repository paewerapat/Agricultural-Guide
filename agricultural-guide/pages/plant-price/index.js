import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';

function PlantPrice({data}) {

    const { user } = useSelector(state => state);
    const router = useRouter();

    useEffect(() => {
        if(user.token == '') {
            router.push("/load-to-redirect")
        }
    }, [router, user.token])
    
    return (
        <section id="plant-price">
            <div className='header-banner bg-success'>
                <h2 className='text-with-line'>
                    ราคาพืช
                </h2>
            </div>

            <div className="container my-5">

                <div className="group-button d-flex justify-content-end">
                    <Link href={"/plant-price/create"}>
                        <button className="btn btn-lg btn-primary" type="button">
                            เพิ่มพืช
                        </button>
                    </Link>
                </div>

                <div className="row justify-content-center align-items-center">
                    {
                        data.map((item, index) => (
                            <div className="col-md-6" key={index}>
                                <div className='wrapper-content'>
                                    <span className="header btn btn-success w-100" data-bs-toggle="collapse" href={`#${index}`} role="button" aria-expanded="false" aria-controls="collapseExample">
                                        <h6>ข้าว</h6> <i className="fa-solid fa-angles-down"></i>
                                    </span>
                                    <div className="collapse" id={index}>
                                        <div className="card card-body">
                                            Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            
            </div>
        </section>
    )
}

export async function getStaticProps() {
    // Call an external API endpoint to get posts
    const res = await fetch('http://localhost:3000/api/plant-price/get', {
        method: 'GET'
    })
    const data = await res.json()
  
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            data,
        },
        revalidate: 30,
    }
}

export default PlantPrice