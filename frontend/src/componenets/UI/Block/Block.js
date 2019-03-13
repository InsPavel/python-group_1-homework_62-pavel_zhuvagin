import React from 'react';
import './Block.css'
import { NavLink } from 'react-router-dom';

const Block = props => {
    return <div>
            <NavLink to='' className="nav_link">{props.name}</NavLink>
        </div>
};

export default Block;