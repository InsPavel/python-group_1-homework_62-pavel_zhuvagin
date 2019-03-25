import React, {Component, Fragment} from 'react';
import axios from "axios";
import {USER_URL} from "../../api-urls";
import ModalExample from "../../componenets/UI/Modal/Modal";

class Cabinet extends Component {
    state = {
        user: {},
    };


    componentDidMount(){
        const user_id = localStorage.getItem('user_id');
        return axios.get(USER_URL + user_id)
            .then(response => {
            console.log(response.data);
            const user = response.data;
            this.setState(prevState => {
                const newState = {...prevState};
                newState.user = user;
                return newState;
            });
        })
    }

    render(){
        const {username, email, first_name, last_name} = this.state.user;
        return <Fragment>
            <table className="table table-bordered mt-5">
                <thead>
                <tr>
                    <th scope="col">Username</th>
                    <th scope="col">First_name</th>
                    <th scope="col">Last_name</th>
                    <th scope="col">E-mail</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">{username}</th>
                    <td>{first_name}</td>
                    <td>{last_name}</td>
                    <td>{email}</td>
                </tr>
                </tbody>
            </table>
            <ModalExample state={this.state.user} buttonLabel='Редактировать'/>
        </Fragment>
    }
}

export default Cabinet;