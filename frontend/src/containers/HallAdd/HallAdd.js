import React, {Fragment, Component} from 'react'
import axios from "axios";
import {HALLS_URL} from "../../api-urls";
import HallForm from "../../componenets/Content/Hall/HallForm/HallForm";

class HallAdd extends Component {
    state = {
        alert: null,
    };

    showErrorAlert = (error) => {
        this.setState(prevState => {
            let newState = {...prevState};
            newState.alert = {type: 'danger', message: `Movie was not added!`};
            return newState;
        });
    };

    formSubmitted = (data) => {
        console.log(this.state);
        const headers = new Headers({
            'Content-Type': 'application/json',
        });

        return axios.post(HALLS_URL, data, {
            headers: headers
        })
            .then(response => {
                const hall = response.data;
                console.log(hall);
                this.props.history.replace('/halls/');
            })
            .catch(error => {
                console.log(error);
                this.showErrorAlert(error.response);
            });
    };

    render(){
        const alert = this.state.alert;
        return <Fragment>
            {alert ? <div className={"mb-2 alert alert-" + alert.type}>{alert.message}</div> : null}
            <HallForm onSubmit={this.formSubmitted}/>
        </Fragment>
    }
 }

export default HallAdd;