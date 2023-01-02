import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Bar from '../components/Bar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Footer from '../components/Footer'
import Invite from '../components/Invite'
const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Next.js + TailwindCSS</title>
        <link rel="icon" href="/favicon.ico" />
       </Head>
    <Bar />
    <Navbar />
    <Hero />
    <div className="pt-12">
      <hr />
     <h1 className="text-center  pt-4 text-blue-600 text-2xl font-bold">Featu<span className="text-gray-900 font-bold">res</span></h1>
   
    </div>
    <Features />
    <div className="pt-12">
    <hr />
    <Invite />
    </div>
    <div className="pt-6">
    <Footer />
    </div>
    </div>
  )
}

export default Home