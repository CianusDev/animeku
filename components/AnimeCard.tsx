import { Button, Card, CardFooter, CardHeader, Image } from '@nextui-org/react'
import { Play } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

export type AnimeProps={
    id:number;
    name:string;
    img:string;
    url?:string;
    lang:string;
    heure:string;
    type:string;
}

const AnimeCard = (props:AnimeProps) => {
  return (
    <Link href={`${props.url}`} className='hover:scale-105 transition-transform ease-in-out rounded-xl'>
    <Card isFooterBlurred className="w-full h-[200px] col-span-12 sm:col-span-5">
    <CardHeader className="absolute z-10 top-1 flex-col items-start">
      <p className="text-tiny text-white/80 uppercase font-bold">{props.lang}</p>
      <h4 className="font-semibold text-white text-2xl text-shadow">{props.name}</h4>
    </CardHeader>
    <Image
      removeWrapper
      alt="Card example background"
      className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
      src={`https://cdn.statically.io/gh/Anime-Sama/IMG/img/contenu/${props.img}.jpg`}
    />
    <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
      <div>
        <p className="text-black font-semibold">{props.type}</p>
        <p className="text-black text-md">{props.heure}</p>
      </div>
    </CardFooter>
  </Card>
  </Link>
  )
}

export default AnimeCard