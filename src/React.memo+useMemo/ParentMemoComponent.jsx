import { useMemo, useState } from "react";
import ChildMemoComponent from "./ChildMemoComponent";

export const ParentMemoComponent = ()=>{
    const [count, setCount] = useState(0);

    // const name= "Akhil"
    
    // const person = {
    //     name: "Akhil",
    //     age: 22
    // }

    const person = useMemo(()=>{
        return {
            name: "Akhil",
            age: 22
        };
    },[])
    return (
        <>
            <p>Count: {count}</p>
            <button onClick={()=>setCount(prev=>prev+1)}>Increment Count</button>
            <ChildMemoComponent data={person}/>
        </>
    );
}