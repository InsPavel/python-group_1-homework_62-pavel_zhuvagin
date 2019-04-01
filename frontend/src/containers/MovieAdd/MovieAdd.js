import React, {Fragment, Component} from 'react'
import MovieForm from "../../componenets/Content/Movie/MovieForm/MovieForm";
import {connect} from 'react-redux';
import {movieAddAction} from "../../store/actions/movieAdd";



class MovieAdd extends Component {
    showErrors = (name) => {
        if(this.props.movieAdd.errors && this.props.movieAdd.errors[name]){
            return this.props.movieAdd.errors[name].map((error, index) => <p
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
        const token = this.props.auth.token;
        const headers = {
            'Content-Type': 'multipart/form-data',
            'Authorization': 'Token ' + token
        };
        this.props.movieAddAction(formData, headers).then((response) => {
            console.log(response)
        })
    };


    render() {
        return <Fragment>
            <MovieForm onSubmit={this.formSubmitted} showErrors={this.showErrors}/>
        </Fragment>
    }
}

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
    movieAddAction: (formData, headers) => dispatch(movieAddAction(formData, headers))
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieAdd);