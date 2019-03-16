import React, {Fragment, Component} from 'react'
import axios from 'axios';
import {SHOWS_URL} from "../../api-urls";


class MovieShow extends Component{
    state = {
        shows: [],
    };

    componentDidMount(){
        let current_date = new Date();
        let next_date = new Date();
        next_date.setDate(next_date.getDate() + 3);
        current_date = current_date.toISOString().slice(0, 10);
        next_date = next_date.toISOString().slice(0, 10);

        axios.get(SHOWS_URL + '?movie_id=' + this.props.id + '&start_of_show=' + current_date + '&finish_of_show=' + next_date)
            .then(response => {
                console.log(response.data);
                return response.data;
            })
            .then(shows =>{
                this.setState({shows})
            })
            // .then(show => {
            //     return this.state.shows.map(movie => {
            //         if (movie.movie.id === this.props.id) {
            //                 this.setState((prevState => {
            //                     let newState = {...prevState};
            //                     newState.show.push(movie);
            //                     return newState;
            //                 }))
            //         }
            //         return []
            //     })
            // })
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
            {this.state.shows.map((movie) => (
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