import React from 'react'
import Home from '@/assets/Home.png'
import Inventory from '@/assets/Inventory.png'
import Transaction from '@/assets/Transaction.png'
import Image from 'next/image'

function Sidebar() {
  return (
    <div className='h-[700px] w-64 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 shadow-lg'>
      <div className='pt-6'>
        <div className='mt-8 flex items-center hover:bg-blue-200 px-4 py-3 rounded-xl cursor-pointer transition-all'>
          <Image src={Home} alt='home' width={40} height={40} />
          <h1 className='ml-4 text-xl font-semibold text-white hover:text-gray-900 transition-all'>Home</h1>
        </div>
        <div className='mt-6 flex items-center hover:bg-blue-200 px-4 py-3 rounded-xl cursor-pointer transition-all'>
          <Image src={Inventory} alt='inventory' width={40} height={40} />
          <h1 className='ml-4 text-xl font-semibold text-white hover:text-gray-900 transition-all'>Inventory</h1>
        </div>
        <div className='mt-6 flex items-center hover:bg-blue-200 px-4 py-3 rounded-xl cursor-pointer transition-all'>
          <Image src={Inventory} alt='all account' width={40} height={40} />
          <h1 className='ml-4 text-xl font-semibold text-white hover:text-gray-900 transition-all'>All Account</h1>
        </div>
        <div className='mt-6 flex items-center hover:bg-blue-200 px-4 py-3 rounded-xl cursor-pointer transition-all'>
          <Image src={Transaction} alt='transaction' width={40} height={40} />
          <h1 className='ml-4 text-xl font-semibold text-white hover:text-gray-900 transition-all'>Transaction</h1>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
