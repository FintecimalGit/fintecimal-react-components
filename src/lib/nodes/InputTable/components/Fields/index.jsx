import React, { Fragment, useState, useEffect} from 'react';
import PropTypes from 'prop-types';

import CustomField from "../CustomField";
import Button from "../../../Buttons/Button";

import { generateValueEmpty } from '../../utils';
import useStyles from "./style";

const Fields = ({fieldValues, addNewRow, edit}) =>{
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
        let isValid = true;
        fields.map(field => {
            if(field.required && field.value === ''){
                isValid = false;
                field['error'] = true;
            }
        });
        if(!isValid) setFields([...fields]);
        return isValid;
    };

   if(Object.keys(fields).length === 0) return null;

    return(
        <Fragment>
            {fields.map((field, index) => {
                const { id, name, label, type, value, error = false, errorMessage = '' } = field;
                return(
                    <div className={classes.root} key={id} >
                        <CustomField
                            key={id}
                            type={type}
                            label={label}
                            name={name}
                            value={value}
                            handleChange={(value) => handleOnChange(field, index, value)}
                            error={error}
                            errorMessage={errorMessage}
                            required={error}
                        />
                    </div>
                )
            })}
            <div className={classes.button}>
                <Button text={ edit ? 'Editar' : 'Agregar' } onClick={onClickAccept} />
            </div>
        </Fragment>
    );
};

Fields.propTypes = {
    fields: PropTypes.array,
    addNewRow: PropTypes.func,
    edit: PropTypes.bool,
};

Fields.defaultProps = {
    fields: [],
    addNewRow: () => {},
    edit: false,
};

export default Fields;
