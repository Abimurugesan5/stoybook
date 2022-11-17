import { Slider, Switch } from 'antd';
import { useState } from 'react';

const  SlideBar= props => {
  const {disabled, setDisabled,value,type} = props;
  const onChange = (checked) => {
    setDisabled(checked);
  };

  return (
    <>
      <Slider  id="slider1"
  label="Slider Label"
  max={25}
  min={0}
  name="slider"
  onChange={function noRefCheck(){}}
  step={1}
  value={2}/>
      
    </>
  );
};

export default SlideBar;