import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react";


const Todo = ({onAddTask}) => {
    const [value, setValue] = useState('');
  
  return (
    <div className="flex flex-col gap-4">
     <div className="flex h-15 ">
       <Textarea placeholder="Type a new todo" value={value} onChange={(e)=>setValue(e.target.value)}>
       </Textarea>
       <Button className="bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 rounded-md h-full" onClick={()=>{setValue('');onAddTask(value);}}>Add</Button>



     </div>
    </div>
  )
}

export default Todo