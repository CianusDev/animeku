import React from 'react'

export type BannerProps={
    title:string;
}

const Banner = (props:BannerProps) => {
  return (
    <div className='w-full p-4 m-auto'>
        <nav className='w-full flex  h-16 items-center justify-center gap-4'>
            <div className='h-6 w-6 bg-primary rounded-full '/>
            <h2 className=' text-xl font-semibold uppercase'>{props.title}</h2>
            <div className='h-6 w-6 bg-primary rounded-full '/>
        </nav>
    </div>
  )
}

export default Banner