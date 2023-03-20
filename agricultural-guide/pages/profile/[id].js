import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { imageCheck } from "../../app/utils/uploadImg";


function Profile() {

    const { user } = useSelector(state => state);
    const [avatar, setAvatar] = useState(false);
    const router = useRouter();

    const changeAvatar = (e) => {
        const file = e.target.files[0];
        const err = imageCheck(file)
        if(err) return toast.warning(err)
        setAvatar(file)
    }

    useEffect(() => {
        if(user.token == '') {
            router.push("/load-to-redirect")
        }
    }, [router, user.token])

    return (
        <section className="profile">
            <div className="container">
                <div className="wrapper-card card">
                    <span className="profile-img">
                        <div className="profile_avatar">
                            {/* <img src={avatar ? URL.createObjectURL(avatar) : userData.avatar.url} alt="profile" /> */}
                                <img className="img-fluid" src={avatar ? URL.createObjectURL(avatar) : "https://www.finearts.cmu.ac.th/wp-content/uploads/2021/07/blank-profile-picture-973460_1280-1.png"}alt="profile-img" />
                            <span>
                            <i className="fas fa-camera" />
                                <p>Change</p>
                                <input type="file" name="file" id="file_up"
                                accept="image/*" onChange={changeAvatar}/>
                            </span>
                        </div>
                    </span>
                    <hr />
                    <span className="profile-info">
                        <div className="d-flex justify-content-evenly">
                            <h6>ชื่อ-สกุล : </h6>
                            <p>{user.fullName}</p>
                        </div>
                        <div className="d-flex justify-content-evenly">
                            <h6>เบอร์โทรศัพท์ : </h6>
                            <p>{user.userId}</p>
                        </div>
                    </span>
                </div>
            </div>
        </section>
    )
}

export default Profile;