import React from 'react'

function ProductCardShimmer() {
  return (
    <>
      <div className="p-4 relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-gray-200 animate-shimmer">
        <div className="relative mx-3 mt-3 flex justify-center h-60 overflow-hidden rounded-xl bg-gray-300 animate-shimmer">
        </div>
        <div className="mt-4 px-5 pb-5">
          <div className="text-xl font-semibold tracking-tight text-gray-400 animate-shimmer h-6"></div>
          <div className="mt-2 flex items-center justify-between">
            <div className="text-xl font-bold text-gray-400 animate-shimmer h-5 w-24"></div>
            <div className="flex items-center">
              <span className="mr-2 ml-3 rounded bg-gray-300 px-2.5 py-0.5 text-xs font-semibold animate-shimmer h-4 w-12"></span>
            </div>
          </div>
        </div>
        <a href="#" className="flex items-center justify-center rounded-md bg-gray-300 px-5 py-2.5 text-center text-sm font-medium text-gray-400 animate-shimmer h-6 w-24">
        </a>
      </div>


    </>
  )
}

export default ProductCardShimmer