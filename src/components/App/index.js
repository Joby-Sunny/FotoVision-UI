import React, { Component } from 'react';
import TopNavBar from '../TopNavBar';
import Home from '../Home';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <TopNavBar />
                <Home/>
            </div>
        )
    }
}