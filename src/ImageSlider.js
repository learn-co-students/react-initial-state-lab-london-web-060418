import React, { Component } from 'react';

class ImageSlider extends Component {

  state = {
    currentSlideIndex: 0
  }

  render () {
    return (
      <div>
        <p>I am on slide {this.state.currentSlideIndex}</p>
      </div>
    )
  }


}

export default ImageSlider;
