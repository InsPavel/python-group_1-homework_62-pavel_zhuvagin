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
        return <Fragment>
            <NavLink to='' className='mr-2'>Список фильмов</NavLink>
            <NavLink to='/halls/add'>Добавить зал</NavLink>
            <div className="row mt-2 text-center">
                {this.state.hall.map(hall => {
                    if(!hall.is_deleted) {
                        return <HallBlock hall={hall} key={hall.id}/>
                }
                })}
            </div>
        </Fragment>
    }
}

export default HallList;