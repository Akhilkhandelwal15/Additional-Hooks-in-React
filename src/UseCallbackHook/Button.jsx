import React from "react";
const Button = ({onClick, children})=>{
    console.log("Button component rendered");
    return (
        <>
            <button onClick={onClick}>{children}</button>
        </>
    );
}

export default React.memo(Button);