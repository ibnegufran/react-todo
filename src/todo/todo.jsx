// import React from 'react'

import { useState } from "react";
import { Form } from "./todaFom";
import { Items } from "./todoItem";


export const Todo = ()=> {
let localTodo="localtodo";
  const [timer,setTimer]=useState("");
  const [inpArray,setArray]=useState(()=>{
    let getData=localStorage.getItem(localTodo);

    if(!getData) return[];

    return JSON.parse(getData);
  });

  const changeCheck=(value)=>{
 
   let updateCheck= inpArray.map((curVal)=>{
    if(curVal.content === value){
    
      return {...curVal, checked:!curVal.checked};
    }
    else{
      return curVal;
    }
    });
    setArray(updateCheck);
    }

const handleSubmit = (inpValue)=>{
  const {id , content , checked} =inpValue;
  
  console.log(content)
  console.log(content);
  if(!content) return;
  
  const ifExist=inpArray.find((curVal)=> curVal.content === content);
  if(ifExist) return;
  
  setArray((prev)=>[...prev,{id, content,  checked}]);
}

localStorage.setItem(localTodo,JSON.stringify(inpArray));

const deleteItem=(item)=>{
  
    let deleted=inpArray.filter((element)=> element.content !== item);
   setArray(deleted);
   
   
   } 



setInterval(()=>{
  
  const date=new Date();
  const localDate=date.toLocaleDateString();
  const time=date.toLocaleTimeString();

  setTimer(`${localDate} - ${time}`);

},1000);
const clearAll =()=>{
  setArray([]);
}





  return (

    <section className=" px-4 max-w-[1200px] my-0 mx-auto h-full flex items-center justify-center">
      <div className="flex items-center justify-center flex-col flex-wrap gap-8 ">
   <h1 className='uppercase text-5xl text-white font-bold'>todo list</h1>
   <div><span className="text-white text-4xl ">{timer}</span> </div>
<Form onAddTodo={handleSubmit} />

        
<ul>
  {inpArray.map((ele)=>{
return <Items  item={ele.content} key={ele.id} onDelete={deleteItem} checked={ele.checked} onHandleChecked={changeCheck}/>

})}
</ul>
<button className="text-2xl bg-red-500 py-4 px-12 text-center rounded-full font-bold uppercase text-white" onClick={clearAll}>delete all</button>
</div>
   </section>
  );
}

