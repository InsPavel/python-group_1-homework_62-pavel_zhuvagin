import React, {Fragment, Component} from 'react'
import HallForm from "../../componenets/Content/Hall/HallForm/HallForm";
import {connect} from 'react-redux';
import {HALL_ADD_SUCCESS, hallAddAction} from "../../store/actions/hall-add";


class HallAdd extends Component {
    formSubmitted = (hall) => {
        const {auth} = this.props;
        return this.props.hallAddAction(hall, auth.token)
            .then(result => {
                if(result.type === HALL_ADD_SUCCESS) {
                   this.props.history.push('/halls/' + result.hall.id);
                }
        })
    };

    render(){
        const {errors} = this.props.hallAdd;
        return <Fragment>
            <HallForm onSubmit={this.formSubmitted} errors={errors}/>
        </Fragment>
    }
 }

const mapStateToProps = state => {
    return {
        hallAdd: state.hallAdd,
        auth: state.auth
    }
};
const mapDispatchToProps = dispatch => ({
    hallAddAction: (hall, authToken) => dispatch(hallAddAction(hall, authToken))
});

export default connect(mapStateToProps, mapDispatchToProps)(HallAdd);