import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import PPWeather from './PPWeather';


function PlantPlot() {

    const { user } = useSelector(state => state);
    const [plantPlotData, setPlantplotData] = useState([]);

    useEffect(() => {
        if(user.userId) {
            fetch(`/api/plant-plot/${user.userId}`, {
                method: 'GET',
                headers: {
                    token: user.token
                }
            }).then(res => res.json()).then(data => {
                setPlantplotData(data)
            })
        }
    }, [user.userId])

    return (
        <>
            {   
                plantPlotData.length > 0 &&
                plantPlotData?.map((data, index) => (
                    <PPWeather key={index} data={data} />
                ))
            }
        </>
    )
}

export default PlantPlot