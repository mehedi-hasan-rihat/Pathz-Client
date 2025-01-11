import React from 'react'

export default function PageTitle({title, subTitle}) {
  return (
    <div className="text-center py-20 bg-slate-100">
    <div className="max-w-xl md:max-w-3xl leading-snug mx-auto ">
      <h2 className="text-2xl lg:text-3xl mb-2 title-font font-semibold leading-loose">{title}</h2>
      <p className="text-[#797878] text-xl">
       {subTitle}
      </p>
    </div>
    </div>
  )
}
