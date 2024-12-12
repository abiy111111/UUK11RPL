import React from 'react'
import Link from 'next/link'
import Edit from '@/assets/edit.png'
import Delete from '@/assets/Delete.png'
import Image from 'next/image'

function Acces() {
  const userData = [
    { product: 'Table', series: 'TJ0001', items: 25, date: '11 January 2022', price: '450L00' },
    { product: 'Chair', series: 'TJ0002', items: 10, date: '5 February 2021', price: '350L00' },
    { product: 'Lamp', series: 'TJ0003', items: 50, date: '8 March 2023', price: '120L00' },
    { product: 'Desk', series: 'TJ0004', items: 30, date: '12 December 2022', price: '600L00' },
    { product: 'Cabinet', series: 'TJ0005', items: 15, date: '25 November 2021', price: '700L00' }
  ];

  return (
    <div className="bg-sky-50">
      <div className="max-w-7xl mx-auto py-6 px-4">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-sky-950">All Product</h1>
          <div className="px-4 py-2 bg-white rounded-lg shadow-md hover:bg-sky-200 transition-colors cursor-pointer">
            <Link href="/Add">
              <h1 className="text-xl font-semibold text-sky-600">Add</h1>
            </Link>
          </div>
        </div>

        <div className="mt-8 overflow-x-auto">
          <div className="bg-sky-100 shadow-md rounded-lg">
            <div className="flex justify-between p-4 text-sky-900 font-semibold bg-sky-200">
              <h1>Product Name</h1>
              <h1>Series No.</h1>
              <h1>Items</h1>
              <h1 className="pl-16">Purchase Date</h1>
              <h1 className="pl-8">Unit Price</h1>
            </div>

            {/* User Rows */}
            {userData.map((item, index) => (
              <div key={index} className="border-t border-b border-slate-300">
                <div className="flex items-center justify-between p-4 bg-white">
                  <div className="flex items-center gap-4">
                    <Image src={Edit} alt="edit" height={30} width={30} className="cursor-pointer hover:scale-110 transition-transform"/>
                    <Image src={Delete} alt="delete" height={30} width={30} className="cursor-pointer hover:scale-110 transition-transform"/>
                  </div>
                  <div className="flex justify-between gap-24">
                    <h1 className="font-semibold">{item.product}</h1>
                    <h1 className="font-semibold">{item.series}</h1>
                    <h1 className="font-semibold">{item.items}</h1>
                    <h1 className="font-semibold pl-16">{item.date}</h1>
                    <h1 className="font-semibold pl-8">{item.price}</h1>
                  </div>
                </div>
                {index !== userData.length - 1 && (
                  <div className="w-[980px] h-[1px] bg-slate-400"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Acces
