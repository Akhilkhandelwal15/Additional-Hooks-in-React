import React, { useRef } from "react";

const ChildMemoComponent  = ({person})=>{
    console.log("person");
    const total = useRef(0);
    return (
        <>
            <p>Total: {total.current++}</p>
        </>
    );
}

export default React.memo(ChildMemoComponent);