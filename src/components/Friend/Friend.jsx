import React from 'react';
import './Friend.css'
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {
    const {name, id, email, phone}= friend
    return (
        <div className='friend'>
            <h2>My Name:{name} </h2>
            <p>My email : {email} </p>
            <p>My phone{phone} </p>
            <p> <Link to={`/friend/${id}`}> About as more</Link> </p>
            
        </div>
    );
};

export default Friend;