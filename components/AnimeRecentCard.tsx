import React from 'react'
import { Button, Card, CardFooter, CardHeader, Image } from '@nextui-org/react'
import { Play } from 'lucide-react';
import Link from 'next/link';

export type AnimeProps={
    id:number;
    titre:string;
    url:string;
}
const AnimeRecentCard = (props:AnimeProps) => {

    function extractAnimeTitle(url:string) {
        // Trouver l'index de "/anime/"
        const startIndex = url.indexOf("/anime/") + "/anime/".length;
        // Trouver l'index de " /"
        const endIndex = url.indexOf("/", startIndex);
    
        // Vérifier si les index sont valides
        if (startIndex !== -1 && endIndex !== -1) {
            // Extraire la partie de l'URL entre "/anime/" et " /"
            return url.substring(startIndex, endIndex);
        } else {
            // Retourner null si les indices ne sont pas valides
            return null;
        }
    }

  return (
    <Link href={`${props.url}`} className='hover:scale-105 transition-transform ease-in-out rounded-xl'>
        <Card isFooterBlurred className="w-full h-[200px] col-span-12 sm:col-span-5">
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
        </CardHeader>
        <Image
          removeWrapper
          alt="Card example background"
          className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
          src={props.url?`https://cdn.statically.io/gh/Anime-Sama/IMG/img/contenu/${extractAnimeTitle(props.url)}.jpg`:""}
        />
        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
          <div>
            <p className="text-black text- flex">{props.titre}</p>
           
          </div>
        </CardFooter>
      </Card>
      </Link>
  )
}

export default AnimeRecentCard