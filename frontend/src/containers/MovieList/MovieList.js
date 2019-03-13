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
            <div className='row'>
            {this.state.movies.map(movie => {
                if(!movie.is_deleted) {
                    return <div className='col col-3'>
                        <MovieCard movie={movie} key={movie.id}/>
                    </div>
                }
            })}
            </div>
        </Fragment>
    }
}

export default MovieList;