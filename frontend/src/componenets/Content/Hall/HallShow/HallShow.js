import React, {Fragment, Component} from 'react'
import Show from "../../../UI/Show/Show";
import {loadShowHall} from "../../../../store/actions/hall-show";
import connect from "react-redux/es/connect/connect";


class HallShow extends Component{
    componentDidMount(){
        let current_date = new Date();
        let next_date = new Date();
        next_date.setDate(next_date.getDate() + 3);
        current_date = current_date.toISOString().slice(0, 10);
        next_date = next_date.toISOString().slice(0, 10);
        const id = this.props.hallId;
        this.props.loadShowHall(id, current_date, next_date)
    }

    render(){
        return <Fragment>
            <h5>Репертуар сеансов на три дня:</h5>
            {this.props.shows.length > 0 ? <span>
                {this.props.shows.map((show) => {
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

const mapStateToProps = state => state.hallShow;
const mapDispatchToProps = dispatch => ({
    loadShowHall: (id, current_date, next_date) => dispatch(loadShowHall(id, current_date, next_date))
});


export default connect(mapStateToProps, mapDispatchToProps)(HallShow);