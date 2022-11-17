import React from 'react';
import { CardComponents } from './Publishcards.stories';
import { CardComp } from '../component/Card';
import AddCard from '../component/AddCard';
import DarftCatd from '../component/DraftCard';
import NormalCards from '../component/NormalCard';
export default {
  title: 'IDesk/Component/Card',
  component: CardComp,
  argTypes: {
    backgroundColor: { control: 'color' },
    actions: {
        handles: ['click'],
      },
  },
};

const TemplateT = (args) => <AddCard {...args} />;
export const AddCards = TemplateT.bind({})
const TemplateS = (args) => <DarftCatd {...args}/>
export const DarftCards = TemplateS.bind({})
const TemplateE = (args) => <NormalCards {...args}/>
export const Normal = TemplateE.bind({}) 