"use client"
import Banner from "@/components/Banner";
import ChooseDay from "@/components/ChooseDay";
import Footer from "@/components/Footer";
import GirdCardRecent from "@/components/GirdCardRecent";
import GridCard from "@/components/GridCard";
import GridCardPepite from "@/components/GridCardPepite";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  
  return (
    <main className="">
      <Header/>
      <Hero/>
      <Banner title="planning"/>
      <ChooseDay/>
      <GridCard />
      <Banner title="recement ajouté"/>
      <GirdCardRecent/>
      <Banner title="les pepites"/>
      <GridCardPepite/>
      <Footer/>
    </main>
  );
}
