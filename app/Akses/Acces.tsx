import React from 'react'
import Link from 'next/link'
import Edit from '@/assets/edit.png'
import Delete from '@/assets/Delete.png'
import Image from 'next/image'

function Acces() {
  return (
    <div className="bg-sky-50">
      <div className="max-w-7xl mx-auto py-6">
        <div className="flex justify-between items-center px-6">
          <h1 className="text-3xl font-bold text-sky-950">All User</h1>
          <div className="px-4 py-2 bg-white rounded-lg shadow-md hover:bg-sky-200 transition-colors">
            <Link href="/Add">
              <h1 className="text-xl font-semibold text-sky-600">Add</h1>
            </Link>
          </div>
        </div>

        <div className="mt-8 overflow-x-auto">
          <div className="bg-sky-100 shadow-md rounded-lg">
            <div className="flex justify-between p-4 text-sky-900 font-semibold">
              <h1>Name</h1>
              <h1>Access Status</h1>
              <h1>Email</h1>
              <h1 className="pl-20">Age</h1>
            </div>

            {/* User Rows */}
            {[...Array(5)].map((_, index) => (
              <div key={index} className="border-t border-b border-slate-300">
                <div className="flex items-center justify-between p-4 bg-white">
                  <div className="flex items-center gap-4">
                    <Image src={Edit} alt="edit" height={30} width={30} className="cursor-pointer hover:scale-105 transition-transform"/>
                    <Image src={Delete} alt="delete" height={30} width={30} className="cursor-pointer hover:scale-105 transition-transform"/>
                  </div>
                  <div className="flex justify-between gap-24">
                    <h1 className="font-semibold">Pat Black</h1>
                    <h1 className="font-semibold">Admin</h1>
                    <h1 className="font-semibold">example@gmail.com</h1>
                    <h1 className="font-semibold">28</h1>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Acces
