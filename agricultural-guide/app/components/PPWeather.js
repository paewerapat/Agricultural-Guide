import React, { useEffect, useState } from 'react'
import { API_URL, API_KEY } from '../../keys'

function PPWeather({data}) {

    const [weatherData, setWeatherData] = useState(false);

    useEffect(() => {
        fetch(`${API_URL}lat=${data.ppLat}&lon=${data.ppLong}&appId=${API_KEY}`)
            .then(res => res.json)
            .then(data => setWeatherData(data))
    }, [data])

    return (
        <>
            {
                weatherData &&
                <>
                <div className="col-md-6">
                    <div className="location">
                        <h6>พิกัดแปลง</h6>
                        <p>Latitude: {weatherData?.coord?.lat}</p>
                        <p>Longitude: {weatherData?.coord?.lon}</p>
                    </div>
                    <div className="name">
                        <h6>เมือง</h6>
                        <p>{weatherData.name}</p>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="weather">
                        <h6>สภาพอากาศ</h6>
                        <p>{weatherData.weather[0].main}</p>
                        <p>{weatherData.weather[0].description}</p>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="temperature">
                        <h6>อุณหภูมิ</h6>
                        <p>{Math.round(weatherData.main.temp)}</p>
                    </div>

                    <div className="wind">
                        <h6>ความเร็วลม</h6>
                        <p>{weatherData.wind.speed}</p>
                    </div>
                </div>
                </>
            }
        </>
    )
}

export default PPWeather