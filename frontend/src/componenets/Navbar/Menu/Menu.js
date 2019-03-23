import React, {Fragment, Component} from 'react'
import MenuItem from "./MenuItem/MenuItem";
import {NavLink} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



class Menu extends Component{
    state = {
        collapse: true
    };

    toogle = () => {
        this.setState({
            collapse: !this.state.collapse
        })
    };

    render() {
        const username = localStorage.getItem('username');
        const isAdmin = localStorage.getItem('is_admin');
        return <Fragment>
            <button onClick={this.toogle}
                    className="navbar-toggler"
                    type="button"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>
            <div className={(this.state.collapse ? "collapse" : '') +  " navbar-collapse"} id="navbarNav">
                <ul className="navbar-nav mr-auto">
                    <MenuItem to="/">Фильмы</MenuItem>
                    <MenuItem to="/halls/">Залы</MenuItem>
                    {isAdmin === 'true' ? [
                        <MenuItem to="/movies/add" key="addMovie">Добавить фильм</MenuItem>,
                        <MenuItem to="/halls/add" key="addHall">Добавить зал</MenuItem>
                        ] : null
                    }
                </ul>
                <ul className='navbar-nav ml-auto'>
                    {username ? [
                        <li className="nav-item" key="username">
                            <span className="navbar-text mr-3">
                                <NavLink to='/cabinet'>
                                    Привет, {username}!
                                    <FontAwesomeIcon icon="user" />
                                </NavLink>
                            </span>
                        </li>,
                        <MenuItem to="/logout" key="logout">
                            Выйти<FontAwesomeIcon icon="door-open" />
                        </MenuItem>
                    ] : [
                        <MenuItem to="/login" key='login'>
                            Войти<FontAwesomeIcon icon="door-closed" />
                        </MenuItem>,
                        <MenuItem to="/register" key='register'>
                            Зарегистрироваться<FontAwesomeIcon icon="key" />
                        </MenuItem>
                    ]}
                </ul>
            </div>
        </Fragment>
    }
}


export default Menu;