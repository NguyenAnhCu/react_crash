import React, { Component } from 'react'
import Lifecycle2 from './LifeCycle2'

class Lifecycle1 extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Anh'
        }
        console.log('Cycle 1 constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('Cycle 1 getDrivedStateFromProps')
        return null
    }
    
    componentDidMount(){
        console.log('Cycle 1 componentDidMount')
    }

    render() {
        console.log('Cycle 1 render')
        return (
            <div>
                <div>Cycle 1</div>
                <Lifecycle2 />
            </div>
        )
    }
}

export default Lifecycle1

