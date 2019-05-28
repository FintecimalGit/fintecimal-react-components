import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import lib from '../lib';
import ui from '../ui';

const { Input, Button, Pagination } = lib;
const { LoginUI } = ui

storiesOf('UI|Login', module).add('Login', () => <LoginUI 
onChangeEmail={action('onChangeEmail')}
onChangePassword={action('onChangePassword')}
/>);

storiesOf('Components|Input', module).add('Input Basic', () => <Input
  onChange={action('onChange')}
/>).add('Input Search', () => <Input
  onChange={action('onChange')}
  aparience='search'
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
