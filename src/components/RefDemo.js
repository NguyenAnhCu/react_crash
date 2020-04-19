import React, { Component } from 'react'

class RefDemo extends Component {
    constructor(props) {
        super(props)
        this.cbRef = null
        this.inputRef = React.createRef();
        this.setCbRef = (element) => {
            this.cbRef = element;
        }
    }

    componentDidMount(){
        if(this.cbRef){
            this.cbRef.focus()
        }
        // this.inputRef.current.focus()
        // console.log(this.inputRef)
    }

    clickHandler = () => {
        alert(this.inputRef.current.value) // acess the value property of the input DOM note
    }
    
    render() {
        return (
            <div>
                <input type = 'text' ref ={this.inputRef}></input>
                <input type = 'text' ref ={this.setCbRef}></input>
                <button onClick = {this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default RefDemo
