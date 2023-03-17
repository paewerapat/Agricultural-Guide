import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';


const MapLeaflet = dynamic(() => import("./MapLeaflet"), { ssr: false });

function AddLocationPP() {
    
    const { user } = useSelector(state => state);

    const initialState = {
        ppLat: '', ppLong: '', ppName: ''
    }
    const [locationData, setLocationData] = useState(initialState)
    const { ppLat, ppLong, ppName } = locationData

    const handleGetLatLong = (lat, long) => {
        setLocationData({...locationData, ppLat: lat, ppLong: long})
    }

    const handleInput = (e) => {
        const { name, value} = e.target
        setLocationData({...locationData, [name]:value})
    }

    const handleLocationSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch("/api/plant-plot/create", {
                method: 'POST',
                body: JSON.stringify(locationData),
                headers: {
                    token: user.token
                }
            })
            const data = await res.json();
            return toast.success(data.msg);
        } catch (err) {
            return toast.error(err.msg);
        }
    }

    useEffect(() => {
        if(user.userId) setLocationData({...locationData, userId: user.userId})
    }, [locationData, user.userId])

    return (
        <div className="container my-5">
            <form onSubmit={handleLocationSubmit} className="mx-auto" style={{maxWidth: "480px"}}>

                <div className="input-group mb-2">
                    <span className="input-group-text">ชื่อสถานที่ / ที่อยู่</span>
                    <input type="text" placeholder='ระบุชื่อสถานที่หรือที่อยู่' name="ppName"
                    className='form-control' value={ppName} onChange={handleInput} required/>
                </div>

                <div className="input-group mb-2">
                    <span className="input-group-text">ละติจูด</span>
                    <input type="text" placeholder='คลิ๊กบนแผนที่เพื่อเพิ่มละติจูด' name="ppLat" value={ppLat}
                    className='form-control col-md-9' readOnly required/>
                </div>

                <div className="input-group mb-2">
                    <span className="input-group-text">ลองจิจูด</span>
                    <input type="text" placeholder='คลิ๊กบนแผนที่เพื่อเพิ่มลองจิจูด' name="ppLong" value={ppLong}
                    className='form-control' readOnly required />
                </div>
                    
                <MapLeaflet handleGetLatLong={handleGetLatLong} locationName={ppName}/>

                <button type="submit" className="btn btn-success d-block w-100">
                    <i className="fas fa-share"/> เพิ่มสถานที่
                </button>
            </form>
        </div>
    )
}

export default AddLocationPP