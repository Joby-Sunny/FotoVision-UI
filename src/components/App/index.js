import React, { Component } from 'react';
import TopNavBar from '../TopNavBar';
import Home from '../Home';
import Events from '../Events';
import Loader from '../Loader';

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = { isLoading: true };
    }


    render() {
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 4000);
        if (!this.state.isLoading) {
            return (
                <div className="app_wrapper">
                    <TopNavBar />
                    <Home />
                    <Events />
                </div>
            )
        } else {
            return (
                <div className="app_wrapper">
                    <Loader />
                </div>
            )
        }
    }
}