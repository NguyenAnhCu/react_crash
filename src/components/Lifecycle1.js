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

    shouldComponentUpdate(){
        console.log('Cycle 1 shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('Cycle 1 getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log('Cycle 1 componentDidUpdate ')
    }

    changeState = () => {
        this.setState({
            name:'Code practice'
        })
    }

    render() {
        console.log('Cycle 1 render')
        return (
            <div>
                <div>Cycle 1</div>
                <button onClick = {this.changeState}>Change state</button>
                <Lifecycle2 />
            </div>
        )
    }
}

export default Lifecycle1

