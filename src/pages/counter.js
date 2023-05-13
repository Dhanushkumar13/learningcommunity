import React, { useState } from "react";
 
export function PageCounter() {
    const [count, setCount] = useState(0);


function handler(identifier =""){
    if(identifier === "increment"){
        setCount(count + 1);

    }else{
        setCount(count - 1);
    }
}
return(
    <div className="counter-container">
        <h1 className="count">{count}</h1>
        <div className="button-container">
            <button onClick={()=> handler("increment")}>+</button>
            <button onClick={handler}>-</button>
            
        </div>
    </div>
);
}