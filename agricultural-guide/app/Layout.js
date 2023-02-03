import Head from 'next/head'
import Script from 'next/script'
import React from 'react'
import Footer from './navigation/Footer'
import Navbar from './navigation/Navbar'

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