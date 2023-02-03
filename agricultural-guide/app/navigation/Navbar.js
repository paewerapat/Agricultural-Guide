import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router';
import React from 'react'

function Navbar() {

  const router = useRouter();
  const pathName = router.pathname;

  const linkItem = [
    {
      name: "หน้าหลัก",
      link: "/"
    },
    {
      name: "เพิ่มแปลง",
      link: "/add-pp"
    },
    {
      name: "ราคาพืช",
      link: "/plant-price"
    },
    {
      name: "สภาพอากาศ",
      link: "/weather"
    },
    {
      name: "ถามตอบ",
      link: "/q&a"
    },
  ]

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <Link className="navbar-brand ms-3" href="/">
          <Image src="/logo/logo.png" width={60} height={60} alt="logo" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>


        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto">
            {
              linkItem.map((item, index) => (
                <li className="nav-item mr-2" key={index}>
                  <Link className={`nav-link ${pathName == item.link && 'active'}`} href={item.link}>{item.name}</Link>
                </li>
              ))
            }
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <Link className="btn btn-light my-2 my-sm-0 me-2" href="/login">เข้าสู่ระบบ</Link>
            <Link className="btn btn-light my-2 my-sm-0 me-3" href="/register">สมัครสมาชิก</Link>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Navbar