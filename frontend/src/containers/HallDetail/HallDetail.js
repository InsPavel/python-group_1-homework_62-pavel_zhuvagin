import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import HallDeleteButton from "../../componenets/Content/Hall/HallDeleteButton/HallDeleteButton";
import HallShow from "../../componenets/Content/Hall/HallShow/HallShow";
import {getHallDetail} from "../../store/actions/hallDetail";
import connect from "react-redux/es/connect/connect";

class HallDetail extends Component {
    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.getHallDetail(id)
        .then(response => {
            const hall = response.data;
            this.setState(prevState => {
                const newState = {...prevState};
                newState.hall = hall;
                return newState;
            })
        })
    }

    render(){
        const match = this.props.match;
        return  <div>
            <h3>Зал: {this.props.hall.name}</h3>
                <HallShow id={match.params.id}/>
                <NavLink to={'/halls/' + match.params.id + '/edit'} className='btn btn-primary mr-2'>Edit</NavLink>
                <span  className="btn btn-primary mr-2"><HallDeleteButton id={match.params.id}/></span>
            </div>
    }
}

const mapStateToProps = state => state.hallDetail;
const mapDispatchToProps = dispatch => ({
    getHallDetail: (id) => dispatch(getHallDetail(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HallDetail);

