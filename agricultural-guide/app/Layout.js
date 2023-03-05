import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Footer from './navigation/Footer'
import Navbar from './navigation/Navbar'
import { currentUser } from './redux/actions/authAction';

function Layout({ children }) {
    return (
        <>
        <section id='layout'>
            <Navbar />
                <main>{children}</main>
            <Footer />
        </section>
        </>
    )
}

export default Layout