"use client"
import React, { useEffect, useState } from 'react'
import { ScrollArea, ScrollBar } from './ui/scroll-area'
import AnimePepiteCard from './AnimePepiteCard';


const GridCardPepite = () => {
  const [animes,setAnimes] = useState<any[]>(['']);

  useEffect(()=>{
   fetch("http://localhost:5000/pepites").then(response => {
              // Vérifiez si la réponse est OK (200)
              if (!response.ok) {
                throw new Error('La requête a échoué');
              }
              // Parse la réponse JSON
              return response.json();
              
            })
            .then(data => {
              // Utilisez les données récupérées
              console.log(data);
              setAnimes(data)
            })
            .catch(error => {
              console.error('Erreur lors de la récupération des données :', error);
            });
  },[])
  
return (
  <div className=' flex w-full'>
  {/* <section className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      
  </section> */}
  <ScrollArea className=" max-w-max flex whitespace-nowrap rounded-md border">
  <div className="flex w-max space-x-4 p-4">
  {animes.map((a,i)=>(
          <AnimePepiteCard key={i} titre2={a.titre2}  img={a.img} url={a.url} titre={a.titre}  id={0}   />
      ))}
      <ScrollBar orientation='horizontal'/>
      </div>
  </ScrollArea>
  </div>
  )
}

export default GridCardPepite