import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { imageCheck, imageUpload } from '../../app/utils/uploadImg';

function CreatePlant() {

    const { user } = useSelector(state => state);
    const [image, setImage] = useState(false);

    const initialData = {
        plantName: '', plantPrice: '', plantType: '', plantImg: '', plantDesc: ''
    }
    const [plantData, setPlantData] = useState(initialData);
    const {
        plantName, plantPrice, plantType, plantImg, plantDesc
    } = plantData;

    async function inputHandle(e) {
        const { name, value} = e.target
        setPlantData({...plantData, [name]:value})
    }

    const changeImage = (e) => {
        const file = e.target.files[0];
        const err = imageCheck(file)
        if(err) return toast.warning(err)
        setImage(file)
    }
   
    async function handlerSubmit(e) {
        e.preventDefault();
        try {
            let media;
            if(image) media = await imageUpload([image])
            media = JSON.stringify(media[0])
            const response = await fetch("/api/plant-price/create", {
                method: 'POST',
                body: JSON.stringify({
                    ...plantData, adminId: user.userId, plantImg: media
                }),
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
                        name="plantName" onChange={inputHandle} value={plantName}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">รายละเอียด</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="รายละเอียดพืช" 
                        name="plantDesc" onChange={inputHandle} value={plantDesc}
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor="exampleDataList" className="form-label">ชนิดพืช</label>
                    <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search..." 
                        onChange={inputHandle} name="plantType" value={plantType}
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
                        onChange={inputHandle} name="plantPrice" value={plantPrice}
                    />
                </div>

               <div className="mb-3">
                    <label htmlFor="formFile" className="form-label">ตัวอย่างรูป</label>
                    <input className="form-control" type="file" id="formFile" onChange={changeImage} />
                </div>

                <button type='submit' className='btn btn-lg btn-primary'>
                    เพิ่มพืช
                </button>
            </form>
        </>
    )
}

export default CreatePlant