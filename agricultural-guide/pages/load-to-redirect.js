import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

function LoadtoRedirect() {

    const router = useRouter();
    const [count, setCount] = useState(3);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((currentCount) => --currentCount);
        }, 1000)

        // Redirect To
        count === 0 && router.push('/login');
        return () => clearInterval(interval);
    }, [count, router])

    return (
        <div className="container mt-5 text-center">
            <p>คุณไม่มีสิทธิ์ในการใช้งาน กรุณาเข้าสู่ระบบ</p>
            <h6>กำลังเปลี่ยนเส้นทางใน {count}...</h6>
        </div>
    )
}

export default LoadtoRedirect