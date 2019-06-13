import React, { Component } from 'react';

import lib from '../lib';

const { Dropdown } = lib;

class MultiDrop extends Component {

  onClickSomeone() {
    // console.log('hola');
  }

  render() {
    return (
      <div>
        <Dropdown
          parentStyle={{
            backgroundColor: '#4C5C68',
            color: '#fff'
          }}
          options={[
            { name: 'name', value: 'Tranquilino' },
            { name: 'setting', value: 'Configuración' },
            { name: 'logout', value: 'Cerrar Sesión' }
          ]}
          onClickOption={() => this.onClickSomeone('onClickOption')}
          clickSelect={() => this.onClickSomeone('clickSelect')}
        />
        <Dropdown
          parentStyle={{
            backgroundColor: '#4C5C68',
            color: '#fff'
          }}
          options={[
            { name: 'name', value: 'Tranquilino' },
            { name: 'setting', value: 'Configuración' },
            { name: 'logout', value: 'Cerrar Sesión' }
          ]}
          onClickOption={() => this.onClickSomeone('onClickOption')}
          clickSelect={() => this.onClickSomeone('clickSelect')}
        />
      </div>
    )
  }
}

export default MultiDrop;