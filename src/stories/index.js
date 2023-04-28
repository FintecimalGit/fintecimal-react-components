import React, { useState, useEffect } from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import ButtonMaterial from '@material-ui/core/Button';
import lib from '../lib';
import ui from '../ui';
import tables from '../commons/exampleTable';
import {
  listWithCategories,
  listWithoutCategories,
  longListWithoutCategories,
} from '../lib/commons/exampleList';
import { longText, mediumText, shortText } from '../lib/commons/exampleLongText';
import { defaultData, defaultHeader } from '../lib/nodes/InputTable/defaults';
import {
  SearchBar,
  BaseInput,
  Select,
  RejectButton,
  RejectTooltip,
  RejectActions,
  SignatureMap,
  ImageActions,
  CardApp,
  CurrencyInput,
  BaseTextInput,
  BaseEmailInput,
  BasePhoneInput,
  BaseNumberInput,
  BaseRFCInput,
  BaseRFCMoralInput,
  BaseRFCFisicoInput,
  TextAreaInput,
  IDCardUpload,
  ListSignerRoles,
  InputTable,
  InputTableSigners,
  RejectDocuments,
  RejectionButtons,
  RejectSimple,
  BaseDatePicker,
  DynamicFields,
  BaseCLABEInput,
  BaseAddressInput,
  BaseFullAddressInput,
  BaseCURPInput,
  ButtonDocuPass,
  PercentageInput,
  PdfViewer,
  RadioGroupInput,
} from '../lib/nodes';

import Table from '../lib/Table';
import Paginator from '../lib/Paginator';
import DatePicker from '../lib/DatePicker';
import RejectionNote from '../lib/RejectionNote';
import HeaderCollapse from '../lib/HeaderCollapse';
import DocumentList from '../lib/DocumentList';
import HeaderCard from '../lib/HeaderCard';
import VideoCard from '../lib/VideoCard';
import RejectionField from '../lib/RejectionField';
import PDFCard from '../lib/PDFCard';
import DropZone from '../lib/DropZone';
import FilePreview from '../lib/FilePreview';
import UploadDocuments from '../lib/UploadDocuments';
import FileThumbnail from '../lib/FileThumbnail';
import FileFinder from '../lib/FileFinder';
import SignersCarousel from '../lib/SignersCarousel';
import Liveness from '../lib/Liveness';


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

const signers = [
  {
    _id: '1',
    label: '+52 APPS SA DE CV',
    status: 'Firmado',
    completed: true,
  },
  {
    _id: '2',
    label: 'JOSE ALFREDO TORRES',
    status: 'Firmado',
    completed: true,
  },
  {
    _id: '3',
    label: 'OPERADORA DE SERVICIOS MEGA',
    status: 'Firmado',
    completed: true,
  },
  
];

const signersLiveness = [
  {
    _id: '1',
    label: '+52 APPS SA DE CV',
    status: 'Aceptado',
    score: 80,
    video: "https://fintecimal-test.s3.amazonaws.com/DOCUPASS_FORM/4a6dd39c-e090-4950-b986-dcc3a3c1e0e1.webm",
    completed: true,
    ines: [
      "https://fintecimal-test.s3.amazonaws.com/DOCUPASS_FORM/Reverse-21f7bf8f-3c2f-412f-b90f-47468ad48372.png",
      "https://fintecimal-test.s3.amazonaws.com/DOCUPASS_FORM/Reverse-980f996f-3a85-4646-bdfb-5831fc329e95.jpg",
      ]
    },
  {
    _id: '2',
    label: 'JOSE ALFREDO TORRES',
    status: 'Pendiente',
    score: 80,
    video: "https://fintecimal-test.s3.amazonaws.com/DOCUPASS_FORM/1cadac69-c48d-4180-baa5-6c03bc67eb35.webm",
    ines: [
      "https://fintecimal-test.s3.amazonaws.com/DOCUPASS_FORM/Reverse-df9ce723-e370-47a9-a25a-5bdaa9d43d53.png",
      "https://fintecimal-test.s3.amazonaws.com/DOCUPASS_FORM/Reverse-5d42b79d-a653-4b0c-ad78-2605cf85d8f9.jpg",
      ],
    completed: false,
  },
  {
    _id: '3',
    label: 'JOSE ALFREDO TORRES',
    status: 'Pendiente',
    score: 80,
    video: "https://fintecimal-test.s3.amazonaws.com/DOCUPASS_FORM/1cadac69-c48d-4180-baa5-6c03bc67eb35.webm",
    ines: [
      "https://fintecimal-test.s3.amazonaws.com/DOCUPASS_FORM/Reverse-df9ce723-e370-47a9-a25a-5bdaa9d43d53.png",
      "https://fintecimal-test.s3.amazonaws.com/DOCUPASS_FORM/Reverse-5d42b79d-a653-4b0c-ad78-2605cf85d8f9.jpg",
      ],
    completed: false,
  },
];


storiesOf('UI|MultiDropdown', module).add('MultiDropdown', () => <MultiDrop />);

storiesOf('UI|Login', module).add('Login', () => (
  <LoginUI
    onKeyPressEmail={action('onKeyDownEmail')}
    onKeyPressPassword={action('onKeyDownPassword')}
    onClickBtnSend={action('onClickBtnSend')}
  />
));

storiesOf('Components|Pdf', module).add('PdfViewer', () => (
  <PdfViewer
    donwnloadFile={() => {}}
    url="https://s3.amazonaws.com/fintecimal-test/7bda983f-5ff6-4180-9d92-6e7aecfbe38b.pdf"
      />
));

