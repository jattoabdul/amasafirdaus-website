import React from 'react';

export const BlogPeekTab = (props) => {
    return (
        <li className={`tab ${props.linkClassName} ${props.isActive ? 'active' : ''}`}
            onClick={(event) => {
                event.preventDefault();
                props.onClick(props.tabIndex);
            }}
        >
            {props.categoryName}
        </li>
    )
}