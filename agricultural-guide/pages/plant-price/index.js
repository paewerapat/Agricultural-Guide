import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';

function PlantPrice({data}) {

    const { user } = useSelector(state => state);
    const router = useRouter();

    console.log("data ---> ", data)
    
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
                                    <span className="header btn btn-success w-100" data-bs-toggle="collapse" href={`#plantId_${item.plantId}`} role="button" aria-expanded="false" aria-controls="collapseExample">
                                        <div className="plant-desc d-flex align-items-center gap-5">
                                            <div className="title">
                                                <h6>{item.plantName}</h6>
                                                <small>{item.plantType}</small>
                                            </div>
                                            <h5>{item.plantPrice} บาท</h5>
                                        </div> 
                                        <i className="fa-solid fa-angles-down"></i>
                                    </span>
                                    <div className="collapse" id={`plantId_${item.plantId}`}>
                                        <div className="card card-body">
                                            <img src={JSON.parse(item.plantImg).url} className="w-100" alt={`plant_img${item.plantId}`} />
                                            {
                                            user.role == "admin" && 
                                            <Link className='btn btn-sm btn-warning' href={`/plant-price/edit?plantId=${item.plantId}`}>
                                                แก้ไข
                                            </Link>
                                            }
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
    const res = await fetch('http://127.0.0.1:3000/api/plant-price/get', {
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