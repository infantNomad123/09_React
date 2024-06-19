import React, {useState} from 'react'

const ClickCount = () => {
    const [count, setCount] = useState(0);
    

    return(
        <div className = "clickCountContainer">
            <button className = 'cyan' onClick={()=>{setCount(count-1)}}>-</button>
            <span>{count}</span>
            <button className='magenta' onClick={()=>{setCount(count+1)}}>+</button>
            
          
        </div>
    );
}


const FunctionEx = () => {
    return(
        <>
            <ClickCount/>
        </>
    );
}
export default FunctionEx;