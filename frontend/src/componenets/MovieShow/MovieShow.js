import React, {Fragment, Component} from 'react'
import axios from 'axios';
import {SHOWS_URL} from "../../api-urls";
import Show from "./Show/Show";


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
                console.log(this.state.shows)
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
            {this.state.shows.map((show) => {
                return <Show
                    show={show}
                    key={show.id}
                    date={this.formatDate}
                    time={this.formatTime}
                />
            })}
        </Fragment>
    }
}

export default MovieShow;