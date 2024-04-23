import React from 'react'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Input} from "@nextui-org/react";
import { Calendar, LibraryBig, MailIcon, Search, SearchIcon } from 'lucide-react';
const Header = () => {
  return (
    <Navbar shouldHideOnScroll className=''>
      <NavbarBrand>
        <Link href='/' className="font-bold text-inherit text-xl uppercase">Anime-ku</Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#" className='flex gap-1'>
            <Calendar size={20}/>
            planning
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" className='flex gap-1' href="#">
            <LibraryBig size={20}/>
            catalogue
          </Link>
        </NavbarItem>

      </NavbarContent>
      <NavbarContent justify="end">
        
      <NavbarItem className="">
      <SearchIcon/>
        </NavbarItem>
      </NavbarContent>
    </Navbar>

  )
}

export default Header