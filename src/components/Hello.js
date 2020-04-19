import React from 'react'

// Dung JSX
// const Hello = () => {
//     return (
//         <div className ="dummyClass">
//             <h1>Hello Anh</h1>
//         </div>
//     )
// }

// Ko dung JSX 


    const Hello =  () => {
        return React.createElement('div', {id:'hello', className:'dummyClass'}, React.createElement ('h1', null, 'Hello Anh'));
    }
export default Hello;