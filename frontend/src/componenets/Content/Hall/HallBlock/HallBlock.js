import React, {Fragment} from 'react';
import './HallBlock.css'
import {NavLink} from "react-router-dom";
import Block from "../../../UI/Block/Block";

const HallBlock = (props) => {
    const {name, id} = props.hall;
    const link = {
        url: '/halls/' + id
    };

    return <Fragment>
        <NavLink to={link.url} className="nav_link col col-4 p-4 block" >
            <Block name={name}/>
        </NavLink>
    </Fragment>
};

export default HallBlock;