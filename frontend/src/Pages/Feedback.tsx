import React, { useState } from 'react'
import Navbar from '../modules/Navbar'
import { Button } from '../components/ui/Button'

const Feedback = () => {
    const [value,setValue]=useState('');
    const [status,setStatus]=useState('typing');
    const [firstName,setFirstName]=useState('');
    const [lastName,setLastName]=useState('');
    const isSending=status=='sending';
    const isSent=status=='sent';
    const fullName=firstName+' '+lastName;
    const handleSubmit=async(e)=>{
        e.preventDefault();
        setStatus('sending');
        await sendMessage(value);
        setValue('');
        setStatus('sent');
 
    }
    const handleFirstName=(e)=>{
        setFirstName(e.target.value)

    }
    const handleLastName=(e)=>{
        setLastName(e.target.value)
    }
const sendMessage = (value)=>{
    return new Promise(resolve => {
        setTimeout(resolve, 2000);
      });
    }
    

  return (
    <div>
  <Navbar/>
  <div className='flex'>

  
  <div className='relative w-[50%]'>

   {isSent ? <p className='text-xl font-bold'>Thanks for feedback</p>:
   <div className='flex items-center justify-center h-50 mt-24  '>
   <form onSubmit={handleSubmit} className='flex flex-col gap-3 shadow-md p-10 mt-10'>

      <p className='text-2xl line-clamp-2 tracking-tighter  font-bold'>Give your feedback</p>
       <textarea  className='px-2 py-1  resize-none overflow-hidden h-52 w-80 border border-b-2' disabled={isSending} value={value} onChange={(e)=>{
           setValue(e.target.value)
       }
       }/>
       <Button type="submit" disabled={isSending}>Submit</Button>
       {isSending && <p>Sending...</p>}

   </form>
</div>

   }
     
        
  </div>
        <div className='flex justify-center items-center h-fit shadow-md p-4 mt-10 w-[350px]'>
            <div className='flex flex-col gap-4 w-full'>
                <h1 className='text-2xl font-bold tracking-tighter'>Ticket Checkout</h1>
                <div className='flex gap-2'>
                <label htmlFor="">FirstName</label><input type="text" className='border border-black-6 px-2 py-1 w-full  ' value={firstName} onChange={handleFirstName}/>
                </div>
                <div className='flex gap-2'>
                <label htmlFor="">Lastname</label><input type="text" value={lastName} className='border border-black-6 px-2 py-1 w-full  ' onChange={handleLastName} />
                </div>
               
                <p className='text-sm'><span>Your ticket will be registered in : </span>{fullName}</p>
            </div>

        </div>
    </div>
    </div>
  )
}

export default Feedback