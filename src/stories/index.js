import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import lib from '../lib';
import ui from '../ui';
import tables from '../commons/exampleTable';

const { 
  Input, Button, Pagination, Tables, Dropdown, Loader, Switch, 
  BaseInput, EmailInput, RFCInput, CURPInput, NumberInput
} = lib;
const { LoginUI, MultiDrop } = ui

storiesOf('UI|MultiDropdown', module).add('MultiDropdown', () => <MultiDrop />);

storiesOf('UI|Login', module).add('Login', () => <LoginUI 
  onKeyPressEmail={action('onKeyDownEmail')}
  onKeyPressPassword={action('onKeyDownPassword')}
  onClickBtnSend={action('onClickBtnSend')}
/>);

storiesOf('Components|Loader', module).add('Loader Default', () => <Loader/>)
.add('Loader Color', () => <Loader
  colors={{
    first: 'red',
    secound: 'blue'
  }
}/>);

storiesOf('Components|Input', module).add('Input Basic', () => <Input
  onKeyUp={action('onKeyPress')}
/>).add('Input Search', () => <Input
  onKeyUp={action('onKeyPress')}
  aparience='search'
/>);

storiesOf('Components|Switch', module).add('Switch Basic', () =>
  <Switch
    onClick={action('onClick')}
  />
);

storiesOf('Components|Dropdown', module).add('Dropdown Basic', () => <Dropdown
  parentStyle={{
    backgroundColor: '#4C5C68',
    color: '#fff'
  }}
  options={[
    { name: 'name', value: 'Tranquilino' },
    { name: 'setting', value: 'Configuración' },
    { name: 'logout', value: 'Cerrar Sesión' }
  ]}
  onClickOption={action('onClickOption')}
  clickSelect={action('clickSelect')}
/>);

storiesOf('Components|Pagination', module).add('Pagination Init', () => <Pagination
  onChangePagination={action('onChangePagination')}
/>).add('Pagination End', () => <Pagination
  onChangePagination={action('onChangePagination')}
  totalPage={5}
  actualPage={5}
/>).add('Pagination Middle', () => <Pagination
  onChangePagination={action('onChangePagination')}
  totalPage={5}
  actualPage={3}
/>);

storiesOf('Components|Tables', module).add('Table', () => <Tables
  table={tables}
  onSelectRow={action('onSelectRow')}
/>);

storiesOf('Components|Inputs', module).add('BaseInput', () => <BaseInput
  label={'Cualquier label'}
  handleChange={action('handleChange')}
  //error={true}
  //errorMessage={'Este es un mensaje de error que puede tener cualquier cosa'}
  required={true}
  clear={true}
  value={'Este input viene lleno'}
/>).add('Email Input', () => <EmailInput
  label={'Correo electrónico'}
  handleChange={action('handleChange')}
  required={false}
  error={false}
  //errorMessage={'Este es un mensaje de error que puede tener cualquier cosa'}
/>).add('RFC Input', () => <RFCInput
  label={'RFC'}
  handleChange={action('handleChange')}
  required={true}
  error={false}
/>).add('CURP Input', () => <CURPInput
  label={'CURP'}
  handleChange={action('handleChange')}
  required={true}
  error={false}
/>).add('Number Input', () => <NumberInput
  //label={'Código Postal'}
  handleChange={action('handleChange')}
  required={false}
  error={false}
/>);

storiesOf('Components|Button', module)
  .add('Classic Button', () => 
    <Button onClick={action('clicked')}></Button>
  ,{notes: 'Este es el botón creado por default, incluye la respuesta del evento cuando se dispara el evento onClick',})
  .add('Cancel Button', () => 
    <Button
      onClick={action('clicked')}
      type='cancel'
      textBtn='Cancelar'
    ></Button>
  ,{ notes: ''})
  .add('Error Button', () => 
    <Button
      onClick={action('clicked')}
      type='error'
      textBtn='Error'
    ></Button>
  ,{notes: '',});
