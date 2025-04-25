import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from 'lucide-react';

import React from 'react';
const FlashSales=()=> {


    

  return (
    <div className='my-24 w-full'>

    <div className='max-w-7xl mx-auto px-4 lg:px-8'>

        <div className='flex items-center gap-4'>
            <div className='w-4 h-8 bg-red-500 rounded-md'></div>
            <p className='text-red-500 '>Today's</p>
        </div>
        <div className='flex  items-center justify-between mt-1 '>
            <div className='flex text-center gap-8'>

            <p className='text-3xl md:text-4xl font-semibold'>Flash Sales</p>
            <div className='flex  gap-3'>
                <div>
                    <p>Days</p>
                    <p className='text-3xl lg:text-4xl  font-bold'>03</p>

                </div>
                <p className='text-3xl font-bold mt-2 text-red-500'>:</p>
                <div>
                    <p>Hours</p>
                    <p className='text-3xl lg:text-4xl font-bold'>23</p>

                </div>
                <p className='text-3xl font-bold mt-2 text-red-500'>:</p>

                <div>
                    <p>Minutes</p>
                    <p className='text-3xl lg:text-4xl font-bold'>19</p>

                </div>
                <p className='text-3xl font-bold mt-2 text-red-500'>:</p>

                <div>
                    <p>Second</p>
                    <p className='text-3xl lg:text-4xl font-bold'>56</p>

                </div>

            </div>

            </div>
            <div className='flex gap-2'>
    <ArrowLeftCircleIcon className='bg-gray-300 hover:bg-gray-400 md:h-5 md:w-5 justify-center items-center duration-200 rounded-full'/>
    <ArrowRightCircleIcon className='bg-gray-300 hover:bg-gray-400 md:h-5 md:w-5 justify-center items-center duration-200 rounded-full'/>
</div>
        </div>
    </div>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:gird-cols-4'>
        <div>
            
        </div>
    </div>
    </div>
  )
}

export default FlashSales