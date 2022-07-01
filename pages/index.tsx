import FilterLicenses from '@/components/home/FilterLicenses'
import FilterTasks from '@/components/home/FilterTasks'
import ModelGrid from '@/components/home/ModelGrid'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Shade Registry</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className='grid grid-cols-1 md:grid-cols-8 gap-12'>
          <div className='hidden sm:block col-span-2 space-y-6 pl-10 pr-10 2xl:pr-4 h-full min-h-screen bg-violet-50 py-16' id="sidebar">
            <FilterTasks />
            <FilterLicenses />
          </div>
          <div className='col-span-6 py-16 px-4 sm:px-0 sm:pr-12'>
            <div className="flex justify-between">
              <h1 className="font-semibold text-xl mb-5">Models</h1>
            </div>
            <ModelGrid />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
