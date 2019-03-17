import React, {Fragment, Component} from 'react';
import axios from 'axios';
import {HALLS_URL} from "../../api-urls";
import HallBlock from "../../componenets/Content/Hall/HallBlock/HallBlock";


class HallList extends Component {
    state ={
        hall: []
    };

    componentDidMount(){
        axios.get(HALLS_URL)
            .then(response => {
                console.log(response.data);
                return response.data
            })
            .then(hall => this.setState({hall}))
            .catch(error => console.log(error))
    }

    render(){
        return <Fragment>
            <div className="row mt-2 text-center">
                {this.state.hall.map(hall => {
                    if(!hall.is_deleted) {
                        return <HallBlock hall={hall} key={hall.id}/>
                }
                return null;
                })}
            </div>
        </Fragment>
    }
}

export default HallList;