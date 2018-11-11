import React, { Component } from 'react';
import '../../styles/Home.css';

export default class Home extends React.Component {

    render() {
        return (
            <div className="home_wrapper">
                <div className="home-title_wrapper">
                    <h1 className="home-title link link--yaku">
                        <span>F</span>
                        <span>o</span>
                        <span>t</span>
                        <span>o</span>
                        <span>V</span>
                        <span>i</span>
                        <span>s</span>
                        <span>i</span>
                        <span>o</span>
                        <span>n</span>
                    </h1>
                    <h4 className="home-caption">Your Photography Destination</h4>
                </div>
            </div>
        )
    }
}