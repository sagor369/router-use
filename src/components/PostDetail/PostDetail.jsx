import React from 'react';
import { useNavigate } from 'react-router-dom';

const PostDetail = () => {
    const goBack = useNavigate()
    const back = ()=>{
        goBack(-1)
    }
    return (
        <div>
            <h1>hello my friend</h1>
            <button onClick={back}>Go back</button>
        </div>
    );
};

export default PostDetail;