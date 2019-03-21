import React, {Component, Fragment} from 'react'
import axios from "axios";
import {MOVIES_URL} from "../../../api-urls";
import MovieForm from "../../../componenets/Content/Movie/MovieForm/MovieForm";


class MovieEdit extends Component {
    state = {
        movie: null,
        alert: null,
        errors: {}
    };

    componentDidMount() {
        axios.get(MOVIES_URL + this.props.match.params.id)
            .then(response => {
                const movie = response.data;
                console.log(movie);
                this.setState(prevState => {
                    const newState = {...prevState};
                    newState.movie = movie;
                    newState.movie.categories = movie.categories.map(category => category.id);
                    return newState;
                });
            })
            .catch(error => {
                console.log(error);
                console.log(error.response);
            });
    }

    showErrors = (name) => {
        if(this.state.errors && this.state.errors[name]){
            return this.state.errors[name].map((error, index) => <p
                className="text-danger" key={index}>{error}</p>)
        }
        return null;
    };

    showErrorAlert = (error) => {
        this.setState(prevState => {
            let newState = {...prevState};
            newState.alert = {type: 'danger', message: `Movie was not added!`};
            return newState;
        });
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

        return axios.put(MOVIES_URL + this.props.match.params.id + '/', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': 'Token ' + localStorage.getItem('auth-token')
            }
        })
            .then(response => {
                const movie = response.data;
                console.log(movie);
                this.props.history.replace('/movies/' + movie.id);
            })
            .catch(error => {
                console.log(error);
                console.log(error.response);
                this.showErrorAlert(error.response);
                this.setState({
                ...this.state,
                errors: error.response.data
            })
            });
    };

    render() {
        const {alert, movie} = this.state;
        return <Fragment>
            {alert ? <div className={"mb-2 alert alert-" + alert.type}>{alert.message}</div> : null}
            {movie ? <MovieForm onSubmit={this.formSubmitted} showErrors={this.showErrors} movie={movie}/> : null}
        </Fragment>
    }
}


export default MovieEdit;