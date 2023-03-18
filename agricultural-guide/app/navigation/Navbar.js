import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../redux/actions/authAction';

function Navbar() {

  const router = useRouter();
  const pathName = router.pathname;
  const { user } = useSelector(state => state);
  const dispatch = useDispatch();

  const linkItem = [
    {
      name: "หน้าหลัก",
      link: "/"
    },
    {
      name: "เพิ่มแปลง",
      link: "/plant-plot/create"
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
      link: "/question"
    },
  ]

  function logoutHandler() {
    dispatch(logoutUser())
    router.reload();
  }

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
          {
            user.role === "admin" && (
              <div className="dropdown">
                <span className="btn btn-light my-2 my-sm-0 me-2 dropdown-toggle" id="dropdownAdmin" data-bs-toggle="dropdown" aria-expanded="false">
                  Admin
                </span>

                <ul className="dropdown-menu">
                  <li><Link href={"/posts"} className="dropdown-item">Posts</Link></li>
                </ul>
              </div>
            )
          }
          {
            user.token ?
              <div className="profile dropdown">
                <span className="btn btn-light my-2 my-sm-0 me-2 dropdown-toggle" id="dropdownProfile" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="fa-solid fa-user me-2"></i>{user.fullName}
                </span>

                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><Link className="dropdown-item" href={`/profile/${user.userId}`}><i className="fa-solid fa-address-card me-2"></i> Profile</Link></li>
                  <li><span className="dropdown-item" onClick={logoutHandler}><i className="fa-solid fa-right-from-bracket me-2"></i> Logout</span></li>
                </ul>
              </div>
            :
            <form className="form-inline my-2 my-lg-0">
              <Link className="btn btn-light my-2 my-sm-0 me-2" href="/login">เข้าสู่ระบบ</Link>
              <Link className="btn btn-light my-2 my-sm-0 me-3" href="/register">สมัครสมาชิก</Link>
            </form>
          }
        </div>
      </div>
    </nav>
  )
}

export default Navbar