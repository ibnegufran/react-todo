import styled from 'styled-components'

export const Cart =({data,rating})=>{
const btn_style={
    color:'black',
    backgroundColor:'#222',
    padding:'1rem 1.5rem',
    outline:'none',
    border:'none',
    borderRadius:'1rem'
}
    const {naming,img_url,desc} = data; 
    // const {data}=props;
    // console.log({data})

    const rating_style=rating > 7 ? {color:'green',fontSize:'2.5rem'}:{color:'red'};
    let Heading=styled.h1`
        // color:#222;
        font-size:2rem;
    `;

    const handleClick=(naming)=>{
        console.log(naming);
        naming="ansari";
        // alert("alert alert");
     naming= prompt("are you happy");

    }
return (
    <li >
    <div className="border text-center p-8">
     <img src={img_url} alt="" className='w-full h-80 '/>
    <Heading className='text-red-700'>{naming}</Heading>
    <Heading>hii </Heading>

    <p>{desc}</p>
    <p style={ rating_style} className="rating">{rating}</p>
    <button  className='p-4 bg-transparent border-2 border-slate-100' onClick={() => handleClick(naming)}>check more </button>
    </div>
    
      </li>
 
);
};