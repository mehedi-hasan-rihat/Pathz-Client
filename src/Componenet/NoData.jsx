import React from 'react'
import Empty from '../assets/Empty.svg'
export default function NoData() {
  return (
    <div className="h-64  py-10 mx-auto bg-[#e7f2ff] w-[80%] flex items-center justify-center rounded-md">
    <img src={Empty} alt="" className="h-[80%]" />
    <p className="text-xl font-semibold">Sorry ! No Data Found Try Again.</p>
  </div>
  )
}
