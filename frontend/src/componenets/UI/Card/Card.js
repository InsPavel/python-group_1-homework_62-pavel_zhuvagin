import React from 'react';
import { NavLink } from 'react-router-dom';
import './Card.css'

const Card = props => {
    return<div className="card">
                    {props.image ? <img className="card-img-top" src={props.image}/> : null}
                    {props.header || props.text || props.link ? <div className="card-body">
                        {props.header ? <h5 className="card-title">{props.header}</h5> : null}
                        {props.text ? <p className="card-text">{props.text}</p> : null}
                        {props.link ? <NavLink to={props.link.url} className='btn btn-primary'>
                            {props.link.text}
                        </NavLink> : null}
                    </div> : null}
                </div>
};


export default Card;