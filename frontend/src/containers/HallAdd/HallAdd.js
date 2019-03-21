import React, {Fragment, Component} from 'react'
import axios from "axios";
import {HALLS_URL} from "../../api-urls";
import HallForm from "../../componenets/Content/Hall/HallForm/HallForm";

class HallAdd extends Component {
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

    formSubmitted = (data) => {
        console.log(this.state);
        return axios.post(HALLS_URL, data, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + localStorage.getItem('auth-token')
            }
        })
            .then(response => {
                const hall = response.data;
                console.log(hall);
                this.props.history.replace('/halls/');
            })
            .catch(error => {
                console.log(error);
                this.showErrorAlert(error.response);
                this.setState({
                    ...this.state,
                    errors: error.response.data
                })
            });
    };

    render(){
        const alert = this.state.alert;
        return <Fragment>
            {alert ? <div className={"mb-2 alert alert-" + alert.type}>{alert.message}</div> : null}
            <HallForm onSubmit={this.formSubmitted} showErrors={this.showErrors}/>
        </Fragment>
    }
 }

export default HallAdd;