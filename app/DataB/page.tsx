import React from 'react'
import Nav from '@/components/Nav'
import Sidebar from '../sidebar'
import Acces from './Data'

function Akses() {
  return (
    <>
    <div className='h-full bg-latar'>

    <section id='Akses'>
        <Nav/>
    </section>
    <div className='flex'>
      <section>
          <Sidebar/>
      </section>
      <section>
          <Acces/>
      </section>
    </div>
    </div>
    </>
  )
}

export default Akses
