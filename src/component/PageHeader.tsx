import { ProfileProps } from '@/utils/type'
import React from 'react'

const PageHeader = ({children , value}:{children : React.ReactNode , value:ProfileProps}) => {
  return (
    <section className=' max-w-[1000px] m-auto mt-16'>
      <div className='flex flex-col gap-3 mb-16'>
        <h1 className=' text-white-1 text-6xl font-bold max-sm:text-3xl'>{value.title}</h1>
        <p className=' text-white-3  text-lg'>{value.Text}</p>
      </div>
      <hr/>
      {children}
      <hr />
    </section>
  )
}

export default PageHeader