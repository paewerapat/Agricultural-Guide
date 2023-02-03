import Image from 'next/image'
import React from 'react'

function login() {
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
                                <form>
                                    <h2 className='text-center'>เข้าสู่ระบบ</h2>
                                    <div className="mb-3">
                                        <label htmlFor="username" className="form-label">ชื่อผู้ใช้งาน</label>
                                        <input type="text" className="form-control" id="username" aria-describedby="emailHelp" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">รหัสผ่าน</label>
                                        <input type="password" className="form-control" id="password" />
                                    </div>
                                    <div className="button d-flex flex-column gap-2">
                                        <button type="submit" className="d-block ms-auto btn btn-success w-100">Submit</button>
                                        <button type="submit" className="d-block ms-auto btn btn-primary w-100">สมัครสมาชิก</button>
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

export default login