import { create } from 'zustand';

type DayStoreType = {
    days : string,
    setDays : (days : string) => void
}

export const useDays = create<DayStoreType>((set)=>({
    days:"lundi",
    setDays : (days) => set({ days }),
}))