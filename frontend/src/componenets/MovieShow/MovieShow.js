import React, {Fragment, Component} from 'react'
import axios from 'axios';
import {SHOWS_URL} from "../../api-urls";


class MovieShow extends Component{
    state = {
        shows: [],
        show: [],
    };

    componentDidMount(){
        axios.get(SHOWS_URL)
            .then(response => {
                console.log(response.data);
                return response.data;
            })
            .then(shows =>
                this.setState({shows}))
            .then(show => {
                return this.state.shows.map(movie => {
                    if (movie.movie.id === this.props.id) {
                        if (this.state.show.length < 3) {
                            this.setState((prevState => {
                                let newState = {...prevState};
                                newState.show.push(movie);
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
        return <Fragment>
            {this.state.show.map((movie) => (
                <p key={movie.id}>
                    Зал: {movie.hall.name}.
                    Дата: {this.formatDate(movie.start_of_show)}.
                    Время сеанса: {this.formatTime(movie.start_of_show)} - {this.formatTime(movie.finish_of_show)}.
                    Стоимость билета: {movie.price} сом
                </p>
            ))}
        </Fragment>
    }
}

export default MovieShow;