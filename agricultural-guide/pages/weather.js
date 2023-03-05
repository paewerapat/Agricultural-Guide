import Link from 'next/link'
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';

function Weather() {

    const { user } = useSelector(state => state);
    const router = useRouter();

    useEffect(() => {
        if(user.token == '') {
            router.push("/load-to-redirect")
        }
    }, [router, user.token])

    return (
        <section id="weather">
            <div className='header-banner bg-success'>
                <h2 className='text-with-line'>
                    สภาพอากาศ
                </h2>
            </div>

            <div className="container my-5">
                <div>
                    <div className="d-flex gap-2 mb-4">
                        <button className="btn btn-primary">
                            เลือกแปลงของคุณ
                        </button>
                        <button className="btn btn-success">
                            <Link href="add-pp">
                                เพิ่มแปลง
                            </Link>
                        </button>
                    </div>

                    <div className="wrapper-data">
                        <div className="header mb-4">
                            <h5>พยากรณ์รายชั่วโมง</h5>
                            <button className='btn btn-dark'>โอกาสตก</button>
                            <button className='btn btn-light'>อุณหภูมิ</button>
                            <button className='btn btn-light'>ความเร็วลม</button>
                        </div>
                        <div className="content">
                            <div className="date">
                                30 October 2022
                            </div>
                            <table className="table">
                                <thead>
                                    <tr>
                                    <th scope="col">เวลา</th>
                                    <th scope="col">โอกาสตก</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>9.00</td>
                                        <td>15%</td>
                                    </tr>
                                    <tr>
                                        <td>10.00</td>
                                        <td>10%</td>
                                    </tr>
                                    <tr>
                                        <td>11.00</td>
                                        <td>5%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Weather