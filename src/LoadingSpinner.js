import React, { Component } from 'react';
import './App.css';

class SimpleLoadingSpinner extends Component {
  static defaultProps = {
    width: '50px',
    height: '50px',
    borderRight: '1px solid #007EFF',
    borderRadius: '50%',
    animation: 'spin .8s linear infinite'
  }

  render(){
    const spinnerStyle = {
      width: this.props.width,
      height: this.props.height,
      borderRight: '1px solid #007EFF',
      borderRadius: this.props.borderRadius,
      animation: 'spin .8s linear infinite'
  }
    return (
      <div style={spinnerStyle}></div>
    )
  }
 
}

export default SimpleLoadingSpinner;