storiesOf('Components|SignersCarousel', module).add('SignersCarousel', () => (
  <SignersCarousel signers={signers} />
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
      label="Cualquier label"
      handleChange={action('handleChange')}
      // error={true}
      // errorMessage={'Este es un mensaje de error que puede tener cualquier cosa'}
      required
      clear
    // value={'Este input viene lleno'}
    />
  ))
  .add('Email Input', () => (
    <EmailInput
      label={longText}
      handleChange={action('handleChange')}
      required
      error={false}
    // errorMessage={'Este es un mensaje de error que puede tener cualquier cosa'}
    />
  ))
  .add('RFC Input', () => (
    <RFCInput label="RFC" handleChange={action('handleChange')} required error={false} />
  ))
  .add('CURP Input', () => (
    <CURPInput label="CURP" handleChange={action('handleChange')} required error={false} />
  ))
  .add('Number Input', () => (
    <NumberInput
      // label={'Código Postal'}
      handleChange={action('handleChange')}
      required={false}
      error={false}
    />
  ))
  .add('Cellphone Input', () => (
    <CellPhoneInput
      label={shortText}
      handleChange={action('handleChange')}
      required
      error
      errorMessage={longText}
    />
  ))
  .add('CLABE Input', () => (
    <CLABEInput
      label="CLABE"
      handleChange={action('handleChange')}
      required={false}
      error={false}
    />
  ))
  .add('Select Input', () => (
    <form
      onSubmit={event => {
        event.preventDefault();
        event.stopPropagation();
        // const { target } = event;
        // console.log({ formIsValid: target.checkValidity() })
      }}
    >
      <SelectInput
        label={longText}
        placeholder="Placeholder"
        handleChange={action('handleChange')}
        required
        errorMessage={longText}
        // value={'Seleccion mal'}
        options={listWithCategories}
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
  ))
  .add('Long Text Input', () => (
    <TextInput
      label={longText}
      handleChange={action('handleChange')}
      required
      error
      errorMessage={longText}
      // value={'Seleccion mal'}
      options={listWithCategories}
    />
  ))
  .add('Address Input', () => (
    <Grid container spacing={0}>
      <Grid item sm={12}>
        <BaseAddressInput
          label="Dirección"
          handleChange={action('handleChange')}
        />
      </Grid>
      <Grid item sm={12}>
        <BaseAddressInput
          label="Dirección"
          value={{
            administrativeArea: "Jalisco",
            country: "Mexico",
            locality: "Zapopan",
            postalCode: "45130",
            streetName: "Calle Arco Comodo",
            streetNumber: "1870"
          }}
          handleChange={action('handleChange')}
        />
      </Grid>
      <Grid item sm={12}>
        <BaseAddressInput
          label="Dirección"
          handleChange={action('handleChange')}
          required
        />
      </Grid>
      <Grid item sm={12}>
        <BaseAddressInput
          label="Dirección"
          handleChange={action('handleChange')}
          disabled
        />
      </Grid>
    </Grid>
  )).add('Full Address Input', () => (
    <Grid container spacing={0}>
      <Grid item sm={12}>
        <BaseFullAddressInput
          label="Dirección"
          handleChange={action('handleChange')}
          required
        />
      </Grid>
      <Grid item sm={12}>
        <BaseFullAddressInput
          label="Dirección"
          value={{
            administrativeArea: "Jalisco",
            country: "Mexico",
            locality: "Zapopan",
            postalCode: "45130",
            streetName: "Calle Arco Comodo",
            streetNumber: "1870"
          }}
          handleChange={action('handleChange')}
        />
      </Grid>
      <Grid item sm={12}>
        <BaseFullAddressInput
          label="Dirección"
          handleChange={action('handleChange')}
          disabled
        />
      </Grid>
    </Grid>
  ));

