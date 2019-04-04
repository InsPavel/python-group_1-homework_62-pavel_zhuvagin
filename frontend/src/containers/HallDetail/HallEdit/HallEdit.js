import React, {Component, Fragment} from 'react'
import HallForm from "../../../componenets/Content/Hall/HallForm/HallForm";
import connect from "react-redux/es/connect/connect";
import {loadHall, saveHall, HALL_EDIT_SUCCESS} from "../../../store/actions/hall-edit";

class HallEdit extends Component{
    componentDidMount() {
        this.props.loadHall(this.props.match.params.id)
    }

    formSubmitted = (hall) => {
        const {auth} = this.props;
        return this.props.saveHall(hall, auth.token)
            .then(result => {
                if(result.type === HALL_EDIT_SUCCESS){
                    this.props.history.push('/halls/' + result.hall.id)
                }
            })
    };

    render(){
        const {hall, errors} = this.props.hallEdit;
        return <Fragment>
            {hall ? <HallForm onSubmit={this.formSubmitted} errors={errors} hall={hall}/> : null}
        </Fragment>
    }
}

const mapStateToProps = state => {
    return {
        hallEdit: state.hallEdit,
        auth: state.auth
    }
};
const mapDispatchToProps = dispatch => {
    return {
        loadHall: (id) => dispatch(loadHall(id)),
        saveHall: (movie, token) => dispatch(saveHall(movie, token))
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(HallEdit);