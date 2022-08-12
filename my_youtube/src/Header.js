import React from 'react'

function Header(props) {
    var condition = true;
    return (
        <>
            <div>This is a Header file {props.count}</div>
            {/*condition && <div> The condition is true</div>*/}
            {!condition && <div>The condition is false</div>}

            {condition ? <div> The condition is true</div> : <div> The condition is false</div>}
        </>
        
    )
}


export default Header;