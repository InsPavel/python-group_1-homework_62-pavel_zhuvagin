import React, {Fragment, Component} from 'react'
import axios from 'axios';
import {SHOWS_URL} from "../../../../api-urls";
import Show from "../../Movie/MovieShow/Show/Show";


class HallShow extends Component{
    state = {
        shows: [],
    };

    componentDidMount(){
        let current_date = new Date();
        let next_date = new Date();
        next_date.setDate(next_date.getDate() + 3);
        current_date = current_date.toISOString().slice(0, 10);
        next_date = next_date.toISOString().slice(0, 10);

        axios.get(SHOWS_URL + '?hall_id=' + this.props.id + '&start_of_show=' + current_date + '&finish_of_show=' + next_date)
            .then(response => {
                return response.data;
            })
            .then(shows =>{
                this.setState({shows})
            })
            .catch(error => console.log(error));
    }

    render(){
        return <Fragment>
            <h5>Репертуар сеансов на три дня:</h5>
            {this.state.shows.length > 0 ? <span>
                {this.state.shows.map((show) => {
                    return <Show
                        show={show}
                        key={show.id}
                    />
                })}
            </span> : <p>В данном зале на ближайшие три дня сеансов нет</p>
            }
        </Fragment>
    }
}

export default HallShow;