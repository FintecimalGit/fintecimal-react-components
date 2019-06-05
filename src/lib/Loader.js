import React, { Component } from 'react';
import '../styles/Loader.css';

class Loader extends Component {

  render() {

    const { colors, className, style, displayed } = this.props;
    const { first, secound } = colors;

    return (
      <div
        className={`fnt-loader ${className}`}
        style={{
          ...style,
          display: displayed ? 'block': 'none',
          backgroundColor: first
        }}
      >
        <div
          className='fnt-loader-bar'
          style={{
            backgroundColor: first
          }}
        ></div>
        <div
          className='fnt-loader-bar'
          style={{
            backgroundColor: secound
          }}
        ></div>
      </div>
    )
  }

}

Loader.defaultProps = {
  colors: {
    first: '#ddd',
    secound: '#31DDBF'
  },
  className:'',
  style: {},
  displayed: true
}

export default Loader;