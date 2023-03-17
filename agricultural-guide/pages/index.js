import Head from 'next/head'
import KnowLedge from '../app/components/KnowLedge'
import QandA from '../app/components/QAndA'

export default function Home({posts, question}) {
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
        <KnowLedge posts={posts} />
        <QandA question={question} />
      </section>
    </>
  )
}

export async function getServerSideProps() {
  // Call an external API endpoint to get posts
  const resPosts = await fetch('http://localhost:3000/api/posts/get', {
      method: 'GET',
      headers: {
        limit: 3
      }
  })
  const posts = await resPosts.json()

  const resQuestion = await fetch("http://localhost:3000/api/question/get", {
    method: 'GET',
    headers: {
      limit: 3
    }
  })
  const question = await resQuestion.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
      props: {
          posts,
          question
      },
  }
}
