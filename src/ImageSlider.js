// your ImageSlider code here!
import React from 'react';

export default class ImageSlider extends React.Component {
//initial state
constructor() {
  super()
  this.state = {
    currentSlideIndex: 0
  }
}

render() {
    return (
      <div>I am on slide {this.state.currentSlideIndex}</div>
    )
  }


}
