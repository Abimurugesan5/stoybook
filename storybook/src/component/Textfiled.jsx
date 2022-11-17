import React,{useState} from "react";
import PropTypes from 'prop-types';
// const TextFiled = props => {
//     const { className, onChange, type, value,label ,placeholder} = props;
//     return (
//       <>
//           {label && <label htmlFor="app-input-field">{label}</label>}
//       <Input
//         className={className}
//         placeholder={placeholder}
//         onChange={e => onChange(e.target.value)}
//         type={type}
//         value={value}
     
        
//       >
       
//         </Input>

//         {/* <InputField
//         label="Label"
//         onChange={function()}
//         placeholder="Placeholder"
//       /> */}
//         </>
//     );
//   };
//   export default TextFiled;
  // TextFiled.propTypes = {
  //   variant: "className" | "onChange" | "type" | "value"|"lable"|"placeholder",
  // };

const InputField = ({value,name,required, label, placeholder, validators, type, onChange}) => {
  const [error, setError] = useState(false);
  const handleChange = (event) => {
    const {value} = event.target;
    // eslint-disable-next-line no-undef
    setError(validateInput(validators, value));
    onChange(value);
};
return(
  <div>
       <label htmlFor={name} className="block text-sm font-medium text-gray-900">
          {label}
          <span className="text-red-500 font-bold text-lg">{required && '*'}</span>
        </label>
 
    {type === 'textarea' ? (
                <textarea
                    className='form-control'
                    placeholder={placeholder}
                    label={label}
                    value={value}
                    defaultValue={value}
                    onChange={handleChange}
                />
            ) : (
                <input
                    type={type}
                    layout='vertical'
                    value={value}
                    className='form-control'
                    placeholder={placeholder}
                    onChange={handleChange}
                />
            )}
            {error && <span className='text-danger'>{error.message}</span>}

 
  </div>
)

}

export default InputField;
InputField.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  validators: PropTypes.array,
  type: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

InputField.defaultProps = {
value: '',
label: '',
placeholder: '',
type: 'text',
validators: []
};