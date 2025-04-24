import React, { useState } from "react"
import { NavbarElements } from "../constants"
import { Button } from "../components/ui/Button"
import {ChevronDown, Cross, CrossIcon, Delete, DeleteIcon, FlipHorizontal, FlipVertical, Globe, LucideShowerHead, Menu, SquareDashed, TrashIcon, UniversityIcon, X} from "lucide-react"


const Navbar = () => {
const[isOpen,setIsOpen]=useState(false);
const handlePopUp=()=>{
    setIsOpen(!isOpen);
}
  return (
    <header>

      <div className=" bg-black px-4 text-xs md:text-sm">
        <div className="max-w-7xl mx-auto">

            <div className= "flex justify-between items-center text-white py-2 ">
                <div></div>
                <div className="flex justify-center items-center md:gap-3 lg:gap-3 sm:gap-2 gap-1">
                   
                <p className="text-center ">
                    Summer sale for all Swim suits and free express Delivery -OFF 50%
                </p>
                <button className="font-semibold hover:text-red-400">Shop Now</button>
                </div>
                <p className="hidden md:flex">
                    English
                </p>
                <Globe className="md:hidden flex"/>

            </div>
        </div>
       
      </div>
      <div className="max-w-7xl">
        <div className="flex justify-between items-center md:px-10 py-2 px-1 ">
            <div className="text-xl font-semibold md:text-2xl tracking-tighter ">
                Website Logo

            </div>
            <div className="hidden gap-10 text-gray-500 md:flex">
             {
            NavbarElements.map((item,index)=>(
                <a href={item.href} key={index}>{item.name}</a>
            ))
            }

            </div>
            <div className="flex gap-2 ">
                <div className="py-1   text-gray-500 border border-gray-500 rounded-full  flex cursor-pointer px-5">
                Start Free trial
 
                </div>
                <div className=" md:hidden flex">
                    <Button type="button" variant='outline' onClick={handlePopUp} className='rounded-full active:bg-black active:text-white'>
                    <Menu/>
                    <X/>
                    </Button>

                </div>



            </div>
           

        </div>
      </div>
      { isOpen &&
       ( <div className="shadow-xl   h-[290px] border  mx-4 px-5 py-10" >
        <div className="flex flex-col gap-4 mb-5">
        {
            NavbarElements.map((item,index)=>(
                <a href={item.href} key={index}>{item.name}</a>
            ))
            }
        
        </div>
        <Button className="bg-blue-600">
                Get Started Now
            </Button>


      </div>)}
    </header>

  )
}

export default Navbar