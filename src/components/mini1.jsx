import React, { useState } from 'react'

function Mini() {
    const [value,setValue]=useState(false);
    const change=()=>{
      
    }
  return (
    <>
    <div className='p-40'>
<div className={`h-32    ${value === false ? "bg-red-500" : "bg-green-500"} rounded-full w-[20rem] items-center flex px-4 cursor-pointer relative transition duration-1000`} onClick={()=>setValue(!value)}>
    <div className={`border-4 rounded-full p-6 h-24 w-24  text-2xl  transition-all duration-1000 text-white ${value === false ? "translate-x-0" : "translate-x-44"} `}>
       <p className='text-center'> {value === false ? "OFF" : "ON"}</p>
    </div>
</div>
    </div>
    </>
  )
}

export default Mini