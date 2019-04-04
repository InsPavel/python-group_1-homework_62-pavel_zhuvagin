import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import HallDeleteButton from "../../componenets/Content/Hall/HallDeleteButton/HallDeleteButton";
import HallShow from "../../componenets/Content/Hall/HallShow/HallShow";
import connect from "react-redux/es/connect/connect";
import {loadHall} from "../../store/actions/hall-detail";


class HallDetail extends Component {
     componentDidMount() {
        this.props.loadH(this.props.match.params.id)
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
    loadH: (id) => dispatch(loadHall(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HallDetail);

