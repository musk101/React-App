import React from 'react';
import Accordion from './components/Accordion';

const items=[
    {
    title: 'what is react',
    content: 'React is awesome!'
    },
    {
        title: 'why use react?',
        content: 'React is awesome!'
        },
        {
            title: 'how do you use react',
            content: 'Bruhh!'
            },

];

export default ()=>{
    return (
    <div>
        <Accordion items={items}/>
        </div>
        );
};

