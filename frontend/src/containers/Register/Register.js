import React, {Component, Fragment} from 'react';
import axios from "axios";
import {LOGIN_URL, REGISTER_URL} from "../../api-urls";


class Register extends Component {
    state = {
        user: {
            'username': '',
            'password': '',
            'passwordConfirm': '',
            'email': ''
        },
        errors: {}
    };

    performLogin = (username, password) => {
        axios.post(LOGIN_URL, {username, password}).then(response => {
            console.log(response);
            localStorage.setItem('auth-token', response.data.token);
            localStorage.setItem('username', response.data.username );
            localStorage.setItem('is_admin', response.data.is_admin);
            localStorage.setItem('is_staff', response.data.is_staff);
            this.props.history.replace('/');
        }).catch(error => {
                console.log(error);
                console.log(error.response);
                this.setState({
                    ...this.state,
                    errors: error.response.data
                })
            });
    };

    formSubmitted = (event) => {
        event.preventDefault();
        const {passwordConfirm, ...restData} = this.state.user;
        const {username, password} = this.state.user;
            return axios.post(REGISTER_URL, restData).then(response => {
                console.log(response);
                this.performLogin(username, password)
            }).catch(error => {
                console.log(error);
                console.log(error.response);
                this.setState({
                    ...this.state,
                    errors: error.response.data
                })
            });
    };

    inputChanged = (event) => {
        this.setState({
            ...this.state,
            user: {
                ...this.state.user,
                [event.target.name]: event.target.value
            }
        })
    };

    passwordConfrimChange = (event) => {
        this.inputChanged(event);
        const passwordConfirm = event.target.value;
        if(passwordConfirm !== this.state.user.password){
            this.setState({
                errors : {
                    ...this.state.errors,
                    passwordConfirm: ['Пароли не совпадают']
                }
            })
        } else {
            this.setState({
                errors : {
                    ...this.state.errors,
                    passwordConfirm: []
                }
            })
        }
    };

    showErrors = (name) => {
        if(this.state.errors && this.state.errors[name]) {
            return this.state.errors[name].map((error, index) => <p className="text-danger" key={index}>{error}</p>);
        }
        return null;
    };

    render() {
        const {username, password, passwordConfirm, email} = this.state.user;
        return <Fragment>
            <h2>Регистрация</h2>
            <form onSubmit={this.formSubmitted}>
                {this.showErrors('non_field_errors')}
                <div className="form-row">
                    <label className="font-weight-bold">Имя пользователя</label>
                    <input type="text" className="form-control" name="username" value={username}
                           onChange={this.inputChanged}/>
                    {this.showErrors('username')}
                </div>
                <div className="form-row">
                    <label className="font-weight-bold">Пароль</label>
                    <input type="password" className="form-control" name="password" value={password}
                           onChange={this.inputChanged}/>
                    {this.showErrors('password')}
                </div>
                <div className="form-row">
                    <label className="font-weight-bold">Подтверждение пароля</label>
                    <input type="password" className="form-control" name="passwordConfirm" value={passwordConfirm}
                           onChange={this.passwordConfrimChange}/>
                    {this.showErrors('passwordConfirm')}
                </div>
                <div className="form-row">
                    <label className="font-weight-bold">E-mail</label>
                    <input type="email" className="form-control" name="email" value={email}
                           onChange={this.passwordConfrimChange}/>
                    {this.showErrors('email')}
                </div>
                <button type="submit" className="btn btn-primary mt-2">Создать учётную запись</button>
            </form>
        </Fragment>
    }
}


export default Register;
