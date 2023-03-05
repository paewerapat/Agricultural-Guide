import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { useState } from 'react';
import { toast } from 'react-toastify';

function Register() {

    const initialState = {
        fullName: '', userId: '', password: '', cfPassword: ''
    }
    const [registerInfo, setRegisterInfo] = useState(initialState);
    const { fullName, userId, password, cfPassword } = registerInfo;

    async function registerHandler(event) {
        event.preventDefault();
        try {
            if(password !== cfPassword) return toast.warning("Passwords did not match");
            const res = await fetch("/api/auth/register", {
                method: 'POST',
                body: JSON.stringify(registerInfo)
            })
            const jsonRes = await res.json();
            setRegisterInfo(initialState);
            return toast.info(jsonRes.msg);
        } catch (error) {
            console.error("[register]Error --> ", error)
            return toast.error(error.msg);
        }
    }

    function onChangeHandler(event) {
        const { name, value } = event.target;
        setRegisterInfo({...registerInfo, [name]: value});
    }

    return (
        <section className="register">
            <div className="wrapper container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-6">
                        <Image src={"/logo/logo.png"} alt="logo" width={400} height={400} />
                    </div>

                    <div className="col-md-6">
                        <div className="card-register">
                            <div className="content">
                                <form onSubmit={registerHandler}>
                                    <h2 className='text-end'>สมัครสมาชิก</h2>
                                    <div className="mb-3">
                                        <label htmlFor="fullName" className="form-label">ชื่อ-สกุล</label>
                                        <input type="text" className="form-control" onChange={onChangeHandler} value={fullName} name='fullName' id="fullName" aria-describedby="emailHelp" required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="userId" className="form-label">เบอร์โทรศัพท์</label>
                                        <input type="text" className="form-control" onChange={onChangeHandler} value={userId} name="userId" id="userId" aria-describedby="emailHelp" required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">รหัสผ่าน</label>
                                        <input type="password" className="form-control" onChange={onChangeHandler} value={password} name='password' id="password" required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="cfPassword" className="form-label">ยืนยันรหัสผ่าน</label>
                                        <input type="password" className="form-control" onChange={onChangeHandler} value={cfPassword} name='cfPassword' id="cfPassword" required />
                                    </div>
                                    <div className="button d-flex flex-column gap-2">
                                        <button type="submit" className="d-block ms-auto btn btn-success w-100">Submit</button>
                                        <Link href={'/login'} type="button" className="d-block ms-auto btn btn-primary w-100">เข้าสู่ระบบ</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Register