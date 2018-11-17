import React, {Component} from 'react';
import '../../styles/TopNavBar.css';

export default class TopNavBar extends React.Component {
    render(){
        return (
            <div className="main_wrapper">
                <div className="content_wrapper">
                    <div className="left">
                        <span className="title">FotoVision</span>
                    </div>
                    <div className="right">
                        <ul className="navlist">
                            <li><a>About</a></li>
                            <li><a>Events</a></li>
                            <li><a>Gallery</a></li>
                            <li><a>Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}