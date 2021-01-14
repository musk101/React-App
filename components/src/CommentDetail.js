import React from 'react';
import faker from 'faker';

const CommentDetail=function(){
    return(
        <div className="comment">
            <a href='/' className="cats">
                <img alt="cats" src={faker.image.cats()}/>
            </a>
            <div className="content">
            <a href='/' className="author">
                Muskan!
            </a>
            <div className="metadata">
            <span className='date'>
                Today 6pm!
            </span>
        </div>
        </div>
        </div>
    );
};
 export default CommentDetail;