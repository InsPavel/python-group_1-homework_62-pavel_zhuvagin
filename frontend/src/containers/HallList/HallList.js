import React, {Fragment, Component} from 'react';
import HallBlock from "../../componenets/Content/Hall/HallBlock/HallBlock";
import {loadHalls} from "../../store/actions/hall-list";
import connect from "react-redux/es/connect/connect";


class HallList extends Component {
    componentDidMount(){
        this.props.loadHalls()
    }

    render(){
        return <Fragment>
            <div className="row mt-2 text-center">
                {this.props.halls.map(hall => {
                    if(!hall.is_deleted) {
                        return <HallBlock hall={hall} key={hall.id}/>
                }
                return null;
                })}
            </div>
        </Fragment>
    }
}

const mapStateToProps = state => state.hallList;
const mapDispatchToProps = dispatch => ({
    loadHalls: () => dispatch(loadHalls())
});


export default connect(mapStateToProps, mapDispatchToProps)(HallList);
