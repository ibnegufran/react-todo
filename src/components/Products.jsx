import cartData from "../api/cartData.json"
import styled from 'styled-components'

import { Cart } from "./cart";
// import {NewFile} from "./new";

 const Products =()=>{
   let src =cartData[0].img_url;
    let rating=1;
// console.log(rating);
    
                return (
                <>
              <ul className="max-w-[1200px] bg-orange-500 my-0 mx-auto grid grid-cols-auto-30 items-center justify-center gap-8 p-4">
{cartData.map((element,index)=>{
return (
<Cart data={element}  id={element.id} rating={rating} />
 );
         })};
        
                   </ul>
          </>
      );


    };


    export default Products

      



