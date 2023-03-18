import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react'
import { API_URL, API_KEY } from '../../keys'

const MapLeaflet = dynamic(() => import("./MapLeaflet"), { ssr: false });
function PPWeather({data}) {

    const [weatherData, setWeatherData] = useState(false);

    console.log("weatherData", data)

    useEffect(() => {
        fetch(`${API_URL}lat=${data.ppLat}&lon=${data.ppLong}&appId=${API_KEY}`)
            .then(res => res.json())
            .then(data => setWeatherData(data))
    }, [data])

    return (
        <>
            {
                weatherData &&
                <section id="ppweather" className='row my-2 p-3 rounded shadow'>
                <div className="col-md-3">
                    <MapLeaflet height={'300px'} width={'300px'} lat={data.ppLat} long={data.ppLong} locationName={data.ppName} />
                </div>
                <div className="col-md-3">
                    <div className="location form-group">
                        <h6 className='btn btn-dark'>ชื่อแปลง</h6>
                        <p className='mb-3'>{data.ppName}</p>
                        <h6 className='btn btn-dark'>พิกัดแปลง</h6>
                        <p>Latitude: {weatherData?.coord?.lat}</p>
                        <p>Longitude: {weatherData?.coord?.lon}</p>
                    </div>
                    <div className="name">
                        <h6 className='btn btn-dark'>เมือง</h6>
                        <p>{weatherData.name}</p>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="weather">
                        <h6 className='btn btn-primary'>สภาพอากาศ</h6>
                        <p>{weatherData.weather[0].main}</p>
                        <p>{weatherData.weather[0].description}</p>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="temperature mb-3">
                        <h6 className='btn btn-warning'>อุณหภูมิ</h6>
                        <p>{Math.round(weatherData.main.temp)}</p>
                    </div>

                    <div className="wind">
                        <h6 className='btn btn-warning'>ความเร็วลม</h6>
                        <p>{weatherData.wind.speed} m/s</p>
                    </div>
                </div>
                </section>
            }
        </>
    )
}

export default PPWeather