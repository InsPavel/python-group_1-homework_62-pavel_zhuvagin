import React, {Fragment, Component} from 'react';
import HallBlock from "../../componenets/Content/Hall/HallBlock/HallBlock";
import {hallList} from "../../store/actions/hallList";
import connect from "react-redux/es/connect/connect";


class HallList extends Component {
    componentDidMount(){
        this.props.hallList()
    }

    render(){
        return <Fragment>
            <div className="row mt-2 text-center">
                {this.props.hall.map(hall => {
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
    hallList: () => dispatch(hallList())
});


export default connect(mapStateToProps, mapDispatchToProps)(HallList);
