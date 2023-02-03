import Image from 'next/image'
import React from 'react'

function register() {
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
                                <form>
                                    <h2>สมัครสมาชิก</h2>
                                    <div className="mb-3">
                                        <label htmlFor="fullName" className="form-label">ชื่อ-สกุล</label>
                                        <input type="text" className="form-control" id="fullName" aria-describedby="emailHelp" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="tel" className="form-label">เบอร์โทรศัพท์</label>
                                        <input type="text" className="form-control" id="tel" aria-describedby="emailHelp" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="username" className="form-label">ชื่อผู้ใช้งาน</label>
                                        <input type="text" className="form-control" id="username" aria-describedby="emailHelp" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">รหัสผ่าน</label>
                                        <input type="password" className="form-control" id="password" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="cfPassword" className="form-label">ยืนยันรหัสผ่าน</label>
                                        <input type="password" className="form-control" id="cfPassword" />
                                    </div>
                                    <div className="button d-flex flex-column gap-2">
                                        <button type="submit" className="d-block ms-auto btn btn-success w-100">Submit</button>
                                        <button type="submit" className="d-block ms-auto btn btn-primary w-100">เข้าสู่ระบบ</button>
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

export default register