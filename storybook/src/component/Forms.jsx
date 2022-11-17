/* eslint-disable no-undef */
import React from "react";
import PropTypes from 'prop-types';
import TextfiledStories from "../stories/Textfiled.stories";
import InputField from "./Textfiled";
const Form=({value, label, placeholder, validators, type, onChange})=>{
    const handleChange = (event) => {
        const {value} = event.target;
        setError(validateInput(validators, value));
        onChange(value);
    };
    return(
    <>
    <InputField  />
   
    </>
)
}
export default Form;
Form.propTypes = {
    value: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    validators: PropTypes.array,
    type: PropTypes.string,
    onChange: PropTypes.func.isRequired
  };