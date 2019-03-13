import React from 'react';
import Block from "../UI/Block/Block";

const HallBlock = (props) => {
    const {name} = props.hall;
    return <div className="col col-4 text-white ">
        <Block name={name}/>
    </div>
};

export default HallBlock;