import React, {Component} from 'react'


class Show extends Component{
    formatDate = (date) => {
        return new Date(date).toISOString().substring(0, 10)
    };

    formatTime = (time) => {
        return new Date(time).toISOString().substring(11, 19)
    };

    render() {
        const {hall, movie, start_of_show, finish_of_show, price} = this.props.show;
        return <div>
            <p>
                Фильм: {movie.name}.
                Зал: {hall.name}.
                Дата: {this.formatDate(start_of_show)}.
                Время сеанса: {this.formatTime(start_of_show)} - {this.formatTime(finish_of_show)}.
                Стоимость билета: {price} сом
            </p>
        </div>
    }
}

export default Show;

