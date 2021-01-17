import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard'
const App=function(){
    return <div className='ui container elements'>
        <ApprovalCard>
   <CommentDetail/></ApprovalCard>
   <CommentDetail/>
   <CommentDetail/>
</div>


};
 ReactDOM.render(<App/>,document.querySelector('#root'));