import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import ModalExample from "../../componenets/UI/Modal/Modal";


class UserSettings extends Component {
    state = {
        edit: false,
        alert: null
    };

    render(){
        const {username, email, first_name, last_name} = this.props.auth;
        return <Fragment>
            <h2>Личный кабинет</h2>
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
            <ModalExample buttonLabel='Редактировать'/>
        </Fragment>
    }
}


const mapStateToProps = state => ({auth: state.auth});
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(UserSettings);