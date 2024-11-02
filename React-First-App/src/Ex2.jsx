import { useState } from "react";

function Ex2()
 {
   const [count,setCount] = useState(0)
   const handleClick = () =>{
       setCount(count+1);
   }
   const Decrement = () =>{
       setCount(count-1);      
  }
   return(
     <>
     <h1> This is counter value:{count}</h1>
     <button style = {{color:'green'}}onClick = {handleClick}>Increment</button>
     <vbutton style ={{color:'red'}}onClick = {Decrement}>Decrement</vbutton>
     </>
   )
 }
 export default Ex2;