import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem } from "../components/ui/dropdown-menu"
import { HeroSectionContent } from '../constants'
import { Apple, AppleIcon, ArrowBigRight, ChevronRight } from 'lucide-react'
import apple from "../assets/apple14.jpg"
const HeroSection = () => {
  return (
    <div className='max-w-7xl mx-auto px-4 '>
        <div className='grid grid-cols-1 md:grid-cols-5'>
            <div>
                <ul className='flex flex-col gap-4 border-r-2  border-gray-400'>
                    {
                        HeroSectionContent.map((item)=>(
                            <li className='flex justify-between hover:text-red-400 duration-300'>

                                <a href="">{item.name}</a>
                                <ChevronRight className='size-5'/>
                            </li>
                        )
                        )
                    }
                </ul>
            </div>
            <div className='col-span-4 p-6 lg:p-8'>
               <div className='bg-black text-white'>
                <div className='grid grid-cols-1 md:grid-cols-2'>
                 <div className='flex flex-col justify-center items-start p-6 lg:p-12 gap-6'>

                    <p className='flex gap-4 items-center'> <span><AppleIcon className='text-3xl lg:text:5xl'/></span>Iphone 14 series</p>
                    <h1 className='text-4xl md:text-5xl'>Up to 10% off Voucher</h1>
                    <button className='flex items-center gap-3 group'>Shop Now
                        <span className='hover:group-hover:translate-x-1  duration-200'><ArrowBigRight/></span>
                    </button>
                 </div>
                  {/* Image Section */}
                 <div>
                   <img src={apple} alt="Iphone14"  className='size-70'/>
                 </div>
                </div>
               </div>
            </div>
        

        </div>
        
    </div>
  )
}

export default HeroSection