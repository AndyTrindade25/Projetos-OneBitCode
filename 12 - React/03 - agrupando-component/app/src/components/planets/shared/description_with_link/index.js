import React, { Fragment } from 'react';

const DescriptionWithLink = (props) => {
    if(props.link){
        return (
            <Fragment>
                <p>{props.description}</p>
                <a href={props.link}>{props.link}</a>
            </Fragment>
        )
    } else {
        return (
            <Fragment>
                <p><ul>{props.description}</ul></p>
            </Fragment>
        )
    }
    
}

export default DescriptionWithLink;