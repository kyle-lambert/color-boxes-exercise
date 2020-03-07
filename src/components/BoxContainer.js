import React, { Component } from 'react';
import Box from './Box'
import '../css/BoxContainer.css'

class BoxContainer extends Component {
  static defaultProps = {
    maxBoxes: 16
  }
  constructor(props) {
    super(props);
    this.state = {
      boxes: Array.from({ length: this.props.maxBoxes })
    }
  }

  render() {
    return (
      <div className="BoxContainer">
        {this.state.boxes.map((b, i) => <Box key={i} />)}
      </div>
    );
  }
}

export default BoxContainer;