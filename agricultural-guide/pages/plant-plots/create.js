import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import AddLocationPP from '../../app/components/AddLocationPP';

function AddPP() {

    const { user } = useSelector(state => state);
    const router = useRouter();

    useEffect(() => {
        // if(user.token == '') return router.push("/load-to-redirect")
    }, [router, user.token])

    return (
        <section className='add-pp'>
            <div className='header-banner bg-success'>
                <h2 className='text-with-line'>
                    เพิ่มแปลง
                </h2>
            </div>
            <AddLocationPP />
        </section>
    )
}

export default AddPP