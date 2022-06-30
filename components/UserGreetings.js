import React, { Component } from 'react'

class UserGreetings  extends Component{
 
         constructor(props) {
           super(props)
         
           this.state = {
            isLoggedIn:true
           } 
         }

  render() {
return this.state.isLoggedIn&&<div>WELCOME ARJUN</div>
// return(
// this.state.isLoggedIn?<div>WELCOME ARJUN</div>:<>WELCOME GUEST</>

// )


// if(this.state.isLoggedIn){
//     return (<>
//     WELCOME ARJUN
//     </>)
// }
// else{
//     return <>WELCOME GUEST</>
// }
    // return (

    //     <>
    //     <div>WELCOME ARJUN</div>
    //   <div>WELCOME GUEST</div>


    //     </>
      
    // )
// let message
// if(this.state.isLoggedIn){
//     return (<>
//     WELCOME ARJUN
//     </>)
// }
// else{
//     return <>WELCOME GUEST</>
// }


  }
}

export default UserGreetings