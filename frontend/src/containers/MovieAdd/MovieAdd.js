import React, {Fragment, Component} from 'react'
import MovieForm from "../../componenets/Content/Movie/MovieForm/MovieForm";
import {connect} from 'react-redux';
import {MOVIE_ADD_SUCCESS, movieAddAction} from "../../store/actions/movie-add";



class MovieAdd extends Component {
    formSubmitted = (movie) => {
        const {auth} = this.props;
        return this.props.movieAddAction(movie, auth.token)
            .then(result => {
                if(result.type === MOVIE_ADD_SUCCESS) {
                   this.props.history.push('/movies/' + result.movie.id);
                }
        })
    };


    render() {
        const {errors} = this.props.movieAdd;
        return <Fragment>
            <MovieForm onSubmit={this.formSubmitted} errors={errors}/>
        </Fragment>
    }
}

const mapStateToProps = state => {
    return {
        movieAdd: state.movieAdd,
        auth: state.auth
    }
};
const mapDispatchToProps = dispatch => ({
    movieAddAction: (movie, authToken) => dispatch(movieAddAction(movie, authToken))
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieAdd);