import Head from 'next/head'
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import Layout from '../app/Layout'
import '../styles/globals.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'leaflet/dist/leaflet.css';
import { useCallback, useEffect } from 'react';
import { wrapper } from '../app/redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUser } from '../app/redux/actions/authAction';

function App({ Component, pageProps }) {

  const dispatch = useDispatch();
  const { user } = useSelector(state => state);

  const getTokenData = useCallback(() => {
    const token = localStorage.getItem("auth-token");
    if(token) return dispatch(getCurrentUser(token));
  }, [dispatch])

  useEffect(() => {
    getTokenData()
  }, [getTokenData])

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>
    <Head>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
    </Head>
    <Layout>
      <ToastContainer />
      <Component {...pageProps} />
    </Layout>
    </>
  )
}

export default wrapper.withRedux(App)