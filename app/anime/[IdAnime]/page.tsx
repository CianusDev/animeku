"use client"
import Banner from '@/components/Banner';
import BannerAnime from '@/components/BannerAnime';
import Header from '@/components/Header';
import SectionReviewAnime from '@/components/SectionReviewAnime';
import { Separator } from '@/components/ui/separator';
import { useAnimes } from '@/lib/anime.store';
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react'

const page = ({ params }: { params: { IdAnime: string } }) => {
    const {setAnime} = useAnimes();
    const ID = params.IdAnime;
    useEffect(()=>{
        const ID = params.IdAnime;
        console.log(ID)
        async function infoAnime() {

            const data = { key: ID };

            const requestOptions = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json' // Type de contenu JSON
              },
              body: JSON.stringify(data) // Convertir les données en JSON
            };
          
            try {

              const response = await fetch('http://localhost:5000/info/', requestOptions);
              

              if (response.ok) {

                const responseData = await response.json();
                setAnime(responseData);
                console.log(responseData); 
              } else {
                console.error('Erreur lors de la requête:', response.statusText);
              }
            } catch (error) {
              console.error('Erreur de réseau:', error);
            }
          }
          
          infoAnime();
          
    },[params.IdAnime]);
  return (
    <main>
        <Header/>
        <SectionReviewAnime id={ID}/>
        <BannerAnime title='Anime'/>
        <Separator className='h-1'/>
    </main>
  )
}

export default page