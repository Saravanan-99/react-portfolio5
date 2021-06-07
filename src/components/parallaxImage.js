import React from "react";

import { withController } from "react-scroll-parallax";

class Image extends React.Component {
  handleLoad = () => {
    // updates cached values after image dimensions have loaded
    this.props.parallaxController.update();
  };

  render() {
    return (
      <img src={this.props.src} onLoad={this.handleLoad} alt={this.props.id} />
    );
  }
}

export default withController(Image);
