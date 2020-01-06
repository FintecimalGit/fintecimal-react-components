import React, { useState, useEffect } from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import lib from '../lib';
import ui from '../ui';
import tables from '../commons/exampleTable';
import { listWithCategories, listWithoutCategories } from '../lib/commons/exampleList';
import { longText, mediumText, shortText } from '../lib/commons/exampleLongText';
import {
  SearchBar,
  BaseInput,
  Select,
  RejectButton,
  RejectTooltip,
  RejectActions,
  SignatureMap,
  ImageActions
} from '../lib/nodes';

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
  SelectBasic
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
  ))
  .add('Select', () => (
    <Select
      label={'Estatus'}
      placeholder={'Estatus'}
      handleChange={action('handleChange')}
      required={true}
      //error={true}
      errorMessage={shortText}
      //value={'Seleccion mal'}
      options={listWithoutCategories}
    />
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
      active={true}
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
  .add('Image Actions', () => <ImageActions />);

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

import Container from '@material-ui/core/Container';
import ButtonMaterial from '@material-ui/core/Button';
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
  .add('Paginator', () => {
    return (
      <Container style={{ paddingTop: '5vh', paddingBottom: '5vh' }}>
        <Paginator currentPage={11} totalPages={51} onPageChange={action('onPageChange')} />
      </Container>
    );
  })
  .add('DatePicker', () => {
    return (
      <Container style={{ paddingTop: '5vh', paddingBottom: '5vh' }}>
        <DatePicker label="Value" value={new Date()} onDateChange={action('onDateChange')} />
        <DatePicker label="No Value" onDateChange={action('onDateChange')} />
        <DatePicker label="Min Date" minDate={new Date()} onDateChange={action('onDateChange')} />
        <DatePicker label="Disabled" onDateChange={action('onDateChange')} disabled />
      </Container>
    );
  })
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
          style={{ display: 'flex', justifyContent: 'center', width: '100%', padding: '25vw 0px' }}
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
  .add('HeaderCollapse', () => {
    return (
      <Container style={{ paddingTop: '5vh', paddingBottom: '5vh' }}>
        <HeaderCollapse title="Soy Un Collapse :3">
          <h1>Soy El Children Del Collapse :3</h1>
        </HeaderCollapse>
        <HeaderCollapse title="Soy Un Contenedor" container>
          <h1>Soy El Children Del Contenedor</h1>
        </HeaderCollapse>
      </Container>
    );
  })
  .add('DocumentList', () => {
    return (
      <Container style={{ paddingTop: '5vh', paddingBottom: '5vh' }}>
        <DocumentList
          title="Titulo Documentos"
          documents={[
            { name: 'Documento 1', status: 'Aceptado' },
            { name: 'Documento 2', status: 'Pendiente' },
            { name: 'Documento 3', status: 'En espera' }
          ]}
          onClickDocument={action('onClickDocument')}
          onDownload={action('onDownload')}
        />
      </Container>
    );
  })
  .add('HeaderCard', () => {
    return (
      <Container style={{ paddingTop: '5vh', paddingBottom: '5vh' }}>
        <HeaderCard title="Title" subheader="SubHeader">
          <h1>Child :3</h1>
        </HeaderCard>
      </Container>
    );
  })
  .add('VideoCard', () => {
    return (
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
  )})
  .add('RejectionField', () => {
    return (
      <Container maxWidth="sm" style={{ paddingTop: '5vh', paddingBottom: '5vh' }}>
        {
          Array(5).fill(null).map((value, index) => (
            <RejectionField
              field={{
                key: 'Monto total del crédito', value: '$72,000.00',
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
              rejected={index === 0}
            />
          ))
        }
      </Container>
  )})
  .add('PDFCard', () => {
    return (
      <Container style={{ paddingTop: '5vh', paddingBottom: '5vh' }}>
        <PDFCard
          title="EL PDF"
          pdf="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
        />
      </Container>
  )})
  .add('DropZone', () => {
    return (
      <Container style={{ paddingTop: '5vh', paddingBottom: '5vh' }}>
        <DropZone
          title="DropZone"
        />
      </Container>
  )})
  .add('FilePreview', () => {
    const [image, setImage] = useState(new File([''], 'test.png', { type: 'image/png' }))
    const [pdf, setPdf] = useState(new File([''], 'test.pdf', { type: 'application/pdf' }))

    useEffect(() => {
      fetch('https://upload.wikimedia.org/wikipedia/commons/c/cc/Game_Boy_Color_Pikachu.jpg')
        .then(response => response.blob())
        .then((blob) => {
            const file = new File([blob], "test.jpg", { type: blob.type })
            setImage(file)
        });

        fetch('https://s1.q4cdn.com/806093406/files/doc_downloads/test.pdf')
        .then(response => response.blob())
        .then((blob) => {
            const file = new File([blob], "test.pdf", { type: blob.type })
            setPdf(file)
        });
    }, []);

    return (
      <Container style={{ paddingTop: '5vh', paddingBottom: '5vh' }}>
        <FilePreview file={image} onDelete={action('onDelete')} />
        <FilePreview file={pdf} onDelete={action('onDelete')} />
      </Container>
  )})
  .add('UploadDocuments', () => {
    return (
      <Container style={{ paddingTop: '5vh', paddingBottom: '5vh' }}>
        <UploadDocuments
          title="DropZone"
          multiple={false}
          accept=""
          onDrop={action('onDrop')}
          onDelete={action('onDelete')}
        />
      </Container>
  )})
  .add('FileThumbnail', () => {
    const [image, setImage] = useState(new File([''], 'test.png', { type: 'image/png' }))
    const [pdf, setPdf] = useState(new File([''], 'test.pdf', { type: 'application/pdf' }))

    useEffect(() => {
      fetch('https://upload.wikimedia.org/wikipedia/commons/c/cc/Game_Boy_Color_Pikachu.jpg')
        .then(response => response.blob())
        .then((blob) => {
            const file = new File([blob], "test.jpg", { type: blob.type })
            setImage(file)
        });

        fetch('https://s1.q4cdn.com/806093406/files/doc_downloads/test.pdf')
        .then(response => response.blob())
        .then((blob) => {
            const file = new File([blob], "test.pdf", { type: blob.type })
            setPdf(file)
        });
    }, [])
    return (
      <Container
        style={{ paddingTop: '5vh',
        paddingBottom: '5vh',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
      }}
      >
        <FileThumbnail
          file={pdf}
          onClick={action('onClick')}
        />
        <FileThumbnail
          file={image}
          onClick={action('onClick')}
        />
        <FileThumbnail
          file={image}
          onClick={action('onClick')}
          selected
        />
      </Container>
  )})
  .add('FileFinder', () => {
    const [image, setImage] = useState(new File([''], 'test.png', { type: 'image/png' }))
    const [pdf, setPdf] = useState(new File([''], 'test.pdf', { type: 'application/pdf' }))

    useEffect(() => {
      fetch('https://upload.wikimedia.org/wikipedia/commons/c/cc/Game_Boy_Color_Pikachu.jpg')
        .then(response => response.blob())
        .then((blob) => {
            const file = new File([blob], "test.jpg", { type: blob.type })
            setImage(file)
        });

        fetch('https://s1.q4cdn.com/806093406/files/doc_downloads/test.pdf')
        .then(response => response.blob())
        .then((blob) => {
            const file = new File([blob], "test.pdf", { type: blob.type })
            setPdf(file)
        });
    }, [])
    return (
      <Container
        style={{ paddingTop: '5vh',
        paddingBottom: '5vh',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
      }}
      >
        <FileFinder
          files={[image, pdf, image, pdf, image, pdf, image, pdf]}
          onClick={action('onClick')}
        />
      </Container>
  )});


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
