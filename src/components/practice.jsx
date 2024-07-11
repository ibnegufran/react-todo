import { useState } from "react";

// const users=

export const DisplayUsers =()=>{
    // console.log(users[0].name);

    let   [users,setCount] =useState([
        {name : "ansrai", age: 2420},
        {name : "john", age: 244},
        {name : "smith", age: 220},
        {name : "bhau", age: 20}
    
    ]);
   let totalCount=users.length;
   let average=(users.reduce((accum , ele)=> accum + ele.age ,0))/totalCount;
   console.log(average);
    return(
        <>
        <h1 className="text-center text-5xl p-8">users list</h1>

        {/* <p className="text-center text-5xl p-8" on={change}>name : {users.name}</p>
        <p className="text-center text-5xl p-8">age : {users[count].age}</p> */}









<ul>
{users.map((element,index)=>{
    return(
<li key={index}>
<p className="text-center text-5xl p-8">name : {element.name}</p>
<p className="text-center text-5xl p-8">age : {element.age}</p>


</li>
);
})}

</ul>
<p className="text-center text-5xl p-8">total : {totalCount}</p>
<p className="text-center text-5xl p-8">average : {average}</p>



</>
    );

}