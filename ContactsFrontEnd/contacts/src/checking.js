import React from 'react';

class Message extends React.Component {
    state={
      para:1,
      check:"false"
    }
  changeState(prevState){

    this.setState({
        para: prevState.para + 1
    })
      console.log("changeState",this.state.para )
      
  }
   
    
 
    render() {
      return (<React.Fragment>
            <a href="#" onClick={this.changeState}>Want to buy a new car?</a>
           {this.state.check !=="false" && <p>Call +11 22 33 44 now!</p>}
          </React.Fragment>);
    }
  }
  
  export default Message;
  