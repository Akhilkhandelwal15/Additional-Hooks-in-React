// Primary usecase of useref hook: to change/update dom elements without re-rendering the component.

import { useRef } from "react";

export const UseRefHook3 = ()=>{

    const btnRef = useRef();

    function handleClick(){
        btnRef.current.style.backgroundColor = "red";
    }

    return (
        <div>
            <button ref={btnRef}>Button</button>
            <button onClick={handleClick}>Change color</button>
        </div>
    );
}