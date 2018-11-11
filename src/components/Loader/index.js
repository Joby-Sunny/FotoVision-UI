import React, { Component } from 'react';
import '../../styles/Loader.css';

export default class Loader extends React.Component {
    render() {
        return (
            <div className="Loader_wrapper">
                <i className="fab fa-chrome fa-spin"></i>
            </div>
        )
    }
}