import React, {Component, Fragment} from 'react';
import axios from "axios";
import {USER_URL} from "../../api-urls";
import {Button} from "reactstrap";
import {connect} from 'react-redux';


class UserUpdateForm extends Component {
    constructor(props) {
        super(props);
        const {first_name, last_name, email} = this.props.auth;
        this.state = {
            user: {
                first_name, last_name, email,
                password: '',
                new_password: '',
                new_password_confirm: '',
            },
            errors: {}
        };
    }

     passwordsMatch = () => {
        const {new_password, new_password_confirm} = this.state.user;
        return new_password === new_password_confirm
    };

    formSubmitted = (event) => {
        const {token, user_id} = this.props.auth;
        event.preventDefault();
        if (this.passwordsMatch()) {
            return axios.put(USER_URL + user_id + '/', this.state.user, {
                headers: {
                'Authorization': 'Token ' + token
            }
            }).then(response => {
                console.log(response);
                window.location.reload();
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
        const new_password_confirm = event.target.value;
        if(new_password_confirm !== this.state.user.new_password){
            this.setState({
                errors : {
                    ...this.state.errors,
                    new_password_confirm: ['Пароли не совпадают']
                }
            })
        } else {
            this.setState({
                errors : {
                    ...this.state.errors,
                    new_password_confirm: []
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
        const {email, first_name, last_name, password, new_password, new_password_confirm} = this.state.user;
        return <Fragment>
            <form onSubmit={this.formSubmitted}>
                {this.showErrors('non_field_errors')}
                <div className="form-row">
                    <label className="font-weight-bold">Имя</label>
                    <input type="text" className="form-control" name="first_name" value={first_name}
                           onChange={this.inputChanged}/>
                    {this.showErrors('first_name')}
                </div>
                <div className="form-row">
                    <label className="font-weight-bold">Фамилия</label>
                    <input type="text" className="form-control" name="last_name" value={last_name}
                           onChange={this.inputChanged}/>
                    {this.showErrors('last_name')}
                </div>
                <div className="form-row">
                    <label className="font-weight-bold">E-mail</label>
                    <input type="email" className="form-control" name="email" value={email}
                           onChange={this.inputChanged}/>
                    {this.showErrors('email')}
                </div>
                <div className="form-row">
                    <label className="font-weight-bold">Старый пароль</label>
                    <input type="password" className="form-control" name="password" value={password}
                           onChange={this.inputChanged}/>
                    <div className="help-block">Введите пароль, чтобы подтвердить изменения.</div>
                    {this.showErrors('password')}
                </div>
                <div className="form-row">
                    <label className="font-weight-bold">Новый пароль</label>
                    <input type="password" className="form-control" name="new_password" value={new_password}
                           onChange={this.inputChanged}/>
                    {this.showErrors('new_password')}
                </div>
                <div className="form-row">
                    <label>Подтверждение пароля</label>
                    <input type="password" className="form-control" name="new_password_confirm" value={new_password_confirm}
                        onChange={this.passwordConfrimChange}
                    />
                    {this.showErrors('new_password_confirm')}
                </div>
                <div className='float-right mt-5 '>
                    <button type="submit" className="btn btn-primary mr-2" onClick={this.props.onClick}>Update</button>
                    <Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
                </div>
            </form>
        </Fragment>
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
});
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps,mapDispatchToProps)(UserUpdateForm);
