import React from 'react';
import ReadOnly from '../component/Read';
import Disables from '../component/Disable';
import { stories } from "../../.storybook/main";
import { action } from "@storybook/addon-actions";
import SearchBar from '../component/Search';
export default {
    title: 'IDesk/Component/Search',
    component: SearchBar,
    argTypes: {
      type: {
        options: ['text', 'email', 'password', 'file', 'checkbox'],
        control: {
          type: 'select'
        }
      },
    
  },
  };
  const Template = () => <SearchBar/>;
  
  export const Search = Template.bind({});
  const TemplateS = () => <Disables/>
  export const disabled = TemplateS.bind({});
  const TemplateE = () => <ReadOnly/>;
  export const readOnly =  TemplateE.bind({})