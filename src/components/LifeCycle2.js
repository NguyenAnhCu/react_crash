import React, { Component } from 'react'

class Lifecycle2 extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Anh'
        }
        console.log('Cycle 2 constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('Cycle 2 getDrivedStateFromProps')
        return null
    }
    
    componentDidMount(){
        console.log('Cycle 2 componentDidMount')
    }

    componentDidMount(){
        console.log('Cycle 2 componentDidMount')
    }

    shouldComponentUpdate(){
        console.log('Cycle 2 shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('Cycle 2 getSnapshotBeforeUpdate')
        return null;
    }

    componentDidUpdate(){
        console.log('Cycle 2 componentDidUpdate ')
    }

    render() {
        console.log('Cycle 2 render')
        return (
            <div>
                Cycle 2
            </div>
        )
    }
}

export default Lifecycle2
