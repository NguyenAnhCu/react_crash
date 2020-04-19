import React from 'react'


// function Greet(){
//     return <h1>Hello Nguyen Anh</h1>
// Co 2 cach de destructure props : 1 thay const Greet = ({param}); 2 la them const{param} = props 
// }

const Greet = (props) => {
    const {name, hero} = props
return(
    <div>
        <h1>Hello {name} a.k.a {hero}</h1>
        {props.children}
    </div>

    ) 
}

export default Greet;