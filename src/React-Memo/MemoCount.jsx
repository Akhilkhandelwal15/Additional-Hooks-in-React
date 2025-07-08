import React, { useRef } from "react";

const MemoCount = ()=>{
    const renderCount = useRef(0);
    console.log("I am re-rendering");
    return (
        <div>
            <p>Nothing changed here but still re-rendered</p>
            <p>{renderCount.current++}</p>
        </div>
    );
}

export default React.memo(MemoCount);