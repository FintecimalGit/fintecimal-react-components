import React from 'react';
import PropTypes from 'prop-types';

import BaseInput from "../../BaseInput";
import Button from "../../Buttons/Button";


const Fields = ({fields, addNewRow}) =>{

    const emptyfields = {};

    const [values, setValues] = React.useState({});

    const isString = (value) => typeof value === 'string';

    const handleChangeInputs = (input) => (event) => {
        const value = isString(event) ? event : event.target.value;
        setValues({ ...values, [input.label]: value });
    };

    const getInputValue = (input) => values[input.label] || '';

    const onClickAccept = () => {
        addNewRow(values);
        setValues({});
    };

    return(
        <div>
            {fields.map(values => {
                const  { label, id } = values;
                return(
                    <BaseInput key={id} handleChange={handleChangeInputs({label})} label={label} required={true} type={'text'} value={getInputValue({label})}/>
                );
            })}
            <Button text="Aceptar" onClick={onClickAccept} />
        </div>
    );
};

export default Fields;