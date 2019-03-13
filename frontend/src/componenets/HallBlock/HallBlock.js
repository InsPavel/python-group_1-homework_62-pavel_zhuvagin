import React from 'react';
import Block from "../UI/Block/Block";

const HallBlock = (props) => {
    const {name, id} = props.hall;
    const link = {
        url: '/halls/' + id
    }
    return <div className="col col-4 text-white ">
        <Block name={name} link={link} id={id}/>
    </div>
};

export default HallBlock;