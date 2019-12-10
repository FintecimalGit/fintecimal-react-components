import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import lib from '../lib';
import ui from '../ui';
import tables from '../commons/exampleTable';
import { listWithCategories, listWithoutCategories } from '../lib/commons/exampleList';
import { longText, mediumText, shortText } from '../lib/commons/exampleLongText';
import { SearchBar, BaseInput } from '../lib/nodes';

const {
  Input,
  Button,
  Pagination,
  Tables,
  Dropdown,
  Loader,
  Switch,
  TextInput,
  EmailInput,
  RFCInput,
  CURPInput,
  NumberInput,
  CellPhoneInput,
  SelectInput,
  CLABEInput,
  RadioSwitch
} = lib;
const { LoginUI, MultiDrop } = ui;

storiesOf('UI|MultiDropdown', module).add('MultiDropdown', () => <MultiDrop />);

storiesOf('UI|Login', module).add('Login', () => (
  <LoginUI
    onKeyPressEmail={action('onKeyDownEmail')}
    onKeyPressPassword={action('onKeyDownPassword')}
    onClickBtnSend={action('onClickBtnSend')}
  />
));

storiesOf('Components|Loader', module)
  .add('Loader Default', () => <Loader />)
  .add('Loader Color', () => (
    <Loader
      colors={{
        first: 'red',
        secound: 'blue'
      }}
    />
  ));

storiesOf('Components|Input', module)
  .add('Input Basic', () => <Input onKeyUp={action('onKeyPress')} />)
  .add('Input Search', () => <Input onKeyUp={action('onKeyPress')} aparience="search" />);

storiesOf('Components|Switch', module).add('Switch Basic', () => (
  <Switch onClick={action('onClick')} />
));

storiesOf('Components|Dropdown', module).add('Dropdown Basic', () => (
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
    onClickOption={action('onClickOption')}
    clickSelect={action('clickSelect')}
  />
));

storiesOf('Components|Pagination', module)
  .add('Pagination Init', () => <Pagination onChangePagination={action('onChangePagination')} />)
  .add('Pagination End', () => (
    <Pagination onChangePagination={action('onChangePagination')} totalPage={5} actualPage={5} />
  ))
  .add('Pagination Middle', () => (
    <Pagination onChangePagination={action('onChangePagination')} totalPage={5} actualPage={3} />
  ));

storiesOf('Components|Tables', module).add('Table', () => (
  <Tables table={tables} onSelectRow={action('onSelectRow')} />
));

storiesOf('Components|Inputs', module)
  .add('TextInput', () => (
    <TextInput
      label={'Cualquier label'}
      handleChange={action('handleChange')}
      //error={true}
      //errorMessage={'Este es un mensaje de error que puede tener cualquier cosa'}
      required={true}
      clear={true}
      //value={'Este input viene lleno'}
    />
  ))
  .add('Email Input', () => (
    <EmailInput
      label={longText}
      handleChange={action('handleChange')}
      required={true}
      error={false}
      //errorMessage={'Este es un mensaje de error que puede tener cualquier cosa'}
    />
  ))
  .add('RFC Input', () => (
    <RFCInput label={'RFC'} handleChange={action('handleChange')} required={true} error={false} />
  ))
  .add('CURP Input', () => (
    <CURPInput label={'CURP'} handleChange={action('handleChange')} required={true} error={false} />
  ))
  .add('Number Input', () => (
    <NumberInput
      //label={'Código Postal'}
      handleChange={action('handleChange')}
      required={false}
      error={false}
    />
  ))
  .add('Cellphone Input', () => (
    <CellPhoneInput
      label={shortText}
      handleChange={action('handleChange')}
      required={true}
      error={true}
      errorMessage={longText}
    />
  ))
  .add('CLABE Input', () => (
    <CLABEInput
      label={'CLABE'}
      handleChange={action('handleChange')}
      required={false}
      error={false}
    />
  ))
  .add('Select Input', () => (
    <SelectInput
      label={longText}
      handleChange={action('handleChange')}
      required={true}
      error={true}
      errorMessage={longText}
      //value={'Seleccion mal'}
      options={listWithCategories}
    />
  ))
  .add('Long Text Input', () => (
    <TextInput
      label={longText}
      handleChange={action('handleChange')}
      required={true}
      error={true}
      errorMessage={longText}
      //value={'Seleccion mal'}
      options={listWithCategories}
    />
  ));

storiesOf('Components|Nodes', module)
  .add('Search bar', () => (
    <SearchBar placeholder={'Búsqueda de expedientes'} onEnter={action('handleSearch')} />
  ))
  .add('Base Input', () => (
    <BaseInput
      label={'Cualquier label'}
      handleChange={action('handleChange')}
      //error={true}
      //errorMessage={'Este es un mensaje de error que puede tener cualquier cosa'}
      required={true}
      clear={true}
      value={'Text'}
    />
  ));

storiesOf('Components|Button', module)
  .add('Classic Button', () => <Button onClick={action('clicked')}></Button>, {
    notes:
      'Este es el botón creado por default, incluye la respuesta del evento cuando se dispara el evento onClick'
  })
  .add(
    'Cancel Button',
    () => <Button onClick={action('clicked')} type="cancel" textBtn="Cancelar"></Button>,
    { notes: '' }
  )
  .add(
    'Error Button',
    () => <Button onClick={action('clicked')} type="error" textBtn="Error"></Button>,
    { notes: '' }
  );

storiesOf('Components|RadioSwitch', module)
  .add('Radio Switch', () => (
    <div style={{ height: '35px', width: '250px' }}>
      <RadioSwitch
        options={[{ key: 'fintecimal', value: 'Fintecimal' }, { key: 'client', value: 'Cliente' }]}
        selected={'fintecimal'}
        handleChange={action('clicked')}
      />
    </div>
  ))
  .add('Radio Switch Custom', () => (
    <div style={{ height: '50px', width: '300px' }}>
      <RadioSwitch
        options={[{ key: 'true', value: 'True' }, { key: 'false', value: 'False' }]}
        selected={'true'}
        handleChange={action('clicked')}
      />
    </div>
  ));

storiesOf('Components|Form', module).add('Validations', () => (
  <div style={{ height: '35px', width: '250px' }}>
    <form
      onSubmit={event => {
        event.preventDefault();
        event.stopPropagation();
        // const { target } = event;
        // console.log({ formIsValid: target.checkValidity() })
      }}
    >
      <CellPhoneInput
        handleChange={action('handleChange')}
        required={true}
        error={false}
        //errorMessage={'Este es un mensaje de error que puede tener cualquier cosa'}
      />
      <button
        type="submit"
        onClick={event => {
          const { target } = event;
          const form = target.parentNode;
          action('onClickSubmit')(JSON.stringify({ formIsValid: form.checkValidity() }));
        }}
      >
        Submit
      </button>
    </form>
  </div>
));
