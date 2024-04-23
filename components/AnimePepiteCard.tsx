import React from 'react'
import { Button, Card, CardFooter, CardHeader, Image } from '@nextui-org/react'
import { Play } from 'lucide-react';
import Link from 'next/link';
export type AnimeProps={
    id:number;
    img:string;
    url?:string;
    titre:string;
    titre2:string;
}

const AnimePepiteCard = (props:AnimeProps) => {
    
  return (
        <Link href={`${props.url}`} className='hover:scale-105 transition-transform ease-in-out rounded-xl'>
        <Card isFooterBlurred className="w-full h-[200px] col-span-12 sm:col-span-5">
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <h4 className="font-semibold text-white text-2xl text-shadow">{props.titre}</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card example background"
          className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
          src={`https://cdn.statically.io/gh/Anime-Sama/IMG/img/contenu/${props.url?.replace("/anime/","")}.jpg`}
        />
        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
          <div>
            <p className="text-black text-2xl">{props.titre2||props.titre}</p>
           
          </div>
        </CardFooter>
      </Card>
      </Link>
  )
}

export default AnimePepiteCard