import React, { createContext, Component } from 'react';
import PropTypes from 'prop-types';

// Validations
import validations from './validations';

// Context
export const FormCtx = createContext({
  fields: {},
  errors: {},
});

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {},
      errors: {},
    };
  }

  setFields = (event, { id }) => {
    event.persist();

    const { fields } = this.state;
    const field = fields[id];

    this.addField({
      field: {
        ...field,
        value: event.currentTarget.value,
      },
    });
  };

  addField = ({ field }) => {
    const { id } = field;

    const newField = {
      value: '',
      ...field,
    };

    if (id) {
      this.setState((prevState) => ({
        ...prevState,
        fields: {
          ...prevState.fields,
          [id]: newField,
        },
      }));

      return;
    }

    throw new Error(`please add 'id' field to the input: ${field}`);
  };

  validateField = (id) => {
    let error = '';
    const { fields } = this.state;
    const {
      value: fieldValue,
      validate,
      displayName,
      customRules = {},
    } = fields[id];

    const rules = validate ? validate.split('|') : '';

    if (rules.length) {
      rules.map((rule) => {
        const ruleName = rules[rule];
        const validation = validations[ruleName] || customRules[ruleName];
        const isRuleSatisfied = ruleName !== 'required' && !fieldValue
          ? true
          : validation.rule().test(fieldValue.toString());

        if (!isRuleSatisfied) {
          error = validation.formatter.apply(null, [displayName || id]);
        }

        return 'test';
      });

      this.setState((prevState) => ({
        ...prevState,
        errors: {
          ...prevState.errors,
          [id]: error,
        },
      }));
    }
  };

  render() {
    const { children } = this.props;
    const { fields, errors } = this.state;
    const formCtx = {
      fields,
      errors,
      addField: (data) => {
        this.addField(data);
      },
      setFields: this.setFields,
      validateField: this.validateField,
    };

    return (
      <form action="">
        <FormCtx.Provider value={formCtx}>
          {children}
        </FormCtx.Provider>
      </form>
    );
  }
}

Form.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Form;
