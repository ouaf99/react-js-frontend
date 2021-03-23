import React, { Component } from 'react';

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }
    render() {
        return (
            <div>
                 <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="https://react-js-users-management-app.herokuapp.com/" className="navbar-brand">User Management App</a></div>
                    {/*<div><h2 className="navbar-brand">User Management App</h2></div>*/}
                    </nav>
                </header>
                
            </div>
        );
    }
}

export default HeaderComponent;
