import React, { Component } from 'react'

 class EventBind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message:'Hello'
        }

        // this.clickHandler = this.clickHandler.bind(this) // best option for eventBinding
    }

    // clickHandler(){
    //   this.setState({
    //       message:'Goodbye'
    //   })
    //   console.log(this)
    // }
    clickHandler = () => {
        this.setState({
            message: "Goodbye!!!"
        })
    }
   
    
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickHandler.bind(this)}>Click Event</button> */}
                <button onClick={this.clickHandler}>Click Event</button>
                {/* Second approach */}
            </div>
        )
    }
}

export default EventBind
