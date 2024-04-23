/* eslint-disable @next/next/no-img-element */
import { useAnimes } from '@/lib/anime.store';
import { Button } from '@nextui-org/react';
import { Play } from 'lucide-react';
import React from 'react'

type ReviewAnimeProps={
    url?:string
}
const ReviewAnime = ({id}:any) => {
    const {Anime} = useAnimes();
  return (
    <div className='w-full '>
        <div className='w-full relative   flex items-center rounded-xl  justify-center'>
            <img src={`https://cdn.statically.io/gh/Anime-Sama/IMG/img/contenu/${id}.jpg`} alt={Anime?.titre||"anime cover"} className=' h-96 w-full  rounded-xl object-cover' />
        </div>
    </div>
  )
}

export default ReviewAnime