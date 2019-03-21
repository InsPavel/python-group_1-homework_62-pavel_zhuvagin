import React, {Component, Fragment} from 'react'
import axios from "axios";
import {HALLS_URL} from "../../../api-urls";
import HallForm from "../../../componenets/Content/Hall/HallForm/HallForm";

class HallEdit extends Component{
    state = {
        hall: null,
        alert: null,
        errors: {}
    };

    componentDidMount() {
        axios.get(HALLS_URL + this.props.match.params.id)
            .then(response => {
                const hall = response.data;
                console.log(hall);
                this.setState(prevState => {
                    const newState = {...prevState};
                    newState.hall = hall;
                    return newState;
                });
            })
            .catch(error => {
                console.log(error);
                console.log(error.response);
            });
    }

    showErrorAlert = (error) => {
        this.setState(prevState => {
            let newState = {...prevState};
            newState.alert = {type: 'danger', message: `Hall was not edit!`};
            return newState;
        });
    };

    formSubmitted = (data) => {
        return axios.put(HALLS_URL + this.props.match.params.id + '/', data, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + localStorage.getItem('auth-token')
            }
        })
            .then(response => {
                const hall = response.data;
                console.log(hall);
                this.props.history.replace('/halls/' + hall.id);
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

    showErrors = (name) => {
        if(this.state.errors && this.state.errors[name]){
            return this.state.errors[name].map((error, index) => <p
                className="text-danger" key={index}>{error}</p>)
        }
        return null;
    };

    render(){
        const {alert, hall} = this.state;
        return <Fragment>
            {alert ? <div className={"mb-2 alert alert-" + alert.type}>{alert.message}</div> : null}
            {hall ? <HallForm onSubmit={this.formSubmitted} showErrors={this.showErrors} hall={hall}/> : null}
        </Fragment>
    }
}

export default HallEdit;