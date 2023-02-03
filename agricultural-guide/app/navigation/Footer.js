import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Footer() {
  return (
    <footer className='bg-success'>
      <div className='wrapper'>
        <div className="container">
          <div className="row align-items-center justify-content-evenly">

            <div className="col-4">
              <div className="logo">
                <Image src="/logo/logo.png" alt="logo" width={200} height={200} />
              </div>
            </div>

            <div className="col-md-4">
              <div className="about">

                <h5>About Agricultural Guide</h5>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="group-column">
                      <li><Link href={"/about"}>เกี่ยวกับเรา</Link></li>
                      <li><Link href="">ศูนย์ช่วยเหลือ</Link></li>
                      <li><Link href="">เกี่ยวกับเรา</Link></li>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="group-column">
                      <li><Link href="">เพิ่มแปลง</Link></li>
                      <li><Link href="">ราคาพืช</Link></li>
                      <li><Link href="">สภาพอากาศ</Link></li>
                      <li><Link href="">ถามตอบ</Link></li>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            
            <div className="col-md-4">
              <div className="contract">
                <h5>ติดตามเราได้ทาง</h5>
                <div className="group-column">
                  <li><Link href="">Twitter</Link></li>
                  <li><Link href="">Facebook</Link></li>
                  <li><Link href="">Instagram</Link></li>
                  <li><Link href="">Youtube</Link></li>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer