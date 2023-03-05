import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { loginAction } from '../app/redux/actions/authAction';
import { useRouter } from 'next/router'

function Login() {

    const initialState = {
        userId: '', password: ''
    }
    const [loginInfo, setLoginInfo] = useState(initialState);
    const { userId, password } = loginInfo;
    const router = useRouter();

    const dispatch = useDispatch();

    function loginHandler(event) {
        event.preventDefault();
        dispatch(loginAction(loginInfo))
        setLoginInfo(initialState);
        router.push("/")
    }

    function onChangeHandler(event) {
        const { name, value } = event.target;
        setLoginInfo({...loginInfo, [name]:value})
    }

    return (
        <section className="login">
            <div className="wrapper container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-md-6 mx-auto">
                        <Image src={"/logo/logo.png"} width="400" height="400" alt="img" />
                    </div>
                    <div className="col-md-6">
                        <div className="card-login">
                            <div className="content">
                                <form onSubmit={loginHandler}>
                                    <h2 className='text-center'>เข้าสู่ระบบ</h2>
                                    <div className="mb-3">
                                        <label htmlFor="userId" className="form-label">เบอร์โทรศัพท์</label>
                                        <input type="text" name='userId' value={userId} onChange={onChangeHandler} className="form-control" id="userId" aria-describedby="emailHelp" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">รหัสผ่าน</label>
                                        <input type="password" name='password' value={password} onChange={onChangeHandler} className="form-control" id="password" />
                                    </div>
                                    <div className="button d-flex flex-column gap-2">
                                        <button type="submit" className="d-block ms-auto btn btn-success w-100">Submit</button>
                                        <Link href="/register" type="buttonh" className="d-block ms-auto btn btn-primary w-100">สมัครสมาชิก</Link>
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

export default Login