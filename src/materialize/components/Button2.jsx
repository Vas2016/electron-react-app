import React, { Component } from 'react';

function Button2(props) {

    return (
        <a className={"waves-effect waves-light btn " + props.classAdd}>{props.children}</a>
    );

}



export default Button2;