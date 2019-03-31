import React, {Fragment, Component} from 'react'
import MovieCard from "../../componenets/Content/Movie/MovieCard/MovieCard";
import {connect} from 'react-redux';
import {movieList} from "../../store/actions/movieList";


class MovieList extends  Component {
    componentDidMount(){
        this.props.movieList()
    }

    render() {
        return <Fragment>
            <div className='row'>
            {this.props.movie.map(movie => {
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


const mapStateToProps = state => state.movieList;
const mapDispatchToProps = dispatch => ({
    movieList: () => dispatch(movieList())
});


export default connect(mapStateToProps, mapDispatchToProps)(MovieList);