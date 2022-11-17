import React from "react";
import Form from "../component/Forms";
import InputField from "../component/Textfiled";
import FormField from "../component/Login";
import { stories } from "../../.storybook/main";
import { action } from "@storybook/addon-actions";
import { Headercomponent } from "./HeaderBar.stories";
import Sign from "../component/Sign";
import { Text } from "./Login.stories";
import { Email } from "./Login.stories";
import { Password } from "./Login.stories";
import { File } from "./Login.stories";
import { Primary } from "./Button.stories ";
export default{
    title:"Idesk/Component/Forms",
    component:Form,
    argTypes: {
        type: {
            options: ['text', 'email', 'password', 'file', 'checkbox'],
            control: {
              type: 'select'
            }
          }
}
}
export const BaseStory = (args) =>(
 <>
<Text {...args}/>
<Password {...args}/>
<File {...args}/>
<FormField {...args}/>
<Email {...args}/>
<Primary type="primary" {...args}/>
 </>
)

