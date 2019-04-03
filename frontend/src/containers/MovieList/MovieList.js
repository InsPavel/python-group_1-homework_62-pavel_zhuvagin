import React, {Fragment, Component} from 'react'
import MovieCard from "../../componenets/Content/Movie/MovieCard/MovieCard";
import {connect} from 'react-redux';
import {loadMovies} from "../../store/actions/movie-list";


class MovieList extends  Component {
    componentDidMount(){
        this.props.loadMovies()
    }

    render() {
        console.log(this.props.movies)
        return <Fragment>
            <div className='row'>
            {this.props.movies.map(movie => {
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


const mapStateToProps = (state) => state.movieList;
const mapDispatchToProps = dispatch => ({
    loadMovies: () => dispatch(loadMovies())
});


export default connect(mapStateToProps, mapDispatchToProps)(MovieList);