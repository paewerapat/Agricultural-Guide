import Head from 'next/head'
import Image from 'next/image'
import KnowLedge from '../app/components/home/KnowLedge'
import QandA from './q&a'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <section id="index">
        <div className="header">
         <div className="text-header">
            <h1 className='absolute'>
              Agricultural guide
            </h1>
            <h2>
              เว็บไซต์สำหรับเกษตรกรยุค 4.0
            </h2>
         </div>
        </div>
        <KnowLedge />
        <QandA />
      </section>
    </>
  )
}
