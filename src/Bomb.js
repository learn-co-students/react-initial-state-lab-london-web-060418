// your Bomb code here!
import React from 'react';

export default class Bomb extends React.Component {
//initial state
constructor(props) {
  super()
  console.log(props);
  this.word = 'boom'
  this.state = {
    secondsLeft: props.initialCount
  }
}

render() {
  console.log(this.state.secondsLeft);
  return (
    this.state.secondsLeft === 0 ? <div>Boom!</div> : <div>{this.state.secondsLeft} seconds left before I go boom!</div>
  )
}

}
