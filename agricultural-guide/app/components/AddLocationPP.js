import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'


const MapLeaflet = dynamic(() => import("./MapLeaflet"), { ssr: false });

function AddLocationPP() {
    

    const initialState = {
        latitude: '', longitude: '', location_name: ''
    }
    const [locationData, setLocationData] = useState(initialState)
    const { latitude, longitude, location_name } = locationData

    console.log("locationData ---> ", locationData)

    const handleGetLatLong = (lat, long) => {
        setLocationData({...locationData, latitude: lat, longitude: long})
    }

    const handleInput = (e) => {
        const { name, value} = e.target
        setLocationData({...locationData, [name]:value})
    }

    const handleLocationSubmit = (e) => {
        e.preventDefault();
        // dispatch(createLocation({locationData, auth}))
    }

    return (
        <div className="container my-5">
            <form onSubmit={handleLocationSubmit} className="mx-auto" style={{maxWidth: "480px"}}>

                <div className="input-group mb-2">
                    <span className="input-group-text">ชื่อสถานที่ / ที่อยู่</span>
                    <input type="text" placeholder='ระบุชื่อสถานที่หรือที่อยู่' name="location_name"
                    className='form-control' value={location_name} onChange={handleInput}/>
                </div>

                <div className="input-group mb-2">
                    <span className="input-group-text">ละติจูด</span>
                    <input type="text" placeholder='คลิ๊กบนแผนที่เพื่อเพิ่มละติจูด' name="latitude" value={latitude}
                    className='form-control col-md-9' readOnly />
                </div>

                <div className="input-group mb-2">
                    <span className="input-group-text">ลองจิจูด</span>
                    <input type="text" placeholder='คลิ๊กบนแผนที่เพื่อเพิ่มลองจิจูด' name="longitude" value={longitude}
                    className='form-control' readOnly />
                </div>
                    
                <MapLeaflet handleGetLatLong={handleGetLatLong} locationName={location_name}/>

                <button type="submit" className="btn btn-success d-block w-100" data-bs-dismiss="modal"
                >
                    <i className="fas fa-share"/> เพิ่มสถานที่
                </button>
            </form>
        </div>
    )
}

export default AddLocationPP