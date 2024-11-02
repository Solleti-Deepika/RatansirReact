import { useState } from "react";

function Ex1()
 {
   const [count,setCount] = useState(0)
   const handleClick=() => {
             setCount(count+1);
           }
           return(
             <>
             <h1> This is counter value:{count}</h1>
             <button style = {{color:'green'}} onClick ={handleClick}>Increment</button>
             </>
           )

 } 
 export default Ex1;
