import React from 'react'
import Empty from '../assets/Empty.svg'
export default function NoData() {
  return (
    <div className="h-64  py-10 mx-auto bg-[#ECF5FF] w-[80%] flex items-center justify-center rounded-md">
    <img src={Empty} alt="" className="h-[80%]" />
    <p className="text-xl font-semibold">Sorry ! No Data Found.</p>
  </div>
  )
}
