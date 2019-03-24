import React, {Component, Fragment} from 'react';
import axios from "axios";
import {USER_URL} from "../../api-urls";
// import { Button } from 'reactstrap';


class UserUpdate extends Component {
    state = {
        user: {},
        errors: {}
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

     passwordsMatch = () => {
        const {password, passwordConfirm} = this.state.user;
        return password === passwordConfirm
    };

    formSubmitted = (event) => {
        const user_id = localStorage.getItem('user_id');
        event.preventDefault();
        if (this.passwordsMatch()) {
            const {passwordConfirm, ...restData} = this.state.user;
            return axios.put(USER_URL + user_id + '/', restData, {
                headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + localStorage.getItem('auth-token')
            }
            }).then(response => {
                const hall = response.data;
                console.log(hall);
                this.props.history.replace('/cabinet/');
            }).catch(error => {
                console.log(error);
                console.log(error.response);
                this.setState({
                    ...this.state,
                    errors: error.response.data
                })
            });
        }
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
        const {password, passwordConfirm, email, first_name, last_name} = this.state.user;
        return <Fragment>
            <h2>Редактировать данные</h2>
            <form onSubmit={this.formSubmitted}>
                {this.showErrors('non_field_errors')}
                <div className="form-row">
                    <label className="font-weight-bold">Имя</label>
                    <input type="text" className="form-control" name="first_name" defaultValue={first_name}
                           onChange={this.inputChanged}/>
                    {this.showErrors('first_name')}
                </div>
                <div className="form-row">
                    <label className="font-weight-bold">Фамилия</label>
                    <input type="text" className="form-control" name="last_name" defaultValue={last_name}
                           onChange={this.inputChanged}/>
                    {this.showErrors('last_name')}
                </div>
                <div className="form-row">
                    <label className="font-weight-bold">Пароль</label>
                    <input type="password" className="form-control" name="password" defaultValue={password}
                           onChange={this.inputChanged}/>
                    {this.showErrors('password')}
                </div>
                <div className="form-row">
                    <label className="font-weight-bold">Подтверждение пароля</label>
                    <input type="password" className="form-control" name="passwordConfirm" defaultValue={passwordConfirm}
                           onChange={this.passwordConfrimChange}/>
                    {this.showErrors('passwordConfirm')}
                </div>
                <div className="form-row">
                    <label className="font-weight-bold">E-mail</label>
                    <input type="email" className="form-control" name="email" defaultValue={email}
                           onChange={this.inputChanged}/>
                    {this.showErrors('email')}
                </div>
                <button type="submit" className="btn btn-primary mt-2">Редактировать</button>
            </form>
        </Fragment>
    }
}


export default UserUpdate;
