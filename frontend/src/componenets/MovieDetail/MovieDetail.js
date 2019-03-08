import React, {Fragment, Component} from 'react'
import {MOVIES_URL} from "../../api-urls";
import MovieCard from "../MovieCard/MovieCard";

class MovieDetail extends Component {
    state = {
        movie: null
    };

    componentDidMount() {
        const match = this.props.match;

        fetch(MOVIES_URL + match.params.id)
            .then(response => response.json())
            .then(json => {console.log(json);return json })
            .then(movie => this.setState({movie}))
            .catch(error => console.log(error))
    }

    render() {
        return <Fragment>
            {this.state.movie ? <MovieCard movie={this.state.movie}/> : null}
        </Fragment>
    }
}

export default MovieDetail;
