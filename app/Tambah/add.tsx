import React from 'react'

function Add() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-sky-50">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-4xl font-semibold text-center text-sky-950 mb-6">Add Account</h1>
        <div className="w-full h-[1px] bg-slate-300 mb-6"></div>

        <div className="space-y-6">
          {/* Account Section */}
          <div>
            <h2 className="text-2xl font-semibold text-sky-900">Account Details</h2>
          </div>

          {/* Form Inputs */}
          <div className="space-y-4">
            <div className="relative">
              <label className="text-lg font-medium text-sky-600 block">First Name</label>
              <input type="text" className="w-full mt-2 px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-sky-500 transition" />
            </div>
            <div className="relative">
              <label className="text-lg font-medium text-sky-600 block">Last Name</label>
              <input type="text" className="w-full mt-2 px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-sky-500 transition" />
            </div>
            <div className="relative">
              <label className="text-lg font-medium text-sky-600 block">Email ID</label>
              <input type="email" className="w-full mt-2 px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-sky-500 transition" />
            </div>
            <div className="relative">
              <label className="text-lg font-medium text-sky-600 block">Password</label>
              <input type="password" className="w-full mt-2 px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-sky-500 transition" />
            </div>
            <div className="relative">
              <label className="text-lg font-medium text-sky-600 block">Confirm Password</label>
              <input type="password" className="w-full mt-2 px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-sky-500 transition" />
            </div>
            <div className="relative">
              <label className="text-lg font-medium text-sky-600 block">Age</label>
              <input type="number" className="w-full mt-2 px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-sky-500 transition" />
            </div>

            {/* Gender Selection */}
            <div className="relative">
              <label className="text-lg font-medium text-sky-600 block">Gender</label>
              <select className="w-full mt-2 px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-sky-500 transition">
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Account Type Selection */}
            <div>
              <h2 className="text-lg font-medium text-sky-600">Type</h2>
              <div className="flex items-center mt-2 space-x-8">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-sky-500 rounded-full" />
                  <label className="ml-2 text-neutral-500">Admin</label>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-gray-700 rounded-full" />
                  <label className="ml-2 text-neutral-500">Employee</label>
                </div>
              </div>
            </div>
          </div>

          {/* Register Button */}
          <div>
            <button className="w-full py-3 rounded-full bg-sky-600 text-white text-2xl font-semibold hover:bg-sky-700 focus:outline-none transition-colors">
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Add
