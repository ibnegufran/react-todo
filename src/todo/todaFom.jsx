import { useState } from "react";

export const Form =({onAddTodo})=>{


    const [inpValue,setInp]=useState({});
    const handleInput=(val)=>{
        setInp({id:val,content:val,checked:false});
        
      }

      const handleSubmit=(event)=>{
event.preventDefault();
onAddTodo(inpValue);
setInp({id:"",content:""});

      }
      const clearAll =()=>{
        onClearAll();
      }
      

    return(
        <form action="" onSubmit={handleSubmit}  className="flex items-center justify-center flex-col gap-8">
          <div className="relative w-full  inline-block">
   <input type="text" className="text-3xl py-4 px-6 rounded-full outline-none w-[40rem] sm:w-[50rem] " placeholder="enter todo item" value={inpValue.content} onChange={(event)=>  handleInput(event.target.value)}/>
   <button type="submit" className="text-3xl    py-4 px-6 text-center  font-bold uppercase absolute top-0 right-0 border-l-2 border-gray-900">add item</button>
   </div>
   
   </form>
    );

    
}