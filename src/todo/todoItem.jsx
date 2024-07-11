import { IoMdCheckmark  } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";
import { useState } from "react";

export const Items=({item ,onDelete, checked,onHandleChecked})=>{
// const [toggle,setToggle]=useState(true);



    return(

  <li  className="my-4 list-none text-3xl py-2 px-6 rounded outline-none w-[40rem] bg-white flex items-center justify-between gap-8" >


<span className={`text-gray-900 text-3xl ${checked === true ? "line-through" :"" }`}>{item}</span>


<div className="flex items-center justify-between gap-2">
<button className="p-3 bg-green-500 text-[1.8rem] text-white rounded-full" onClick={()=>onHandleChecked(item)}>
<IoMdCheckmark />
</button>
<button className="p-3 bg-red-500 text-[1.8rem] text-white rounded-full" onClick={()=>onDelete(item)}>
<MdDeleteForever />
</button>
</div>
  </li>
    );
}