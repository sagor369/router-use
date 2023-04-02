import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from '../Friend/Friend';
import './Header.css'

const Header = () => {
    const friends  = useLoaderData()
    return (
        <div>
            <h2>hello wellocome to header sections</h2>
            <h2>My total friends {friends.length}</h2>
            <div className='friends'>
            {
                friends.map(friend => <Friend
                key={friend.id}
                friend={friend}
                >
                </Friend>)
            }
            </div>
        </div>
    );
};

export default Header;