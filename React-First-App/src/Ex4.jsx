import { useState } from "react";

function Ex4()
{
const [Apple,setApple] = useState(0)
return(
    <>
    <h1> Number of Apples:{Apple}</h1>
    {Apple=== 0 ? (
        <p> No apples left !</p>):
        (
            <p> Great ! you have someapples</p>
        )
    }
    <button onClick = {() => setApple(Apple+1)}>Add 1 Apple</button>
    <button onClick = {() => Apple> 0 && setApple(Apple-1)}>Remove 1 Apple</button>/
    <button onClick = {() => setApple(0)}>Reset</button>
    </>
) ;
} 
export default Ex4;
