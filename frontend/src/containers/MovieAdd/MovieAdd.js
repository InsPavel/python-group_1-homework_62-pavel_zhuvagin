import React, {Fragment, Component} from 'react'
import axios from "axios";
import {MOVIES_URL} from "../../api-urls";
import MovieForm from "../../componenets/Content/Movie/MovieForm/MovieForm";

class MovieAdd extends Component {
    state = {
        alert: null,
        errors: {}
    };

    showErrorAlert = (error) => {
        this.setState(prevState => {
            let newState = {...prevState};
            newState.alert = {type: 'danger', message: `Movie was not added!`};
            return newState;
        });
    };

    showErrors = (name) => {
        if(this.state.errors && this.state.errors[name]){
            return this.state.errors[name].map((error, index) => <p
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

        return axios.post(MOVIES_URL, formData, {
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
        const alert = this.state.alert;
        return <Fragment>
            {alert ? <div className={"mb-2 alert alert-" + alert.type}>{alert.message}</div> : null}
            <MovieForm onSubmit={this.formSubmitted} showErrors={this.showErrors}/>
        </Fragment>
    }
}

export default MovieAdd;