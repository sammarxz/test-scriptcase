/* eslint-disable no-useless-catch */
import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FormCtx } from '../Form';

// Styles
import {
  Input, TextArea, Label, ErrorMessage,
} from './styles';

const TextInput = (props) => {
  const { id } = props;
  const {
    setFields, addField, fields, validateField, errors,
  } = useContext(
    FormCtx,
  );
  const field = fields[id] || {};
  const {
    name,
    rows,
    value,
    validate,
    placeholder,
    label = '',
    type = 'text',
    events = {},
    classes = {},
  } = field;
  const fieldError = errors[id];

  const { onChange, ...restEvents } = events;
  const { contClass, fieldClass, errorClass } = classes;

  const handleChange = (event) => {
    try {
      setFields(event, field);
    } catch (error) {
      throw error;
    }

    if (typeof onChange === 'function') {
      onChange({
        ...field,
        value: event.target.value,
      });
    }
  };

  useEffect(() => {
    if (value !== undefined) {
      validateField(id);
    }
  }, [value, id]);

  useEffect(() => {
    addField({
      field: props,
      value,
    });
  }, []);

  const fieldProps = {
    ...restEvents,
    id,
    name,
    type,
    value,
    validate,
    placeholder,
    className: fieldClass,
    onChange: handleChange,
  };

  if (type === 'textarea') {
    delete fieldProps.type;
    delete fieldProps.value;

    fieldProps.defaultValue = value;
    fieldProps.rows = rows || 2;
  }

  return field && field.value !== undefined ? (
    <div className={contClass}>
      <Label htmlFor={id}>{label}</Label>
      {type === 'textarea' ? (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <TextArea className="form-input" {...fieldProps} />
      ) : (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <Input className="form-input" {...fieldProps} />
      )}
      <ErrorMessage className={errorClass}>{fieldError}</ErrorMessage>
    </div>
  ) : (
    ''
  );
};

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
};

export default TextInput;
