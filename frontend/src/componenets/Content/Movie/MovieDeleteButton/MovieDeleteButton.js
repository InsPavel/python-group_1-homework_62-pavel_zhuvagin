import React, {Component} from 'react';
import axios from "axios";
import {MOVIES_URL} from "../../../../api-urls";

class MovieDeleteButton extends Component {
    deleteMovie = () => {
        axios.delete(MOVIES_URL + this.props.id + '/', { data: { foo: "bar" } })
            .then(movie => window.history.back())
    };

    render(){
        return <div onClick={this.deleteMovie}>Delete</div>
    }
}

export default MovieDeleteButton;