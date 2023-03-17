import Link from 'next/link'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import PlantPlot from '../../app/components/PlantPlot';

function Weather() {

    const { user } = useSelector(state => state);
    const router = useRouter();
    const [plantPlot, setPlantPlot] = useState(false);

    useEffect(() => {
        fetch(`/api/plant-plot/${user.userId}`, {
            headers: {
                token: user.token
            },
            method: 'GET'
        }).then(res => res.json).then(data => setPlantPlot(data))
    }, [user.userId, user.token])

    return (
        <section id="weather">
            <div className='header-banner bg-success'>
                <h2 className='text-with-line'>
                    สภาพอากาศ
                </h2>
            </div>

            <div className="container my-5">
                <div>
                    <div className="d-flex justify-content-end">
                        <button className="btn btn-lg btn-success">
                            <Link href="/plant-plots/create">
                                เพิ่มแปลง
                            </Link>
                        </button>
                    </div>

                    <div className="wrapper-data">
                        <div className="header mb-4">
                            <h5>พยากรณ์อากาศแปลงของคุณ</h5>
                        </div>
                        <div className="content">
                            <div className="row">
                                <PlantPlot />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Weather