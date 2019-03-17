import React from 'react'


const Show = (props) => {
    const {hall, start_of_show, finish_of_show, price} = props.show;
    return <div>
        <p>
            Зал: {hall.name}.
            Дата: {props.date(start_of_show)}.
            Время сеанса: {props.time(start_of_show)} - {props.time(finish_of_show)}.
            Стоимость билета: {price} сом
        </p>
    </div>
};

export default Show;

