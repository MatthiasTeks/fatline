import React from 'react'

let Button = (props) => {
    return (
        <div className="buttonMore animated" id={props.styleBtn}>{props.textBtn}</div>
    )
}

export default Button