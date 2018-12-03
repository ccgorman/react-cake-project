import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import Cakes from './Cakes/Cakes';

class CakeBlog extends Component {
	render () {
        return (
            <Cakes />
        );
    }
}

export default CakeBlog;