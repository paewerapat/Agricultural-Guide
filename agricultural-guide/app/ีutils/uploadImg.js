export const imageUpload = async (images) => {
    let imgArr = [];
    console.log("uploading...")
    for(const item of images){
        const formData = new FormData()

        formData.append("file", item)
        formData.append('upload_preset', "Agriculture")
        formData.append('clound_name', "ducgdgy81")

        const res = await fetch("https://api.cloudinary.com/v1_1/ducgdgy81/upload", {
            method: "POST",
            body: formData
        })

        const data = await res.json()
        imgArr.push({public_id: data.public_id, url: data.secure_url})
        
    }
    console.log("imgArr", imgArr)
    return imgArr;
}

export const imageCheck = (file) => {

    let err = "";

    if(!file) err = "คุณไม่ได้เลือกไฟล์"
    if(file.size > 1920*1080) err = 'ไฟล์ขนาดใหญ่เกินไป ขนาดรูปภาพควรไม่เกิน 1920*1080'
    if(file.type !== 'image/jpeg' && file.type !== 'image/png') err = "นามสกุลไฟล์รูปภาพต้องเป็น .png/.jpeg เท่านั้น"

    return err;
}