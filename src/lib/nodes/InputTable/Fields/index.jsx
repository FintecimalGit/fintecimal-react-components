import React, { Fragment, useState, useEffect} from 'react';
import PropTypes from 'prop-types';

import CustomField from "./CustomField";
import Button from "../../Buttons/Button";

import {generateValueEmpty} from '../utils';
import useStyles from "./style";

const Fields = ({fieldValues, addNewRow}) =>{
    const classes = useStyles();
    const [fields, setFields]  = useState([]);
    const [deleteInfo, setDeleteInfo] = useState(false);

    useEffect(() =>{
        setFields(fieldValues);
    }, [fieldValues]);

    useEffect(() =>{
        if(deleteInfo) {
            setFields(generateValueEmpty(fields));
            setDeleteInfo(false);
        }
    }, [deleteInfo]);

    const handleOnChange = (field, index, value) => {
        let newFields = fields;
        newFields[index] = { ...field, value};
        setFields(newFields)
    };

    const onClickAccept = () => {
        if(areValidFields()){
            addNewRow(fields);
            setDeleteInfo(true);
        }
    };

    const areValidFields = () => {
        const isValid = !Boolean(fields.some(field.required && field.value === ''))
        return isValid;
    };

   if(Object.keys(fields).length === 0) return null;

    return(
        <Fragment>
            {fields.map((field, index) => {
                const { id, name, label, type, value, required = false } = field;
                return(
                    <div className={classes.root} key={id} >
                        <CustomField
                            key={id}
                            type={type}
                            label={label}
                            name={name}
                            value={value}
                            required={required}
                            handleChange={(value) => handleOnChange(field, index, value)}
                        />
                    </div>
                )
            })}
            <div className={classes.button}>
                <Button text="Agregar" onClick={onClickAccept} />
            </div>
        </Fragment>
    );
};

Fields.propTypes = {
    fields: PropTypes.array,
    addNewRow: PropTypes.func,
};

Fields.defaultProps = {
    fields: [],
    addNewRow: () => {},
};

export default Fields;
