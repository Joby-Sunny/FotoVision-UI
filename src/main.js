import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, IndexRoute, browserHistory } from 'react-router-dom';

import App from './components/App';
import Home from './components/Home';
import Events from './components/Events';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/events" component={Events} />
        </Route>
    </Router>,
    document.getElementById('app'));