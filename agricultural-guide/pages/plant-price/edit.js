import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { imageUpload } from '../../app/utils/uploadImg';

function EditPlant() {

    const router = useRouter();
    const { plantId } = router.query
    const { user } = useSelector(state => state);

    const initialData = {
        plantName: '', plantPrice: '', plantType: '', plantDesc: '', plantId: ''
    }
    const [plantData, setPlantData] = useState(initialData);
    const {
        plantName, plantPrice, plantType, plantDesc
    } = plantData;

    async function inputHandle(e) {
        const { name, value} = e.target
        setPlantData({...plantData, [name]:value})
    }
   
    async function handlerSubmit(e) {
        e.preventDefault();
        try {
            const body = {
                plantName, plantDesc, plantId, plantPrice, plantType
            }
            const response = await fetch("/api/plant-price/edit", {
                method: 'POST',
                body: JSON.stringify(body),
                headers: {
                    token: user.token
                },
            })
            const dataRes = await response.json();
            toast.success(dataRes.msg)
            setPlantData(initialData)
        } catch (error) {
            return toast.error(error)
        }
    }

    async function deletePlantHandle() {
        try {
            const response = await fetch("/api/plant-price/delete", {
                method: 'POST',
                headers: {
                    plantid: plantData.plantId
                },
            })
            const dataRes = await response.json();
            toast.success(dataRes.msg)
            setPlantData(initialData)
        } catch (error) {
            return toast.error(error)
        }
    }

    useEffect(() => {
        if(plantId){
            fetch(`/api/plant-price/${plantId}`, {
                method: 'GET',
            }).then(res => res.json())
            .then(data => {
                setPlantData({...plantData, ...data})
            })
        }
    }, [plantId])

    return (
        <>
            <div className='header-banner bg-success'>
                <h2 className='text-with-line'>
                    เพิ่มพืช
                </h2>
            </div>

            <form className="container my-5" onSubmit={handlerSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">ชื่อพืช</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="เช่น ทุเรียน" 
                        name="plantName" onChange={inputHandle} value={plantName} required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">รายละเอียด</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="รายละเอียดพืช" 
                        name="plantDesc" onChange={inputHandle} value={plantDesc} required
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor="exampleDataList" className="form-label">ชนิดพืช</label>
                    <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search..." 
                        onChange={inputHandle} name="plantType" value={plantType} required
                    />
                    <datalist id="datalistOptions">
                        <option value="ธัญพืช">
                        </option><option value="พืชน้ำมัน">
                        </option><option value="พืชน้ำตาล">
                        </option><option value="พืชเส้นใย">
                        </option><option value="พืชหัว">
                        </option><option value="พืชอาหารสัตว์">
                        </option>
                    </datalist>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">ราคาพืช</label>
                    <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="เช่น ทุเรียน" 
                        onChange={inputHandle} name="plantPrice" value={plantPrice} required
                    />
                </div>

                <div className='d-flex justify-content-end gap-2'>
                    <button type='submit' className='btn btn-lg btn-primary'>
                        แก้ไขพืช
                    </button>
                    <button type='button' onClick={deletePlantHandle} className='btn btn-lg btn-warning'>
                        ลบพืช
                    </button>
                </div>
            </form>
        </>
    )
}

export default EditPlant