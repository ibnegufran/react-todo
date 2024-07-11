import React, { useState } from 'react'

function State() {
    const [name,setName]=useState(0);

const nameChange=()=>{
    setName(()=> name + 1);
}

  return (
   <>
   <button  onClick={nameChange}>click me </button>
   <p>{name}</p>
   </>
  )
}

export default State