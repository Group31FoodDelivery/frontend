import React from 'react'
import './HeaderButton.css';

export default function HeaderButton(props) {
    return (
        <span className="HeaderButton">
            {props.nappiteksti}
        </span>
    )
}
