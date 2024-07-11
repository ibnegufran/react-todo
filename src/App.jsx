// import { Component } from "./components/pr1";
// import Products  from './components/Products';
// import { Events } from "./components/events";
// import State from "./components/state";

// import Mini from "./components/mini1";

// import LiftingState from "./components/liftingState";

// import { DisplayUsers } from "./components/practice";
import {Todo} from "./todo/todo";

export const App =()=> {
  let s2="full stack web developer";
 function skill(){
Component.greeting="hii";
//  alert('shot')
 }
  return (
    
      <>
<div className="h-screen w-screen px-2 bg-gray-900">
{/* <Products /> */}
{/* 
<Events />

<State /> */}
<Todo />
{/* <DisplayUsers /> */}

{/* <LiftingState /> */}




{/* <Mini /> */}


{/* 
<Component
name="abdurrahman"
age={20}
greeting={
  <div>
    <p>hii i am a {s2}</p>
  </div>
}
>
<p>nice to meet you</p>
<button onClick={skill}>know about me</button>

  
</Component> */}
</div>
      </>

    
  );
};


