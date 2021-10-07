import React from 'react'

let Button = (props) => {
    return (
        <a href={props.link} target="_blank" className="buttonMore animated" id={props.styleBtn}>{props.textBtn}</a>
    )
}

export default Button