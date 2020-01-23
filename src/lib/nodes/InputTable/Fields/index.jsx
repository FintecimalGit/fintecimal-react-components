import React from 'react';
import PropTypes from 'prop-types';

import BaseInput from "../../BaseInput";
import Button from "../../Buttons/Button";
import useStyles from "./style";


const Fields = ({fields, header, addNewRow}) =>{
    const classes = useStyles();
    const [values, setValues] = React.useState({});
    const [inputError, setInputError] = React.useState({});

    React.useEffect(() =>{
        if(Object.keys(values).length === 0) createEmptyValues(header);
    }, [header]);

    const isString = (value) => typeof value === 'string';

    const handleChangeInputs = (input) => (event) => {
        const value = isString(event) ? event : event.target.value;
        setValues({ ...values, [input.label]: value });
        setInputError({...inputError, [input.label]: false})
    };

    const getInputValue = (input) => values[input.label] || '';

    const getInputValueError = (input) => inputError[input.label] || false;

    const clearText = (input) => (event) => setValues({ ...values, [input.label]: '' });

    const onClickAccept = () => {
        if(validateInformation()) return null;
        addNewRow(values);
        createEmptyValues(header);
    };

    const createEmptyValues = (headers) => {
        let value = {};
        let valueErrors = {}
        headers.map(keys => {
            value[keys.key] = '';
            valueErrors[keys.key] = false;
        });
        setValues(value);
        setInputError(valueErrors);
    };

    const validateInformation = () => {
        let inputErrors = {...inputError};
        let exitsErrors = false;
        for(let key in values){
           if(values[key] === ''){
               inputErrors[key] = true;
               exitsErrors = true;
           }else{
               inputErrors[key] = false;
           }
        }
        setInputError(inputErrors);
        return exitsErrors;
    };

    return(
        <div className={classes.content} >
            {fields.map(values => {
                const  { label, id } = values;
                return(
                    <div className={classes.content_inputs} key={id}>
                        <BaseInput
                                    handleChange={handleChangeInputs({label})}
                                    label={label}
                                    required
                                    type={'text'}
                                    value={getInputValue({label})}
                                    onClear={clearText({label})}
                                    error={getInputValueError({label})}
                                    errorMessage={'Campo obligatorio'}
                        />
                    </div>
                );
            })}
            <Button text="Agregar" onClick={onClickAccept} />
        </div>
    );
};

Fields.propTypes = {
    fields: PropTypes.array,
    header: PropTypes.array,
    addNewRow: PropTypes.func,
};

Fields.defaultProps = {
    fields: [],
    header: [],
    addNewRow: () => {},
};

export default Fields;
