import React, {Component} from 'react'
import {NavLink} from "react-router-dom";
import MovieCategories from "../../componenets/Content/Movie/MovieCategories/MovieCategories";
import MovieShow from "../../componenets/Content/Movie/MovieShow/MovieShow";
import MovieDeleteButton from "../../componenets/Content/Movie/MovieDeleteButton/MovieDeleteButton";
import {getMovieDetail} from "../../store/actions/movieDetail";
import connect from "react-redux/es/connect/connect";


class MovieDetail extends Component {
    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.getMovieDetail(id)
        .then(response => {
            const movie = response.data;
            this.setState(prevState => {
                const newState = {...prevState};
                newState.movie = movie;
                return newState;
            })
        })
    }

    render() {
        if (!this.props.movie) return null;

        const {name, poster, description, release_date, finish_date, categories, id} = this.props.movie;
        return <div>
            {poster ? <div className='text-center'>
                <img className="img-fluid rounded" src={poster} alt='poster'/>
            </div> : null}
            <h1>{name}</h1>
            {categories.length > 0 ? <MovieCategories categories={categories}/> : null}
            <p className="text-secondary">В прокате c: {release_date} до: {finish_date ? finish_date : "Неизвестно"}</p>
            {description ? <p>{description}</p> : null}
            <MovieShow id={id}/>
            <NavLink to={'/movies/' + id + '/edit'} className="btn btn-primary mr-2">Edit</NavLink>
            <span  className="btn btn-primary mr-2"><MovieDeleteButton id={id}/></span>
        </div>;
    }
}

const mapStateToProps = state => state.movieDetail;
const mapDispatchToProps = dispatch => ({
    getMovieDetail: (id) => dispatch(getMovieDetail(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);
