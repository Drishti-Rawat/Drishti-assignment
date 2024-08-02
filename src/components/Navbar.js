"use client";
import Link from "next/link";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import { DropdownMenuGroup } from "@radix-ui/react-dropdown-menu";

const Navbar = () => {
  return (
    <nav className="fixed z-20 flex justify-end items-center w-full overflow-hidden   px-5 py-3 ">
      <div className="hidden md:block">
        <div className="flex   gap-6 text-amber-400 font-semibold  px-6 py-5">
          <Link href="/">
            <h2>Home</h2>
          </Link>
          <Link href="/">
            <h2>Courses</h2>
          </Link>
          <Link href="/">
            <h2>About</h2>
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="border-none outline-none">
              IT-Services
            </DropdownMenuTrigger>
            <DropdownMenuContent className=" border-none  py-2 px-1 flex  flex-col gap-3 mt-2">
            
            
              

              <Link href="/Drones-and-Robotics"> <DropdownMenuItem>Drones & Robotics</DropdownMenuItem></Link>
                   <Link href="/CyberAnalysis"> <DropdownMenuItem>Cyber Analysis</DropdownMenuItem></Link>
                   <Link href="/Artificial-Intergration"> <DropdownMenuItem>Artificial Integration</DropdownMenuItem></Link>
                   <Link href="/"> <DropdownMenuItem>App Development</DropdownMenuItem></Link>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/">
            <h2>Contact</h2>
          </Link>
        </div>
      </div>


      <div className="block md:hidden  ">
        <DropdownMenu  className="mx-5  px-7 py-6">
          <DropdownMenuTrigger asChild>
            <Menu  color="yellow"/>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-44 sm:w-56 mx-8 ">
            <DropdownMenuGroup>
              <DropdownMenuItem>Home</DropdownMenuItem>
              <DropdownMenuItem>Courses</DropdownMenuItem>
              <DropdownMenuItem>About</DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <span>IT-Services</span>
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                   <Link href="/Drones-and-Robotics"> <DropdownMenuItem>Drones & Robotics</DropdownMenuItem></Link>
                   <Link href="/CyberAnalysis"> <DropdownMenuItem>Cyber Analysis</DropdownMenuItem></Link>
                   <Link href="/Artificial-Intergration"> <DropdownMenuItem>Artificial Integration</DropdownMenuItem></Link>
                   <Link href="/"> <DropdownMenuItem>App Development</DropdownMenuItem></Link>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
              <DropdownMenuItem>
                <span>New Team</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;
