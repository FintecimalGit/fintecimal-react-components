import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import lib from '../lib';
import ui from '../ui';
import tables from '../commons/exampleTable';
import { listWithCategories, listWithoutCategories } from '../lib/commons/exampleList';
import { longText, mediumText, shortText } from '../lib/commons/exampleLongText';

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
  RadioSwitch,
  SelectBasic,
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
      placeholder="Placeholder"
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

storiesOf('Components|Form', module)
  .add('Validations', () => (
    <div style={{ height: '35px', width: '250px' }}>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          event.stopPropagation();
          // const { target } = event;
          // console.log({ formIsValid: target.checkValidity() })
        }}
      >
        <RFCInput
          handleChange={action('handleChange')}
          required={true}
          error={false}
        //errorMessage={'Este es un mensaje de error que puede tener cualquier cosa'}
        />
        <button
          type="submit"
          onClick={(event) => {
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

storiesOf('Components|SelectBasic', module)
  .add('Select Basic', () => (
    <div style={{ height: '35px', width: '250px' }}>
      <SelectBasic
        placeholder="Razón del rechazo"
        options={[
          { value: 'fillingError', name: 'Error de llenado' },
          { value: 'unreadableDocument', name: 'Documento ilegible' },
          { value: 'labelError', name: 'Error de Etiqueta' },
          { value: 'captureError', name: 'Error de captura' },
          { value: 'wrongDocument', name: 'Documentación de otro cliente' },
          { value: 'whiteFields', name: 'Campos en blanco' }
        ]}
      />
    </div>
  ));

import Table from '../lib/Table';
import Container from '@material-ui/core/Container';
storiesOf('NewComponents', module)
  .add('Table', () => {
      const headers = Array(4)
        .fill(null)
        .map((item, index) => ({ key: `item${index}`, value:`Header ${index}` }));

      const items = Array(10)
        .fill(null)
        .map(() => headers.reduce(
          (accumulator, { key, value }) => ({ ...accumulator, [key]: <span>{ key }</span> }), {})
        );
      return (
        <Container style={{ paddingTop: '5vh', paddingBottom: '5vh' }}>
          <Table
            headers={headers}
            items={items}
            onClickRow={action('onClickRow')}
          />
        </Container>
    )}
  );