storiesOf('Components|Nodes', module)
  .add('Search bar', () => (
    <SearchBar placeholder="Búsqueda de expedientes" onEnter={action('handleSearch')} />
  ))
  .add('Base Input', () => (
    <BaseInput
      label="Cualquier label"
      handleChange={action('handleChange')}
      // error={true}
      // errorMessage={'Este es un mensaje de error que puede tener cualquier cosa'}
      required
      clear
      value="Text"
    />
  ))
  .add('BaseDatePicker', () => (
    <Grid container spacing={0}>
      <Grid item sm={12}>
        <BaseDatePicker
          label="Fecha de nacimiento"
          onDateChange={action('onDateChange')}
          format="DD/MMM/YYYY"
          required
        />
      </Grid>
      <Grid item sm={12}>
        <BaseDatePicker
          label="Fecha de ingreso"
          onDateChange={action('onDateChange')}
          minDate="2000-01-01"
          disableToolBar={true}
          error
          required
        />
      </Grid>
      <Grid item sm={12}>
        <BaseDatePicker
          value={"2021-07-25T15:32:00.000Z"}
          label="Fecha de vencimiento"
          onDateChange={action('onDateChange')}
          minDate="2020-01-01"
          format={"lll"}
          disableToolBar={true}
        />
      </Grid>
      <Grid item sm={12}>
        <BaseDatePicker
          value={"2021-07-25T15:32:00.000Z"}
          label="Fecha de vencimiento"
          onDateChange={action('onDateChange')}
          minDate="2020-01-01"
          format={"llll"}
          disableToolBar={true}
        />
      </Grid>
      <Grid item sm={12}>
        <BaseDatePicker
          value={"2021-07-25T15:32:00.000Z"}
          label="Fecha de vencimiento"
          onDateChange={action('onDateChange')}
          minDate="2020-01-01"
          format={"LLLL"}
          disableToolBar={true}
        />
      </Grid>
      <Grid item sm={12}>
        <BaseDatePicker
          value={"2021-07-25T15:32:00.000Z"}
          label="Fecha de vencimiento"
          onDateChange={action('onDateChange')}
          minDate="2020-01-01"
          format={"LLL"}
          disableToolBar={true}
        />
      </Grid>
      <Grid item sm={12}>
        <BaseDatePicker
          value={"2021-07-25T15:32:00.000Z"}
          label="Fecha de vencimiento"
          onDateChange={action('onDateChange')}
          minDate="2020-01-01"
          format={"LL"}
          disableToolBar={true}
        />
      </Grid>
      <Grid item sm={12}>
        <BaseDatePicker
          value={"23 de jul. de 2021"}
          label="Fecha de vencimiento"
          onDateChange={action('onDateChange')}
          minDate="2020-01-01"
          format={"ll"}
          disableToolBar={true}
        />
      </Grid>
      <Grid item sm={12}>
        <BaseDatePicker
          value={"2021-07-25T15:32:00.000Z"}
          label="Fecha de vencimiento 3"
          onDateChange={action('onDateChange')}
          minDate="2020-01-01"
          format={"l"}
          disableToolBar={true}
        />
      </Grid>
      <Grid item sm={12}>
        <BaseDatePicker
          value={"2021-07-25T15:32:00.000Z"}
          label="Fecha de vencimiento"
          onDateChange={action('onDateChange')}
          minDate="2020-01-01"
          format={"L"}
          disableToolBar={true}
        />
      </Grid>
      <Grid item sm={12}>
        <BaseDatePicker
          value={"2021-07-25T15:32:00.000Z"}
          label="Fecha de vencimiento"
          onDateChange={action('onDateChange')}
          minDate="2020-01-01"
          format={"LTS"}
          disableToolBar={true}
        />
      </Grid>
      <Grid item sm={12}>
        <BaseDatePicker
          value={"2021-07-25T15:32:00.000Z"}
          label="Fecha de vencimiento"
          onDateChange={action('onDateChange')}
          minDate="2020-01-01"
          format={"LT"}
          disableToolBar={true}
        />
      </Grid>
      <Grid item sm={12}>
        <BaseDatePicker
          value={"2021-07-25T15:32:00.000Z"}
          label="Fecha de vencimiento"
          onDateChange={action('onDateChange')}
          minDate="2020-01-01"
          format={"YYYY-MM-DD"}
          disableToolBar={true}
        />
      </Grid>
      <Grid item sm={12}>
        <BaseDatePicker
          value={"2021-07-25T15:32:00.000Z"}
          label="Fecha de vencimiento"
          onDateChange={action('onDateChange')}
          minDate="2020-01-01"
          format={"DD-MM-YYYY"}
          disableToolBar={true}
        />
      </Grid>
      <Grid item sm={12}>
        <BaseDatePicker
          value={"2021-07-25T15:32:00.000Z"}
          label="Fecha de vencimiento"
          onDateChange={action('onDateChange')}
          minDate="2020-01-01"
          format={"MM-DD-YYYY"}
          disableToolBar={true}
        />
      </Grid>
    </Grid>
  ))
  .add('Dynamic Fields', () => {
    const headers = [
      {
        name: 'name',
        label: 'Nombre',
        type: 'respuesta larga',
        required: true
      },
      {
        name: 'birthplace',
        label: 'Lugar de nacimiento',
        type: 'respuesta larga',
        required: true
      },
      {
        name: 'ocupation',
        label: 'Ocupacion',
        type: 'respuesta corta',
        required: true
      },
      {
        name: 'rfc',
        label: 'RFC',
        type: 'RFC',
        required: true
      }
    ];
    const signers = [
      {
        signerId: '5e2f792ebee1b71b8243e236',
        fullName: 'rep test  test test',
        email: 'alfredo@fintecimal.com',
        phone: '3333333333'
      },
      {
        signerId: '5e7b8463aa09cb61d422fcdc',
        fullName: 'HUGO LEONELO CARRILLO RAMIREZ',
        email: 'hugo.carrillo@gfmega.com',
        phone: '3333333333'
      }
    ];
    const fields = [
      [
        {
          name: 'name',
          label: 'Nombre',
          type: 'respuesta larga'
        },
        {
          name: 'birthplace',
          label: 'Lugar de nacimiento',
          type: 'respuesta larga',
          value: 's'
        },
        {
          name: 'ocupation',
          label: 'Ocupacion',
          type: 'respuesta corta'
        },
        {
          name: 'rfc',
          label: 'RFC',
          type: 'RFC'
        }
      ],
      [
        {
          name: 'name',
          label: 'Nombre',
          type: 'respuesta larga'
        },
        {
          name: 'birthplace',
          label: 'Lugar de nacimiento',
          type: 'respuesta larga',
          value: 'b'
        },
        {
          name: 'ocupation',
          label: 'Ocupacion',
          type: 'respuesta corta'
        },
        {
          name: 'rfc',
          label: 'RFC',
          type: 'RFC'
        }
      ]
    ];
    return (
      <DynamicFields
        header={headers}
        fields={fields}
        signers={signers}
        handleValue={action('handleValue')}
      />
    );
  })
  .add('Currency Input', () => (
    <Grid container spacing={0}>
      <Grid key="a1" item sm={6}>
        <CurrencyInput label="Financiamiento" handleChange={action('handleChange')} required clear />
      </Grid>
      <Grid key="a2" item sm={6}>
        <CurrencyInput label="Monto Pagare" value='$1,000,000,000' handleChange={action('handleChange')} required clear />
      </Grid>
    </Grid>
  ))
  .add('Percentage Input', () => (
    <Grid container spacing={0}>
      <Grid key="a1" item sm={6}>
        <PercentageInput label="Interes Moratorio" handleChange={action('handleChange')} required clear />
      </Grid>
      <Grid key="a2" item sm={6}>
        <PercentageInput label="Interes Moratorio" value='10%' handleChange={action('handleChange')} required clear />
      </Grid>
    </Grid>
  ))
  .add('Text Area Input', () => (
    <TextAreaInput
      label="Comentarios Anexos"
      handleChange={action('handleChange')}
      required
      clear
    />
  ))
  .add('Select', () => (
    <Grid container spacing={0}>
      <Grid item sm={6}>
        <Select
          label="Estatus"
          placeholder="Estatus"
          handleChange={action('handleChange')}
          required
          // error={true}
          errorMessage={shortText}
          value="Todo TODOS"
          options={listWithoutCategories}
        />
      </Grid>
      <Grid item sm={6}>
        <Select
          label="Tipo de estudio"
          placeholder="Tipo de estudio"
          handleChange={action('handleChange')}
          required
          // error={true}
          errorMessage={shortText}
          options={[]}
        />
      </Grid>
    </Grid>
  ))
  .add('TextInput', () => (
    <BaseTextInput
      label="Texto"
      handleChange={action('handleChange')}
      required
      // error={true}
      errorMessage={shortText}
      value="Todo TODOS"
      disabled={false}
    />
  ))
  .add('Email', () => (
    <BaseEmailInput
      label="Email"
      handleChange={action('handleChange')}
      required
      // error={true}
      errorMessage={shortText}
    // value={'Todo TODOS'}
    />
  ))
  .add('Phone', () => (
    <BasePhoneInput
      label="Phone"
      handleChange={action('handleChange')}
      required
      // error={true}
      errorMessage={shortText}
      maxLength={12}
    // value={'Todo TODOS'}
    />
  ))
  .add('Number', () => (
    <BaseNumberInput
      label="Number"
      handleChange={action('handleChange')}
      required
      // error={true}
      errorMessage={shortText}
    // value={'Todo TODOS'}
    />
  ))
  .add('RFC', () => (
    <BaseRFCInput
      label="RFC"
      handleChange={action('handleChange')}
      required
      // error={true}
      errorMessage={shortText}
      // value={'Todo TODOS'}
      // disabled
    />
  ))
  .add('RFC Moral', () => (
    <BaseRFCMoralInput
      label="RFC"
      handleChange={action('handleChange')}
      required
      // error={true}
      errorMessage={shortText}
      // value={'Todo TODOS'}
      // disabled
    />
  ))
  .add('RFC Fisico', () => (
    <BaseRFCFisicoInput
      label="RFC"
      handleChange={action('handleChange')}
      required
      // error={true}
      errorMessage={shortText}
      // value={'Todo TODOS'}
      // disabled
    />
  ))
  .add('CLABE', () => (
    <BaseCLABEInput
      label="CLABE"
      handleChange={action('handleChange')}
      required
      // error={true}
      errorMessage={shortText}
      maxLength={18}
    // value={'Todo TODOS'}
    />
  ))
  .add('CURP', () => (
    <BaseCURPInput
      label="CURP"
      handleChange={action('handleChange')}
      required
      // error={true}
      errorMessage={shortText}
      //value={'HEGG560427MVZRRL04'}
      //disabled
    />
  ))
  .add('ButtonDocuPass', () => (
    <Grid container>
      <Grid item sm={6} xs={6} lg={6}>
        <ButtonDocuPass url="http://localhost:8080/portal/test" size={80}/>
      </Grid>
      <Grid item sm={6} xs={6} lg={6} />
    </Grid>
  ))
  .add('Reject button', () => (
    <>
      <RejectButton
        onClick={action('onClick')}
        onClickMessage={action('onClickMessage')}
        rejected={false}
      />
      <RejectButton
        onClick={action('onClick')}
        onClickMessage={action('onClickMessage')}
        rejected={false}
        size="small"
      />
    </>
  ))
  .add('Reject tooltip', () => (
    <RejectTooltip
      active
      handleReject={action('onReject')}
      rejectionOptions={[
        { name: 'Calidad baja' },
        { name: 'Sin imagen' },
        { name: 'Sin sonido' },
        { name: 'Sin audio' }
      ]}
    />
  ))
  .add('Reject actions', () => (
    <RejectActions
      rejectionOptions={[
        { name: 'Calidad baja' },
        { name: 'Sin imagen' },
        { name: 'Sin sonido' },
        { name: 'Sin audio' }
      ]}
      rejected={false}
      handlerReject={action('Reject')}
      rejectionData={{
        name: 'Valerie Baumbach',
        image: 'http://usagibaru.com/wp-content/uploads/2019/06/3822333_0.jpg',
        date: new Date(),
        reason: 'Video no corresponde a documento.',
        comments:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      }}
    />
  ))
  .add('Map', () => <SignatureMap />)
  .add('Image Actions', () => (
    <div>
      <Grid container spacing={2}>
        <Grid item sm={6}>
          <ImageActions title="INE / IFE - Frente" />
        </Grid>
        <Grid item sm={6}>
          <ImageActions title="INE / IFE - Reverso" />
        </Grid>
      </Grid>
    </div>
  ))
  .add('IDCardUpload', () => <IDCardUpload />)
  .add('ListSignerRoles', () => (
    <ListSignerRoles selected={2} onChangeHandler={action('onChangeHandler')} />
  ))
  .add('Input Table', () => {
    const handleChange = (newValue) => {
      const { headers: newHeaders, values: newValues } = newValue;
      setValues(newValues);
      setHeaders(newHeaders);
      action('handleHeaders');
    }

    return (
      <InputTable handleHeadersAndValues={handleChange} required error />
    );
  })
  .add('CardApp', () => <CardApp onClick={action('onClick')} title="Algo asi" showNotification="true" IconNotification="https://fintecimal-test.s3.amazonaws.com/fintecimal-img/stepconfigs-icons/notification_disable_icon.png"/>)
  .add('Input Table Signers', () => {
    const handleChange = (newValue) => {
      const { headers: newHeaders, values: newValues } = newValue;
      console.log(newValues);
      console.log(newHeaders);
      action('handleHeaders');
    }

    return (
      <InputTableSigners handleHeadersAndValues={handleChange} maxHeaders={7} required error />
    );
  })
  .add('Radio Input', () => (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        event.stopPropagation();
      }}
    >
      <RadioGroupInput
        label={shortText}
        handleChange={action('handleChange')}
        required
        errorMessage={longText}
        options={longListWithoutCategories}
        value="La estructura organizacional está alineada con los objetivos del negocio y el entorno de control interno es sólido."
      />
    </form>
  ));

