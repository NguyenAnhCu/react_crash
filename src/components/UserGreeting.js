import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true
        }
    }
    

    render() {


        return this.state.isLoggedIn && <div>Welcome Anh</div> // nen dung

        // return(
        //     this.state.isLoggedIn ? (
        //         <div>Welcome Anh</div>
        //     ) : (
        //         <div>Welcome Guest</div>  // cach so 3 nen dung
        //     )
        // )
        // if (this.state.isLoggedIn){   // cach so 1
        //     return (
        //         <div>Welcome anh</div>
        //     )
        // } else {
        //     return ( 
        //     <div> Welcome Guest</div>
        //         )
           
        // }
    //    let message    // cach so 2
    //    if( this.state.isLoggedIn){
    //        message = <div>Welcome Anh</div>
    //    } else {
    //         message = <div>Welcome guest</div>
    //    }
    // return <div>{message}</div>
        }
}

export default UserGreeting
