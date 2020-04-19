import React, { Component } from 'react'

export class Counter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    increment() { // never modify the state directly
        // this.setState({
        //     count: this.state.count + 1
        // }, () => { console.log('Callback value', this.state.count)}) // Code executed after state updated, place that code in callback function which is 2nd argument in setState method
        this.setState((previousState,props)=>({
            count: previousState.count + 1
        }))
        console.log(this.state.count)
    }

    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render() {
        return (
            <div>
                <div>Count - {this.state.count}</div>
                <button onClick={() => this.incrementFive()}>Increment</button>
            </div>
        )
    }
}

export default Counter
