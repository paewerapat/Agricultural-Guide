import Head from 'next/head'
import KnowLedge from '../app/components/KnowLedge'
import Question from '../app/components/Question'

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
        <div className='header-banner bg-success'>
          <h2 className='text-with-line'>ข้อมูลถามตอบ</h2>
        </div>
        <Question question={question} />
      </section>
    </>
  )
}

export async function getServerSideProps() {
  // Call an external API endpoint to get posts
  const resPosts = await fetch('http://127.0.0.1:3000/api/posts/get', {
      method: 'GET',
      headers: {
        limit: 3
      }
  })
  const posts = await resPosts.json()

  const resQuestion = await fetch("http://127.0.0.1:3000/api/question/get", {
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
