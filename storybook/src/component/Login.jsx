import React from 'react';
import PropTypes from 'prop-types';

const FormField = React.forwardRef(
  ({ type, name, label, required, placeholder, ...props }, ref) => {
    return (
      <div>
        <label htmlFor={name} className="block text-sm font-medium text-gray-900">
          {label}
          <span className="text-red-500 font-bold text-lg">{required && '*'}</span>
        </label>
 
        <div >
          <input
            {...props}
            name={name}
            ref={ref}
            type={type}
            id={name}
            className={['field', `field--${type}`].join(' ')}
            placeholder={placeholder}
          />
          <br/>
          
        </div>
      </div>
    );
  }
);

export default FormField;

FormField.propTypes = {
  type: PropTypes.oneOf(['text', 'email', 'password', 'file', 'checkbox']),
  register: PropTypes.func,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string
};

FormField.defaultProps = {
  type: 'text',
  name: 'text',
  label: 'Label',
  placeholder: ''
};