import React, { useState } from 'react'

function LiftingState() {
const [inpValue,setInp]=useState("");

console.log(inpValue);

  return (
    <>
    <h1 className='text-8xl text-center'>lifting state up</h1>
    <input type='text' placeholder='enter your name' value={inpValue} className='text-xl ' onChange={(e)=> setInp(e.target.value)}></input>
    </>
  );
}

export default LiftingState