import React from 'react'
import ReviewAnime from './ReviewAnime'
import { useAnimes } from '@/lib/anime.store';
import { ScrollShadow } from '@nextui-org/react';
import { Separator } from './ui/separator';
import Banner from './Banner';

const SectionReviewAnime = ({id}:any) => {
    const {Anime} = useAnimes();
  return (
    <section className='flex gap-2 p-4 max-lg:flex-col'>
        <ReviewAnime id={id} /> 
       <section className='w-full h-full flex justify-center flex-col gap-2 m-4 max-lg:'>
            <h1 className='font-bold text-xl uppercase'>{Anime?.titre}</h1>
            <h1 className='font-semibold text-muted-foreground '>{Anime?.titre2}</h1>
            <h1 className='font-bold text-lg '>Description :</h1>
            <ScrollShadow hideScrollBar className="w-[400px] sm:w-[600px] h-[240px]">
                <p>{Anime?.synopsis}</p>
            </ScrollShadow>
            <h1 className='font-semibold text-primary '>{Anime?.genres}</h1>
            <Separator/>
       </section>
      
       
    </section>
  )
}

export default SectionReviewAnime