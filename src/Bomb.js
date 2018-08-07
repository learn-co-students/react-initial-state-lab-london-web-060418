// your Bomb code here!
import React, {Component} from 'react';

class Bomb extends Component {
 constructor(props) {
   super(props);
   this.state = {
     secondsLeft: this.props.initialCount ? this.props.initialCount : 0
   }
 } //end of constructor

render() {
  let renderText = <p> </p>;
    if(this.state.secondsLeft > 0) {
      renderText = <p>{this.state.secondsLeft} seconds left before I go boom!</p>
    } else {
      renderText = <p>Boom!</p>
    }

   return (
     renderText
   )
 }

} //end of class

export default Bomb;
