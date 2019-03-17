import React, {Fragment, Component} from 'react'
import {MOVIES_URL} from "../../api-urls";
import MovieCard from "../../componenets/Content/Movie/MovieCard/MovieCard";


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
            <div className='row'>
            {this.state.movies.map(movie => {
                if(!movie.is_deleted) {
                    return <div className='col col-3' key={movie.id}>
                        <MovieCard movie={movie} key={movie.id}/>
                    </div>
                }
                return null;
            })}
            </div>
        </Fragment>
    }
}

export default MovieList;