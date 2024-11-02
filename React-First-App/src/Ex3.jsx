import { useState } from "react";

function Ex3()
{
const [count,setCount] = useState(0)
const Incrementby1 = () =>{
    setCount(count+1);
}
const Incrementby2 = () =>{
    setCount(count+2);
}
const Incrementby3 = () =>{
    setCount(count+3);
}
const Incrementby4 = () =>{
    setCount(count+4);
}
const Incrementby5 = () =>{
    setCount(count+5);
}
return(
    <>
    <h1> This is counter value:{count}</h1>
    <button style = {{color:'green'}}onClick = {Incrementby1}>Incrementby1</button>
    <button style = {{color:'green'}}onClick = {Incrementby2}>Incrementby2</button>
    <button style = {{color:'green'}}onClick = {Incrementby3}>Incrementby3</button>
    <button style = {{color:'green'}}onClick = {Incrementby4}>Incrementby4</button>
    <button style = {{color:'green'}}onClick = {Incrementby5}>Incrementby5</button>
    </>
)
} 
export default Ex3;