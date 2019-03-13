import React, {Fragment, Component} from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import {HALLS_URL} from "../../api-urls";
import HallBlock from "../../componenets/HallBlock/HallBlock";


class HallList extends Component {
    state ={
        hall: []
    };

    componentDidMount(){
        axios.get(HALLS_URL)
            .then(response => {
                console.log(response.data);
                return response.data
            })
            .then(hall => this.setState({hall}))
            .catch(error => console.log(error))
    }

    render(){
        console.log(this.state.hall);
        return <Fragment>
            <NavLink to='/halls/add'>Добавить зал</NavLink>
            <div className="row mt-2 bg-info text-center">
                {this.state.hall.map(hall => (
                    <HallBlock hall={hall} key={hall.id}/>
                ))}
            </div>
        </Fragment>
    }
}

export default HallList;