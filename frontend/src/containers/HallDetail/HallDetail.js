import React, {Component} from 'react';
import {HALLS_URL, SHOWS_URL} from "../../api-urls";
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import HallDeleteButton from "../../componenets/HallDeleteButton/HallDeleteButton";

class HallDetail extends Component {
    state = {
        shows: [],
        show: [],
        hall: []
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

        axios.get(HALLS_URL + match.params.id)
            .then(response => {
                console.log(response.data);
                return response.data
            })
            .then(hall => {
                this.setState((prevState => {
                    let newState = {...prevState};
                    newState.hall = hall;
                    return newState;
                }))
            })
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
            <h3>Зал: {this.state.hall.name}</h3>
            <h5>Репертуар сеансов на три дня:</h5>
            {this.state.show.length > 0 ? <span>
                {this.state.show.map(show => (
                    <p key={show.id}>
                        Фильм: {show.movie.name}.
                        Дата: {this.formatDate(show.start_of_show)}.
                        Время сеанса: {this.formatTime(show.start_of_show)} - {this.formatTime(show.finish_of_show)}.
                        Стоимость билета: {show.price} сом
                    </p>
                ))}
                <NavLink to={'/halls/' + match.params.id + '/edit'} className='btn btn-primary mr-2'>Edit</NavLink>
                </span> : <p>На данный момент сеансов в этом зале нет</p>
            }
                <span  className="btn btn-primary mr-2"><HallDeleteButton id={match.params.id}/></span>
                <NavLink to={'/'} className='btn btn-primary mr-2'>Movies</NavLink>
                <NavLink to={'/halls/'} className='btn btn-primary'>Halls</NavLink>
            </div>
    }
}

export default HallDetail;