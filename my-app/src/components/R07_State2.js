import React, { useState } from 'react';

const StateEx2 = (props) => {
    
    //props로 전달받은 값중
    // init값을 count 초기값으로 설정

    //setCount()를 이용해 count 값 변경
    // -> StateEX2 컴포넌트 변경된 부분만 리랜더링 진행
    const [count,setCount] = useState(Number(props.init));

    return(
        <div className = 'count-container'>
            <button onClick={() => { setCount(count - Number(props.step)) }}>-{props.step}</button>
            <h3>{count}</h3>

            <button onClick = {() => {setCount(count + Number(props.step))}}>+{props.step}</button>
        </div>
    );
}
export default StateEx2;
