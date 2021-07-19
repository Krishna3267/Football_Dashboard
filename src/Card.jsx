import React from 'react';
const Card = (props) => {

    return(
        <>
        <iframe className="mb-4" width={props.w} height={props.h} src={props.newsrc}></iframe>
        
        </>
    )
}

export default Card;