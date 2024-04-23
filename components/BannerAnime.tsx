import React from 'react'

export type BannerAnimeProps={
    title:string;
}

const BannerAnime = (props:BannerAnimeProps) => {
  return (
    <div className='w-full p-4 m-auto'>
        <nav className='w-full flex  h-8 items-center p-4  gap-4'>
            <h2 className=' text-xl font-semibold uppercase'>{props.title}</h2>
        </nav>
    </div>
  )
}

export default BannerAnime