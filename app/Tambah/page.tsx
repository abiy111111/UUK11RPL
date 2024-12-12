import React from 'react'
import Nav from '@/components/Nav'
import Add from './add'
import Sidebar from '../sidebar'

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
            <Add/>
      </section>
    </div>
    </div>
    </>
  )
}

export default Akses
