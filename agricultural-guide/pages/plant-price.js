import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';

function PlantPrice() {

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

                <div className="row justify-content-center align-items-center">
                    <div className="col-md-6">
                        <div className='wrapper-content'>
                            <span className="header btn btn-success w-100" data-bs-toggle="collapse" href="#pp1" role="button" aria-expanded="false" aria-controls="collapseExample">
                                <h6>ข้าว</h6> <i className="fa-solid fa-angles-down"></i>
                            </span>
                            <div className="collapse" id="pp1">
                                <div className="card card-body">
                                Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                                </div>
                            </div>
                        </div>
                        <div className='wrapper-content'>
                            <span className="header btn btn-success w-100" data-bs-toggle="collapse" href="#pp2" role="button" aria-expanded="false" aria-controls="collapseExample">
                                <h6>ข้าวโพด</h6> <i className="fa-solid fa-angles-down"></i>
                            </span>
                            <div className="collapse" id="pp2">
                                <div className="card card-body">
                                Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                                </div>
                            </div>
                        </div>
                        <div className='wrapper-content'>
                            <span className="header btn btn-success w-100" data-bs-toggle="collapse" href="#pp3" role="button" aria-expanded="false" aria-controls="collapseExample">
                                <h6>ปาล์มน้ำมัน</h6> <i className="fa-solid fa-angles-down"></i>
                            </span>
                            <div className="collapse" id="pp3">
                                <div className="card card-body">
                                Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                                </div>
                            </div>
                        </div>

                    </div>


                    <div className="col-md-6">
                        <div className='wrapper-content'>
                            <span className="header btn btn-success w-100" data-bs-toggle="collapse" href="#pp4" role="button" aria-expanded="false" aria-controls="collapseExample">
                                <h6>น้ำยางสด</h6> <i className="fa-solid fa-angles-down"></i>
                            </span>
                            <div className="collapse" id="pp4">
                                <div className="card card-body">
                                Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                                </div>
                            </div>
                        </div>
                        <div className='wrapper-content'>
                            <span className="header btn btn-success w-100" data-bs-toggle="collapse" href="#pp5" role="button" aria-expanded="false" aria-controls="collapseExample">
                                <h6>มะพร้าว</h6> <i className="fa-solid fa-angles-down"></i>
                            </span>
                            <div className="collapse" id="pp5">
                                <div className="card card-body">
                                Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                                </div>
                            </div>
                        </div>
                        <div className='wrapper-content'>
                            <span className="header btn btn-success w-100" data-bs-toggle="collapse" href="#pp6" role="button" aria-expanded="false" aria-controls="collapseExample">
                                <h6>มันสำปะหลัง</h6> <i className="fa-solid fa-angles-down"></i>
                            </span>
                            <div className="collapse" id="pp6">
                                <div className="card card-body">
                                Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>
        </section>
    )
}

export default PlantPrice