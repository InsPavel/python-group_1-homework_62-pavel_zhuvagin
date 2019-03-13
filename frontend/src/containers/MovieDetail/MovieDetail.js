import React, {Component} from 'react'
import {MOVIES_URL} from "../../api-urls";
import {NavLink} from "react-router-dom";
import axios from 'axios';
import MovieCategories from "../../componenets/MovieCategories/MovieCategories";
import MovieShow from "../../componenets/MovieShow/MovieShow";
import MovieDeleteButton from "../../componenets/MovieDeleteButton/MovieDeleteButton";


class MovieDetail extends Component {
    state = {
        movie: null
    };

    componentDidMount() {
        const match = this.props.match;

        axios.get(MOVIES_URL + match.params.id)
            .then(response => {console.log(response.data); return response.data;})
            .then(movie => this.setState({movie}))
            .catch(error => console.log(error));
    }

    render() {
        if (!this.state.movie) return null;

        const {name, poster, description, release_date, finish_date, categories, id} = this.state.movie;
        return <div>
            {poster ? <div className='text-center'>
                <img className="img-fluid rounded" src={poster} alt='poster'/>
            </div> : null}
            <h1>{name}</h1>
            {categories.length > 0 ? <MovieCategories categories={categories}/> : null}
            <p className="text-secondary">В прокате c: {release_date} до: {finish_date ? finish_date : "Неизвестно"}</p>
            {description ? <p>{description}</p> : null}
            <p>Сеансы на три дня:</p>
            <MovieShow id={id}/>
            <NavLink to={'/movies/' + id + '/edit'} className="btn btn-primary mr-2">Edit</NavLink>
            <span  className="btn btn-primary mr-2"><MovieDeleteButton id={id}/></span>
            <NavLink to='' className="btn btn-primary">Movies</NavLink>
        </div>;
    }
}


export default MovieDetail;