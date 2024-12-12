import React from 'react'

function Add() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-sky-100">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl p-8">
        <h1 className="text-4xl font-semibold text-center text-sky-900 mb-6">Add Product</h1>
        <div className="w-full h-[1px] bg-slate-300 mb-6"></div>

        <div className="space-y-6">
          {/* Product Section */}
          <div>
            <h2 className="text-2xl font-semibold text-sky-900">Product Information</h2>
          </div>

          {/* Form Inputs */}
          <div className="space-y-6">
            <div className="relative">
              <label className="text-lg font-medium text-sky-600 block">Name</label>
              <input type="text" className="w-full mt-2 px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-sky-500 transition-all" />
            </div>

            <div className="relative">
              <label className="text-lg font-medium text-sky-600 block">Number Of Items</label>
              <input type="number" className="w-full mt-2 px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-sky-500 transition-all" />
            </div>

            <div className="relative">
              <label className="text-lg font-medium text-sky-600 block">Purchase Date</label>
              <input type="date" className="w-full mt-2 px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-sky-500 transition-all" />
            </div>

            <div className="relative">
              <label className="text-lg font-medium text-sky-600 block">Unit Price</label>
              <input type="number" step="0.01" className="w-full mt-2 px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-sky-500 transition-all" />
            </div>

            {/* Condition Section */}
            <div>
              <h2 className="text-lg font-medium text-sky-600">Condition</h2>
              <div className="flex items-center mt-3 space-x-8">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-sky-500 rounded-full" />
                  <label className="ml-2 text-neutral-500">Good</label>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-gray-700 rounded-full" />
                  <label className="ml-2 text-neutral-500">Damaged</label>
                </div>
              </div>
            </div>

            {/* Update Button */}
            <div className="mt-8">
              <button className="w-full py-3 rounded-full bg-sky-600 text-white text-2xl font-semibold hover:bg-sky-700 focus:outline-none transition-colors">
                Update Product
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Add
