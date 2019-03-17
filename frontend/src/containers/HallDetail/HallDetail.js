import React, {Component} from 'react';
import {HALLS_URL, SHOWS_URL} from "../../api-urls";
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import HallDeleteButton from "../../componenets/Content/Hall/HallDeleteButton/HallDeleteButton";
import HallShow from "../../componenets/Content/Hall/HallShow/HallShow";

class HallDetail extends Component {
    state = {
        shows: [],
        show: [],
        hall: []
    };

    componentDidMount() {
        const match = this.props.match;
        axios.get(SHOWS_URL)
            .then(response => {
                console.log(response.data);
                return response.data;
            })
            .then(shows =>
                this.setState({shows}))
            .then(show => {
                return this.state.shows.map(hall => {
                    if (hall.hall.id === +match.params.id) {
                        if (this.state.show.length < 3) {
                            this.setState((prevState => {
                                let newState = {...prevState};
                                newState.show.push(hall);
                                return newState;
                            }))
                        }
                    }
                    return []
                })
            })
            .catch(error => console.log(error));

        axios.get(HALLS_URL + match.params.id)
            .then(response => {
                console.log(response.data);
                return response.data
            })
            .then(hall => {
                this.setState((prevState => {
                    let newState = {...prevState};
                    newState.hall = hall;
                    return newState;
                }))
            })
    }

    formatDate = (date) => {
        return new Date(date).toISOString().substring(0, 10)
    };

    formatTime = (time) => {
        return new Date(time).toISOString().substring(11, 19)
    };

    render(){
        const match = this.props.match;
        return  <div>
            <h3>Зал: {this.state.hall.name}</h3>
                <HallShow id={match.params.id}/>
                <NavLink to={'/halls/' + match.params.id + '/edit'} className='btn btn-primary mr-2'>Edit</NavLink>
                <span  className="btn btn-primary mr-2"><HallDeleteButton id={match.params.id}/></span>
            </div>
    }
}

export default HallDetail;