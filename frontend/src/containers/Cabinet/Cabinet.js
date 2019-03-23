import React, {Component, Fragment} from 'react';

class Cabinet extends Component {
    render(){
        const first_name = localStorage.getItem('first_name');
        const last_name = localStorage.getItem('last_name');
        const email = localStorage.getItem('email');
        const username = localStorage.getItem('username');
        return <Fragment>
            <table className="table table-bordered mt-5">
                <thead>
                <tr>
                    <th scope="col">Username</th>
                    <th scope="col">First_name</th>
                    <th scope="col">Last_name</th>
                    <th scope="col">E-mail</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">{username}</th>
                    <td>{first_name}</td>
                    <td>{last_name}</td>
                    <td>{email}</td>
                </tr>
                </tbody>
            </table>

        </Fragment>
    }
}

export default Cabinet;