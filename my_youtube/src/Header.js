import React, { useEffect, useState } from 'react'

function Header(props) {

    var condition = true;
    var count = props.counter;
    var [count,setCount] = useState(props.counter);

    useEffect(()=>{
        console.log("Effect is running")
    },[count]);

    return (
        <>
            <div>Counter says :  {count}</div>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            {/*condition && <div> The condition is true</div>*/}
            {/*!condition && <div>The condition is false</div>*/}

            {condition ? <div> The condition is true</div> : <div> The condition is false</div>}
        </>
        
    )
}


export default Header;