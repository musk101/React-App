import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
const App=function(){
    return <div className='ui container elements'>
   <CommentDetail/>
   <CommentDetail/>
   <CommentDetail/>
</div>


};
 ReactDOM.render(<App/>,document.querySelector('#root'));