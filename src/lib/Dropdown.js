import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles/Dropdown.css';

class Dropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeOptions: false
    };
  }

  componentDidMount() {
    const node = ReactDOM.findDOMNode(this);
    const ctx = this;

    // Get child nodes
    if (node instanceof HTMLElement) {
      const child = node.querySelector('.fnt-dropdown-select');
      //console.log(child);
      document.addEventListener('click', e => {
        //console.log('check: ', child !== e.target, !child.contains(e.target))
        if (child !== e.target && !child.contains(e.target)) {
          ctx.setState({
            activeOptions: false
          });
        }
      });
    }
  }

  clickSelect(e) {
    this.setState((state, props) => {
      return {
        activeOptions: !state.activeOptions
      };
    }, this.props.clickSelect(e));
  }

  render() {
    const { width, parentClass, parentStyle, img, imgArrowDown, options } = this.props;
    const { activeOptions } = this.state;

    const listOptions = options.map((option, i) => {
      return (
        <div
          className="fnt-dropdown-options-row"
          key={i}
          onClick={() => this.props.onClickOption(option)}
        >
          <p className="fnt-dropdown-options-row-text">{option.value}</p>
        </div>
      );
    });

    return (
      <div width={width} className={`fnt-dropdown ${parentClass}`}>
        <div className="fnt-dropdown-select" style={parentStyle} onClick={e => this.clickSelect(e)}>
          <div className="fnt-dropdown-select-container-img">
            <img className="fnt-dropdown-select-img" alt="" src={img}></img>
          </div>
          <div className="fnt-dropdown-select-container-text">
            <p className="fnt-dropdown-select-text">Usuario</p>
          </div>
          <div className="fnt-dropdown-select-container-arrow">
            <img alt="" src={imgArrowDown} className="fnt-dropdown-select-arrow"></img>
          </div>
        </div>
        <div
          style={{
            display: activeOptions ? 'block' : 'none'
          }}
          className="fnt-dropdown-options"
        >
          {listOptions}
        </div>
      </div>
    );
  }
}

Dropdown.defaultProps = {
  parentClass: '',
  parentStyle: {},
  img: 'https://s3.us-east-2.amazonaws.com/fintecimal/fintecimal-img/userIcon%403x.png',
  imgArrowDown: 'https://s3.us-east-2.amazonaws.com/fintecimal/fintecimal-img/backIcon%403x.png',
  options: [{ value: 'example', name: 'Ejemplo' }]
};

export default Dropdown;
