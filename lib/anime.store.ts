import { create } from 'zustand';

export type AnimeInfoType = {
    titre:string;
    titre2:string;
    cover:string;
    synopsis:string;
    saison: object;
    genres:string;
}

type AnimeStoreType = {
    Anime : AnimeInfoType|null,
    setAnime : (Animes : AnimeInfoType) => void
}

export const useAnimes = create<AnimeStoreType>((set)=>({
    Anime:null,
    setAnime : (Anime) => set({ Anime }),
}))