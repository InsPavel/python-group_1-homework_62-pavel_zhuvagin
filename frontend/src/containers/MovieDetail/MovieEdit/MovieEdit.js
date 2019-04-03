import React, {Component, Fragment} from 'react'
import MovieForm from "../../../componenets/Content/Movie/MovieForm/MovieForm";
import {loadMovie, saveMovie, MOVIE_EDIT_SUCCESS} from "../../../store/actions/movie-edit";
import connect from "react-redux/es/connect/connect";


class MovieEdit extends Component {
    componentDidMount() {
        this.props.loadMovie(this.props.match.params.id)
    }

    formSubmitted = (movie) => {
        const {auth} = this.props;
        return this.props.saveMovie(movie, auth.token)
            .then(result => {
                if(result.type === MOVIE_EDIT_SUCCESS){
                    this.props.history.push('/movies/' + result.movie.id)
                }
            })
    };

    render() {
        const {movie, errors} = this.props.movieEdit;
        return <Fragment>
            {movie ? <MovieForm onSubmit={this.formSubmitted} errors={errors} movie={movie}/> : null}
        </Fragment>
    }
}

const mapStateToProps = state => {
    return {
        movieEdit: state.movieEdit,
        auth: state.auth
    }
};
const mapDispatchToProps = dispatch => {
    return {
        loadMovie: (id) => dispatch(loadMovie(id)),
        saveMovie: (movie, token) => dispatch(saveMovie(movie, token))
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(MovieEdit);