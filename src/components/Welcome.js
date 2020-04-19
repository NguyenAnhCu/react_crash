import React, {Component} from 'react';

class Welcome extends Component {
    render(){
        const {name, hero} = this.props
        //const {state1, state2} = this.state // Destructure the STATE
    return <h1>Welcome {name} a.k.a {hero}</h1> // PROPS IS IMMUTABLE nghia la KO the tu set props.name ="value"
    }
}

export default Welcome;