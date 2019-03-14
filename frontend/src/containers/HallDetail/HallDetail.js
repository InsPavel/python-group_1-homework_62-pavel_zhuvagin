import React, {Component} from 'react';
import {SHOWS_URL} from "../../api-urls";
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import HallDeleteButton from "../../componenets/HallDeleteButton/HallDeleteButton";

class HallDetail extends Component {
    state = {
        shows: [],
        show: []
    };

    componentDidMount() {
        const match = this.props.match;
        axios.get(SHOWS_URL)
            .then(response => {
                console.log(response.data);
                return response.data;
            })
            .then(shows =>
                this.setState({shows}))
            .then(show => {
                return this.state.shows.map(hall => {
                    if (hall.hall.id === +match.params.id) {
                        if (this.state.show.length < 3) {
                            this.setState((prevState => {
                                let newState = {...prevState};
                                newState.show.push(hall);
                                return newState;
                            }))
                        }
                    }
                    return []
                })
            })
            .catch(error => console.log(error));
    }

    formatDate = (date) => {
        return new Date(date).toISOString().substring(0, 10)
    };

    formatTime = (time) => {
        return new Date(time).toISOString().substring(11, 19)
    };

    render(){
        const match = this.props.match;
        return  <div>
            <h3>Сеансы на три дня:</h3>
            {this.state.show.map(show => (
                <p key={show.id}>
                    Фильм: {show.movie.name}
                    Дата: {this.formatDate(show.start_of_show)}.
                    Время сеанса: {this.formatTime(show.start_of_show)} - {this.formatTime(show.finish_of_show)}.
                    Стоимость билета: {show.price} сом
                </p>
            ))}
            <NavLink to={'/halls/' + match.params.id + '/edit'} className='btn btn-primary mr-2'>Edit</NavLink>
            <span  className="btn btn-primary mr-2"><HallDeleteButton id={match.params.id}/></span>
            <NavLink to={'/'} className='btn btn-primary'>Movies</NavLink>
        </div>
    }
}

export default HallDetail;