import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendAbout = () => {
    const friend = useLoaderData()
    console.log(friend)
    return (
        <div>
            <h3>{friend.name}</h3>
            <p>{friend.email}</p>
            <p>{friend.phone}</p>
        </div>
    );
};

export default FriendAbout;