import React from 'react'

function FunctionClick() {

    function clickHandler(){
        console.log('Button clicked')
    }
    return (
        <div>
            <button onClick={clickHandler}>Click</button> 
        </div>
    )
} // we passe the function as the eventHandler not string so u using {} with out () after the function

export default FunctionClick
