import React, { Component } from 'react';
import './styles/Button.css';

class Button extends Component {
  render() {
    const { className, textBtn, style, type } = this.props;
    return (
      <div>
        <button
          className={`fnt-btn-general${type.length ? '-' : ''}${type} ${className}`}
          style={style}
          onClick={e => this.props.onClick(e)}
        >
          {textBtn}
        </button>
      </div>
    );
  }
}

Button.defaultProps = {
  className: '',
  textBtn: 'Botón',
  type: '',
  style: {}
};

export default Button;
