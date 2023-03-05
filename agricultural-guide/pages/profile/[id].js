import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";


function Profile() {

    const { user } = useSelector(state => state);
    const router = useRouter();

    useEffect(() => {
        if(user.token == '') {
            router.push("/load-to-redirect")
        }
    }, [router, user.token])

    return (
        <section className="profile">
            
        </section>
    )
}

export default Profile;