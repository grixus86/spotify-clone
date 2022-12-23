import type { NextPage } from 'next'
import Head from 'next/head'
import Center from '../components/Center'
import Sidebar from '../components/Sidebar'


export default function Home() {
  return (
    <div className='bg-black h-screen overflow-hidden'>
      <Head>
        <title>SPOTIFY 2.0</title>
        <meta name="description" content="Spotify by thingua" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='flex'>
        <Sidebar />
        <Center />
      </main>


    </div>
  )
}
