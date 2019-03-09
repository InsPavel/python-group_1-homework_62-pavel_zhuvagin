import React, {Fragment, Component} from 'react'
import {MOVIES_URL} from "../../api-urls";
import { NavLink } from 'react-router-dom';
import MovieCard from "../../componenets/MovieCard/MovieCard";


class MovieList extends  Component {
    state = {
       movies: [],
    };

    componentDidMount(){
        fetch(MOVIES_URL)
            .then(response => response.json())
            .then(json => {return json})
            .then(movies => this.setState({movies}))
            .catch(error => console.log(error))
    }

    render() {
        return <Fragment>
            <p><NavLink to={'/movies/add'}>Добавить фильм</NavLink></p>
            {this.state.movies.map(movie => {
                return <MovieCard movie={movie} key={movie.id}/>
            })}
        </Fragment>
    }
}

export default MovieList;