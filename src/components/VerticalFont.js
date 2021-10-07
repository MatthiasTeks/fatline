import React from "react";

let VerticalFont = (props) => {
    return (
        <h1 className={`verticalFont ${props.direction}`}>{props.textVertical} <hr/></h1>
    )
}

export default VerticalFont