import React from 'react'
import Foto2 from '@/assets/logo.png'
import Image from 'next/image'
import Link from 'next/link'

function Nav() {
  return (
    <>
        <div>
            <nav className='bg-primary h-16 flex'>
                <div className='flex'>
                    <div className='pt-5 pl-7 mr-[700px]'>
                        <Image src={Foto2} alt='logo' width={170} height={170}/>
                    </div>
                    <div className='flex justify-end pt-5 mr-10 gap-7 font-semibold'>
                        <div className='bg-white p-2 rounded-lg'>
                            <Link href="/Login">Login</Link>
                        </div>
                        <div className='bg-white p-2 rounded-lg'>
                            <Link href="/Akses">Akses</Link>
                        </div>
                        <div className='bg-white p-2 rounded-lg'>
                            <Link href="/Tambah">Tambah</Link>
                        </div>
                        <div className='bg-white p-2 rounded-lg'>
                            <Link href="/DataA">DataA</Link>
                        </div>
                        <div className='bg-white p-2 rounded-lg'>
                            <Link href="/DataB">DataB</Link>
                        </div>
                        <div className='bg-white p-2 rounded-lg'>
                            <Link href="/Update">Update</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </>
  )
}

export default Nav
