import React, {Component} from 'react';
import axios from "axios";
import {MOVIES_URL} from "../../../../api-urls";
import connect from "react-redux/es/connect/connect";


class MovieDeleteButton extends Component {
    deleteMovie = () => {
        const token = this.props.token;
        axios.delete(MOVIES_URL + this.props.id + '/', {
            data: { foo: "bar" },
            headers: { 'Authorization': 'Token ' + token}
            })
            .then(movie => window.history.back())
    };

    render(){
        return <div onClick={this.deleteMovie}>Delete</div>
    }
}
const mapStateToProps = state => state.auth;
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(MovieDeleteButton);

