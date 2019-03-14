import React, {Component} from 'react';
import axios from "axios";
import {HALLS_URL} from "../../api-urls";

class HallDeleteButton extends Component {
    deleteMovie = () => {
        axios.delete(HALLS_URL + this.props.id + '/', { data: { foo: "bar" } })
            .then(hall => window.history.back())
    };

    render(){
        return <div onClick={this.deleteMovie}>Delete</div>
    }
}

export default HallDeleteButton;