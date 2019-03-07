import React from 'react';

const Friend = props => {
    return(
        <>
        <h2>{props.friend.name}</h2>
        <p>{props.friend.age}</p>
        <p>{props.friend.email}</p>
        </>
    );
}

export default Friend;