storiesOf('Components|Button', module)
  .add('Classic Button', () => <Button onClick={action('clicked')} />, {
    notes:
      'Este es el botón creado por default, incluye la respuesta del evento cuando se dispara el evento onClick'
  })
  .add(
    'Cancel Button',
    () => <Button onClick={action('clicked')} type="cancel" textBtn="Cancelar" />,
    { notes: '' }
  )
  .add('Error Button', () => <Button onClick={action('clicked')} type="error" textBtn="Error" />, {
    notes: ''
  });

storiesOf('Components|RadioSwitch', module)
  .add('Radio Switch', () => (
    <div style={{ height: '35px', width: '250px' }}>
      <RadioSwitch
        options={[{ key: 'fintecimal', value: 'Fintecimal' }, { key: 'client', value: 'Cliente' }]}
        selected="fintecimal"
        handleChange={action('clicked')}
      />
    </div>
  ))
  .add('Radio Switch Custom', () => (
    <div style={{ height: '50px', width: '300px' }}>
      <RadioSwitch
        options={[{ key: 'true', value: 'True' }, { key: 'false', value: 'False' }]}
        selected="true"
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
        required
        error={false}
      // errorMessage={'Este es un mensaje de error que puede tener cualquier cosa'}
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

storiesOf('Components|SelectBasic', module).add('Select Basic', () => (
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

storiesOf('NewComponents', module)
  .add('Table', () => {
    const headers = Array(4)
      .fill(null)
      .map((item, index) => ({ key: `item${index}`, value: `Header ${index}` }));

    const items = Array(10)
      .fill(null)
      .map(() =>
        headers.reduce(
          (accumulator, { key, value }) => ({ ...accumulator, [key]: <span>{key}</span> }),
          {}
        )
      );
      console.log(headers);
      console.log(items);
    return (
      <Container style={{ paddingTop: '5vh', paddingBottom: '5vh' }}>
        <Table
          headers={headers}
          items={items}
          onClickRow={action('onClickRow')}
          onEdit={action('onEdit')}
          edit
        />
      </Container>
    );
  })
  .add('Paginator', () => (
    <Container style={{ paddingTop: '5vh', paddingBottom: '5vh' }}>
      <Paginator currentPage={11} totalPages={51} onPageChange={action('onPageChange')} />
    </Container>
  ))
  .add('DatePicker', () => (
    <Container style={{ paddingTop: '5vh', paddingBottom: '5vh' }}>
      <DatePicker label="Value" value={new Date()} onDateChange={action('onDateChange')} />
      <DatePicker label="No Value" onDateChange={action('onDateChange')} />
      <DatePicker label="Min Date" minDate={new Date()} onDateChange={action('onDateChange')} />
      <DatePicker label="Disabled" onDateChange={action('onDateChange')} disabled />
    </Container>
  ))
  .add('RejectionNote', () => {
    const [anchorElement, setAnchorElement] = React.useState(null);

    const openNote = event => {
      action('onOpenNote')(event.currentTarget);
      setAnchorElement(event.currentTarget);
    };

    const closeNote = () => {
      action('onCloseNote')(null);
      setAnchorElement(null);
    };

    return (
      <Container style={{ paddingTop: '5vh', paddingBottom: '5vh', height: '200vh' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            padding: '25vw 0px'
          }}
        >
          <ButtonMaterial variant="contained" color="primary" onClick={openNote}>
            Anchor
          </ButtonMaterial>
          <RejectionNote
            anchorElement={anchorElement}
            onClose={closeNote}
            name="Valerie Baumbach"
            image="http://usagibaru.com/wp-content/uploads/2019/06/3822333_0.jpg"
            date={new Date()}
            reason="Video no corresponde a documento."
            comments="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
        </div>
      </Container>
    );
  })
  .add('HeaderCollapse', () => (
    <Container style={{ paddingTop: '5vh', paddingBottom: '5vh' }}>
      <HeaderCollapse title="Soy Un Collapse :3">
        <h1>Soy El Children Del Collapse :3</h1>
      </HeaderCollapse>
      <HeaderCollapse title="Soy Un Contenedor" container>
        <h1>Soy El Children Del Contenedor</h1>
      </HeaderCollapse>
    </Container>
  ))
  .add('DocumentList', () => (
    <Container style={{ paddingTop: '5vh', paddingBottom: '5vh' }}>
      <DocumentList
        title="Titulo Documentos"
        documents={[
          { name: 'Documento 1', status: 'Aceptado', progress : { qty: 2, total: 2 } },
          { name: 'Documento 2', status: 'Pendiente', progress : { qty: 0, total: 2 } },
          { name: 'Documento 3', status: 'Rechazado', progress : { qty: 2, total: 3 } },
          { name: 'Documento 4', status: 'En Revisión', progress : { qty: 1, total: 3 } }
        ]}
        onClickDocument={action('onClickDocument')}
        onDownload={action('onDownload')}
      />
    </Container>
  ))
  .add('HeaderCard', () => (
    <Container style={{ paddingTop: '5vh', paddingBottom: '5vh' }}>
      <HeaderCard title="Title" subheader="SubHeader">
        <h1>Child :3</h1>
      </HeaderCard>
    </Container>
  ))
  .add('VideoCard', () => (
    <Container style={{ paddingTop: '5vh', paddingBottom: '5vh' }}>
      <VideoCard
        title="Firma en video"
        video="http://clips.vorwaerts-gmbh.de/VfE_html5.mp4"
        onReject={action('onReject')}
        rejectionOptions={[
          { name: 'Calidad baja' },
          { name: 'Sin imagen' },
          { name: 'Sin sonido' },
          { name: 'Sin audio' }
        ]}
        rejectionData={{
          name: 'Valerie Baumbach',
          image: 'http://usagibaru.com/wp-content/uploads/2019/06/3822333_0.jpg',
          date: new Date(),
          reason: 'Video no corresponde a documento.',
          comments:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        }}
        rejected={false}
      />
    </Container>
  ))
  .add('RejectionField', () => (
    <Container maxWidth="sm" style={{ paddingTop: '5vh', paddingBottom: '5vh' }}>
      <Grid container spacing={0}>
        <Grid key="a1" item sm={12}>
          <RejectionField
            field={{
              label: 'Monto total del crédito',
              value: '72,000.00',
              fieldType: { name: 'número' }
            }}
            onReject={action('onReject')}
            rejectionOptions={[
              { name: 'Calidad baja' },
              { name: 'Sin imagen' },
              { name: 'Sin sonido' },
              { name: 'Sin audio' }
            ]}
            rejectionData={{}}
            rejected={false}
          />
        </Grid>
        <Grid key="a2" item sm={12}>
          <RejectionField
            field={{
              label: 'Monto total del crédito',
              value: '72,000.00',
              fieldType: { name: 'número' }
            }}
            onReject={action('onReject')}
            rejectionOptions={[
              { name: 'Calidad baja' },
              { name: 'Sin imagen' },
              { name: 'Sin sonido' },
              { name: 'Sin audio' }
            ]}
            rejectionData={{
              name: 'Valerie Baumbach',
              image: 'http://usagibaru.com/wp-content/uploads/2019/06/3822333_0.jpg',
              date: new Date(),
              reason: 'Video no corresponde a documento.',
              comments:
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            }}
            rejected
            onHandlerInput={action('onHandlerInput')}
          />
        </Grid>
        <Grid key="a4" item sm={12}>
          <RejectionField
            field={{
              label: 'Corre electronico',
              value: 'alfredo@fintecimal.com',
              fieldType: { name: 'email' }
            }}
            onReject={action('onReject')}
            rejectionOptions={[
              { name: 'Calidad baja' },
              { name: 'Sin imagen' },
              { name: 'Sin sonido' },
              { name: 'Sin audio' }
            ]}
            rejectionData={{}}
            rejected={false}
            showUndo
            onUndoRejection={action('onUndoRejection')}
          />
        </Grid>
        <Grid key="a3" item sm={12}>
          <RejectionField
            field={{
              label: 'Corre electronico',
              value: 'alfredo@fintecimal.com',
              fieldType: { name: 'email' }
            }}
            onReject={action('onReject')}
            rejectionOptions={[
              { name: 'Calidad baja' },
              { name: 'Sin imagen' },
              { name: 'Sin sonido' },
              { name: 'Sin audio' }
            ]}
            rejectionData={{
              name: 'Valerie Baumbach',
              image: 'http://usagibaru.com/wp-content/uploads/2019/06/3822333_0.jpg',
              date: new Date(),
              reason: 'Video no corresponde a documento.',
              comments:
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            }}
            rejected
            onHandlerInput={action('onHandlerInput')}
            showUndo
            onUndoRejection={action('onUndoRejection')}
          />
        </Grid>
        <Grid key="a4" item sm={12}>
          <RejectionField
            field={{
              label: 'Celular',
              value: '3333333333',
              fieldType: { name: 'celular' }
            }}
            onReject={action('onReject')}
            rejectionOptions={[
              { name: 'Calidad baja' },
              { name: 'Sin imagen' },
              { name: 'Sin sonido' },
              { name: 'Sin audio' }
            ]}
            rejectionData={{}}
            rejected={false}
            showUndo
            onUndoRejection={action('onUndoRejection')}
          />
        </Grid>
        <Grid key="a3" item sm={12}>
          <RejectionField
            field={{
              label: 'Celular',
              value: '3333333333',
              fieldType: { name: 'celular' }
            }}
            onReject={action('onReject')}
            rejectionOptions={[
              { name: 'Calidad baja' },
              { name: 'Sin imagen' },
              { name: 'Sin sonido' },
              { name: 'Sin audio' }
            ]}
            rejectionData={{
              name: 'Valerie Baumbach',
              image: 'http://usagibaru.com/wp-content/uploads/2019/06/3822333_0.jpg',
              date: new Date(),
              reason: 'Video no corresponde a documento.',
              comments:
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            }}
            rejected
            onHandlerInput={action('onHandlerInput')}
            showUndo
            onUndoRejection={action('onUndoRejection')}
          />
        </Grid>
        <Grid key="a4" item sm={12}>
          <RejectionField
            field={{
              label: 'RFC',
              value: 'XEXX010101000',
              fieldType: { name: 'RFC' }
            }}
            onReject={action('onReject')}
            rejectionOptions={[
              { name: 'Calidad baja' },
              { name: 'Sin imagen' },
              { name: 'Sin sonido' },
              { name: 'Sin audio' }
            ]}
            rejectionData={{}}
            rejected={false}
            showUndo
            onUndoRejection={action('onUndoRejection')}
          />
        </Grid>
        <Grid key="a3" item sm={12}>
          <RejectionField
            field={{
              label: 'RFC',
              value: 'XEXX010101000',
              fieldType: { name: 'RFC' }
            }}
            onReject={action('onReject')}
            rejectionOptions={[
              { name: 'Calidad baja' },
              { name: 'Sin imagen' },
              { name: 'Sin sonido' },
              { name: 'Sin audio' }
            ]}
            rejectionData={{
              name: 'Valerie Baumbach',
              image: 'http://usagibaru.com/wp-content/uploads/2019/06/3822333_0.jpg',
              date: new Date(),
              reason: 'Video no corresponde a documento.',
              comments:
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            }}
            rejected
            onHandlerInput={action('onHandlerInput')}
            showUndo
            onUndoRejection={action('onUndoRejection')}
          />
        </Grid>
        <Grid key="a4" item sm={12}>
          <RejectionField
            field={{
              label: 'Tipo de pago',
              value: 'Quincenal',
              fieldType: { name: 'lista' },
              config: [
                {
                  type: 'string',
                  name: 'Mensual'
                },
                {
                  type: 'string',
                  name: 'Quincenal'
                }
              ]
            }}
            onReject={action('onReject')}
            rejectionOptions={[
              { name: 'Calidad baja' },
              { name: 'Sin imagen' },
              { name: 'Sin sonido' },
              { name: 'Sin audio' }
            ]}
            rejectionData={{}}
            rejected={false}
            showUndo
            onUndoRejection={action('onUndoRejection')}
          />
        </Grid>
        <Grid key="a3" item sm={12}>
          <RejectionField
            field={{
              label: 'Tipo de pago',
              value: 'Mensual',
              fieldType: { name: 'lista' },
              config: [
                {
                  type: 'string',
                  name: 'Mensual'
                },
                {
                  type: 'string',
                  name: 'Quincenal'
                }
              ]
            }}
            onReject={action('onReject')}
            rejectionOptions={[
              { name: 'Calidad baja' },
              { name: 'Sin imagen' },
              { name: 'Sin sonido' },
              { name: 'Sin audio' }
            ]}
            rejectionData={{
              name: 'Valerie Baumbach',
              image: 'http://usagibaru.com/wp-content/uploads/2019/06/3822333_0.jpg',
              date: new Date(),
              reason: 'Video no corresponde a documento.',
              comments:
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            }}
            rejected
            onHandlerInput={action('onHandlerInput')}
            showUndo
            onUndoRejection={action('onUndoRejection')}
          />
        </Grid>
      </Grid>
    </Container>
  ))
  .add('RejectionButtons', () => (
    <Container maxWidth="sm" style={{ paddingTop: '5vh', paddingBottom: '5vh' }}>
      <RejectionButtons
        handlerReject={action('onReject')}
        rejectionOptions={[
          { name: 'Calidad baja' },
          { name: 'Sin imagen' },
          { name: 'Sin sonido' },
          { name: 'Sin audio' }
        ]}
        rejectionData={{
          name: 'Valerie Baumbach',
          image: 'http://usagibaru.com/wp-content/uploads/2019/06/3822333_0.jpg',
          date: new Date(),
          reason: 'Video no corresponde a documento.',
          comments:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        }}
        rejected={false}
        onOpen={action('onOpen')}
        onClose={action('onClose')}
        onAccept={action('onAccept')}
      />
    </Container>
  ))
  .add('RejectionButtons', () => (
    <Container maxWidth="sm" style={{ paddingTop: '5vh', paddingBottom: '5vh' }}>
      <RejectSimple
        field={{ label: 'Se aprueba regimen fiscal', id: 1111 }}
        onReject={action('onReject')}
        onAccept={action('onAccept')}
        rejectionOptions={[
          { name: 'Calidad baja' },
          { name: 'Sin imagen' },
          { name: 'Sin sonido' },
          { name: 'Sin audio' }
        ]}
        rejectionData={{}}
        rejected={false}
      />
      <RejectSimple
        field={{ label: 'Se aprueba estado de cuenta', id: 1111 }}
        onReject={action('onReject')}
        onAccept={action('onAccept')}
        rejectionOptions={[
          { name: 'Calidad baja' },
          { name: 'Sin imagen' },
          { name: 'Sin sonido' },
          { name: 'Sin audio' }
        ]}
        rejectionData={{
          name: 'Valerie Baumbach',
          image: 'http://usagibaru.com/wp-content/uploads/2019/06/3822333_0.jpg',
          date: new Date(),
          reason: 'Video no corresponde a documento.',
          comments:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        }}
        rejected
      />
    </Container>
  ))
  .add('RejectDocuments', () => (
    <Container maxWidth="sm" style={{ paddingTop: '5vh', paddingBottom: '5vh' }}>
      <RejectDocuments
        title="Estado de cuenta"
        rejected={false}
        onReject={action('onReject')}
        url="https://fintecimal-test.s3.amazonaws.com/c4611_sample_explain.pdf"
        rejectionOptions={[
          { name: 'Calidad baja' },
          { name: 'Sin imagen' },
          { name: 'Sin sonido' },
          { name: 'Sin audio' }
        ]}
        rejectionData={{}}
        onHandlerReject={action('onHandlerReject')}
      />
      <RejectDocuments
        title="Estado de bancarios"
        onReject={action('onReject')}
        url="https://fintecimal-test.s3.amazonaws.com/c4611_sample_explain.pdf"
        rejectionOptions={[
          { name: 'Calidad baja' },
          { name: 'Sin imagen' },
          { name: 'Sin sonido' },
          { name: 'Sin audio' }
        ]}
        rejectionData={{
          name: 'Valerie Baumbach',
          image: 'http://usagibaru.com/wp-content/uploads/2019/06/3822333_0.jpg',
          date: new Date(),
          reason: 'Video no corresponde a documento.',
          comments:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        }}
        rejected
        onHandlerReject={action('onHandlerReject')}
      />
      <RejectDocuments
        title="Estado de cuenta"
        rejected={false}
        onReject={action('onReject')}
        url="https://fintecimal-test.s3.amazonaws.com/Screen Shot 2020-03-03 at 10.52.13.png"
        rejectionOptions={[
          { name: 'Calidad baja' },
          { name: 'Sin imagen' },
          { name: 'Sin sonido' },
          { name: 'Sin audio' }
        ]}
        rejectionData={{}}
        onHandlerReject={action('onHandlerReject')}
        showUndo
        onUndoRejection={action('onUndoRejection')}
        editable={false}
      />
      <RejectDocuments
        title="Estado de cuenta Document Editor"
        rejected={false}
        onReject={action('onReject')}
        url="https://fintecimal-test.s3.amazonaws.com/62bc8b9b7d4aaa0033d536b2/Reverse-Identificacion-Oficial-ab780e53-d00a-467b-9260-4035841c9984.png"
        rejectionOptions={[
          { name: 'Calidad baja' },
          { name: 'Sin imagen' },
          { name: 'Sin sonido' },
          { name: 'Sin audio' }
        ]}
        rejectionData={{}}
        onHandlerReject={action('onHandlerReject')}
        showUndo
        onUndoRejection={action('onUndoRejection')}
        editable={false}
      />
      <RejectDocuments
        title="Estado de bancarios"
        onReject={action('onReject')}
        url="https://fintecimal-test.s3.amazonaws.com/Screen Shot 2020-03-03 at 10.52.13.png"
        rejectionOptions={[
          { name: 'Calidad baja' },
          { name: 'Sin imagen' },
          { name: 'Sin sonido' },
          { name: 'Sin audio' }
        ]}
        rejectionData={{
          name: 'Valerie Baumbach',
          image: 'http://usagibaru.com/wp-content/uploads/2019/06/3822333_0.jpg',
          date: new Date(),
          reason: 'Video no corresponde a documento.',
          comments:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        }}
        rejected
        onHandlerReject={action('onHandlerReject')}
        showUndo
        onUndoRejection={action('onUndoRejection')}
        editable={false}
      />
    </Container>
  ))
  .add('PDFCard', () => (
    <Container style={{ paddingTop: '5vh', paddingBottom: '5vh' }}>
      <PDFCard
        title="EL PDF"
        pdf="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
      />
    </Container>
  ))
  .add('DropZone', () => (
    <Container style={{ paddingTop: '5vh', paddingBottom: '5vh' }}>
      <DropZone title="DropZone" />
    </Container>
  ))
  .add('Liveness', () => {
    return (
      <Container style={{ paddingTop: '5vh', paddingBottom: '5vh' }}>
        <Liveness
          participants={signersLiveness}
          title="Prueba de vida"
        />
      </Container>
    );
  })
  .add('FilePreview', () => {
    const [image, setImage] = useState(new File([''], 'test.png', { type: 'image/png' }));
    const [pdf, setPdf] = useState(new File([''], 'test.pdf', { type: 'application/pdf' }));

    useEffect(() => {
      fetch('https://upload.wikimedia.org/wikipedia/commons/c/cc/Game_Boy_Color_Pikachu.jpg')
        .then(response => response.blob())
        .then(blob => {
          const file = new File([blob], 'test.jpg', { type: blob.type });
          setImage(file);
        });

      fetch('https://s1.q4cdn.com/806093406/files/doc_downloads/test.pdf')
        .then(response => response.blob())
        .then(blob => {
          const file = new File([blob], 'test.pdf', { type: blob.type });
          setPdf(file);
        });
    }, []);

    return (
      <Container style={{ paddingTop: '5vh', paddingBottom: '5vh' }}>
        <FilePreview verify={{ status: 1 }} file={image} onDelete={action('onDelete')} />
        <FilePreview file={pdf} onDelete={action('onDelete')} />
        <FilePreview signers={signers} file={pdf} onDelete={action('onDelete')} />
      </Container>
    );
  })
  .add('UploadDocuments', () => (
    <Container style={{ paddingTop: '5vh', paddingBottom: '5vh' }}>
      <UploadDocuments
        title="DropZone INE"
        multiple
        accept=""
        onDrop={action('onDrop')}
        onDelete={action('onDelete')}
        placeholder="Busca una nómina"
        useEditorIne
        useDeleteDialog
      />
      <UploadDocuments
        title="DropZone Multiple"
        multiple
        accept=""
        onDrop={action('onDrop')}
        onDelete={action('onDelete')}
        placeholder="Busca una nómina"
      />
      <UploadDocuments
        title="DropZone with Delete Dialog"
        multiple
        accept=""
        onDrop={action('onDrop')}
        onDelete={action('onDelete')}
        onDeleteAll={action('onDeleteAll')}
        useDeleteDialog
        placeholder="Busca una nómina"
      />
      <UploadDocuments
        title="DropZone"
        multiple={false}
        accept=""
        onDrop={action('onDrop')}
        onDelete={action('onDelete')}
      />
       <UploadDocuments
        title="CURP"
        multiple={false}
        accept=""
        onDrop={action('onDrop')}
        onDelete={action('onDelete')}
        required
      />
    </Container>
  ))
  .add('FileThumbnail', () => {
    const [image, setImage] = useState(new File([''], 'test.png', { type: 'image/png' }));
    const [pdf, setPdf] = useState(new File([''], 'test.pdf', { type: 'application/pdf' }));

    useEffect(() => {
      fetch('https://upload.wikimedia.org/wikipedia/commons/c/cc/Game_Boy_Color_Pikachu.jpg')
        .then(response => response.blob())
        .then(blob => {
          const file = new File([blob], 'test.jpg', { type: blob.type });
          setImage(file);
        });

      fetch('https://s1.q4cdn.com/806093406/files/doc_downloads/test.pdf')
        .then(response => response.blob())
        .then(blob => {
          const file = new File([blob], 'test.pdf', { type: blob.type });
          setPdf(file);
        });
    }, []);
    return (
      <Container
        style={{
          paddingTop: '5vh',
          paddingBottom: '5vh',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around'
        }}
      >
        <FileThumbnail file={pdf} onClick={action('onClick')} />
        <FileThumbnail file={image} onClick={action('onClick')} />
        <FileThumbnail file={image} onClick={action('onClick')} selected />
      </Container>
    );
  })
  .add('FileFinder', () => {
    const [image, setImage] = useState(new File([''], 'test.png', { type: 'image/png' }));
    const [pdf, setPdf] = useState(new File([''], 'test.pdf', { type: 'application/pdf' }));
    const [files, setFiles] = useState([]);
    useEffect(() => {
      fetch('https://upload.wikimedia.org/wikipedia/commons/c/cc/Game_Boy_Color_Pikachu.jpg')
        .then(response => response.blob())
        .then(blob => {
          const file = new File([blob], 'test.jpg', { type: blob.type });
          setImage(file);
        });

      fetch('https://s1.q4cdn.com/806093406/files/doc_downloads/test.pdf')
        .then(response => response.blob())
        .then(blob => {
          const file = new File([blob], 'test.pdf', { type: blob.type });
          setPdf(file);
        });
    }, []);

    useEffect(() => {
      setFiles([image, pdf, image, pdf, image, pdf, image, pdf]);
    }, [image, files]);
    return (
      <Container
        style={{
          paddingTop: '5vh',
          paddingBottom: '5vh',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around'
        }}
      >
        <FileFinder files={files} onClick={action('onClick')} placeholder="Busca una nómina" />
      </Container>
    );
  });

storiesOf('Components|SelectBasic', module).add('Select Basic', () => (
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

import Chat from '../lib/Chat';
storiesOf('Components|Chat', module).add('Chat', () => (
  <Chat
    textLimit={100}
  />
));

import ButtonChat from '../lib/ButtonChat';
storiesOf('Components|ButtonChat', module).add('ButtonChat', () => (
  <ButtonChat
    textLimit={100}
  />
));

import AutoComplete from '../lib/Autocomplete';

storiesOf('Components|AutoComplete', module).add('Auto Complete', () => (
  <AutoComplete
    label="el label"
    placeholder="Placeholder"
    handleChange={action('handleChange')}
    required
    error
    errorMessage={longText}
    // value={'Seleccion mal'}
    options={listWithCategories}
    handleOnChangeWhen={['click', 'type']}
    onClear={action('handleChange')}
  // value="3"
  />
));

const singleOptions = [
  {
    "type": "string",
    "name": "Tradicional"
  },
  {
    "type": "string",
    "name": "Tasa cero"
  },
  {
    "type": "string",
    "name": "Recompra"
  },
  {
    "type": "string",
    "name": "Segundas Operaciones"
  }
];
storiesOf('Components|AutoComplete', module).add('Auto Complete single', () => (
  <AutoComplete
    label="el label"
    placeholder="Placeholder"
    handleChange={action('handleChange')}
    required
    error
    errorMessage={longText}
    // value={'Seleccion mal'}
    options={singleOptions}
  // value="3"
  />
));