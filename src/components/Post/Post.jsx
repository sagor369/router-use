import React from 'react';
import './Post.css'
import { Link, useNavigate } from 'react-router-dom';

const Post = ({post}) => {
    const {id, title, body} = post
    const useNav = useNavigate()
    const showButton = ()=>{
        useNav(`/posts/${id}`)
    }
    return (
        <div className='post'>
            <h2>{id}</h2>
            <h5>{title}</h5>
            <Link to={`/posts/${id}`}>show more</Link>
            <Link to={`/posts/${id}`}><button>show more link button</button>
            </Link>
            <button onClick={showButton}>show button</button>
        </div>
    );
};

export default Post;