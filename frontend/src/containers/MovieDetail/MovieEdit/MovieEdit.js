import React, {Component, Fragment} from 'react'
import MovieForm from "../../../componenets/Content/Movie/MovieForm/MovieForm";
import {movieEditAction, getMovie} from "../../../store/actions/movieEdit";
import connect from "react-redux/es/connect/connect";


class MovieEdit extends Component {
    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.getMovie(id)
        .then(response => {
            const movie = response.data;
            this.setState(prevState => {
                const newState = {...prevState};
                newState.movie = movie;
                newState.movie.categories = movie.categories.map(category => category.id);
                return newState;
            });
        })
    }

    showErrors = (name) => {
        if(this.props.movieEdit.errors && this.props.movieEdit.errors[name]){
            return this.props.movieEdit.errors[name].map((error, index) => <p
                className="text-danger" key={index}>{error}</p>)
        }
        return null;
    };

    gatherFormData = (movie) => {
        let formData = new FormData();
        Object.keys(movie).forEach(key => {
            const value = movie[key];
            if (value) {
                if(Array.isArray(value)) {
                    value.forEach(item => formData.append(key, item));
                } else {
                    formData.append(key, value);
                }
            }
        });
        return formData;
    };

    formSubmitted = (movie) => {
        const formData = this.gatherFormData(movie);
        const id = this.props.match.params.id;
        const token = this.props.auth.token;
        const headers = {
            'Content-Type': 'multipart/form-data',
            'Authorization': 'Token ' + token
        };

        this.props.movieEditAction(formData, headers, id).then((response) => {
            console.log(response)
            this.props.history.replace('/movies/' + id);
        })
    };

    render() {
        const {movie} = this.props.movieEdit;
        return <Fragment>
            {movie ? <MovieForm onSubmit={this.formSubmitted} showErrors={this.showErrors} movie={movie}/> : null}
        </Fragment>
    }
}

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
    getMovie: (id) => dispatch(getMovie(id)),
    movieEditAction: (formData, headers, id) => dispatch(movieEditAction(formData, headers, id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieEdit);