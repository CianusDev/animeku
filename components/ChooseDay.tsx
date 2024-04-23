"use client"
import { Days } from '@/lib/Days'
import { useDays } from '@/lib/day.store'
import { Select, SelectItem } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'

const ChooseDay = () => {
    const {days,setDays}=useDays()
    useEffect(()=>{
        console.log(days);
    },[days])
  return (
    <div className='w-full p-4 m-auto'>
    <nav className='flex  h-10 items-center justify-start'>
    <Select
      items={Days}
      onChange={(e)=>setDays(e.target.value)}
      label="jour de la semaine"
      className="max-w-52"
      defaultSelectedKeys={[days]}
    >
      {(day) => <SelectItem key={day.value}>{day.value}</SelectItem>}
    </Select>
    </nav>
</div>
  )
}

export default ChooseDay