import React, { Component } from 'react';
import './styles/Switch.css';

class Switch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: props.active
    };
  }

  onClick(e) {
    this.setState(
      state => {
        return {
          active: !state.active
        };
      },
      this.props.onClick({
        event: e,
        active: this.state.active
      })
    );
  }

  render() {
    const { parentClass, colors } = this.props;
    const { activeColorBG, activeColorBorder, inactiveColorBG, inactiveColorBorder } = colors;
    const { active } = this.state;

    return (
      <div className={`${parentClass}`} onClick={e => this.onClick(e)}>
        <div
          className={`fnt-switch-bar`}
          style={{
            backgroundColor: active ? activeColorBG : inactiveColorBG,
            border: `1px solid ${active ? activeColorBorder : inactiveColorBorder}`
          }}
        ></div>
        <div
          className={`fnt-switch-circle`}
          style={{
            transform: active ? 'translateX(-1px)' : 'translateX(15px)'
          }}
        ></div>
      </div>
    );
  }
}

Switch.defaultProps = {
  active: true,
  parentClass: 'fnt-switch',
  colors: {
    activeColorBG: '#37E7C8',
    activeColorBorder: '#56BFB2',
    inactiveColorBG: '#E66868',
    inactiveColorBorder: '#D55353'
  }
};

export default Switch;
