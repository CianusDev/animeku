import { Button, Image } from '@nextui-org/react'
import React from 'react'

const Hero = () => {
  return (
    <div className='w-full p-4 m-auto h-96'>
        <div className='w-full relative  h-full flex items-center flex-col rounded-xl  justify-center'>
            <div className='absolute  h-full  w-full rounded-xl bg-black/30'/>
            <img src="https://cdn.statically.io/gh/Anime-Sama/IMG/img/contenu/solo-leveling0.jpg" alt="bg-hero" className='h-full w-full rounded-xl object-cover' />
            <div className=' text-background absolute z-30 m-auto px-16 text-center '>
                <h1 className='font-bold py-4 text-4xl uppercase text-white'>Regarder vos animes gratuitement</h1>
                <Button variant='shadow' className='bg-blue-500' >explore</Button>
            </div>
        </div>
    </div>
  )
}

export default Hero