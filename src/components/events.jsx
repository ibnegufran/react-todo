import { useState } from "react";


export  const Events=()=> {


    let [user,setUser]=useState("abdurrahman");

    


const handleClick=()=>{
        setUser(()=> "abdurrahman ansari");
     
    }
    const handleEnter=()=>{
        alert("you haver me");
    }
  return (
    // <button className="font-8xl p-8 " >click me</button>
    <ClickEvent onClicking={()=>handleClick()}  onEnter={()=>handleEnter()} user={user}/>


  );
}



const ClickEvent=(props)=>{
    return(
        <>
    <button onClick={props.onClicking} className='px-4 py-2 text-xl border'>click me</button>
    <button onMouseEnter={props.onEnter}  className='px-4 py-2 text-xl border  border-b-lime-950'>click me</button>
    {/* <button onClick={}>click me</button> */}
    <p className="font-5xl">user : {props.user}</p>
    </>
)

}
