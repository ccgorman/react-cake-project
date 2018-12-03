import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import classes from './CakeBlog.css';
import Cakes from './Cakes/Cakes';
import UploadCake from './UploadCake/UploadCake';
import CakeDetail from './CakeDetail/CakeDetail';

class CakeBlog extends Component {
    render () {
        return (
            <div>
                <header>
                    <nav className={classes.CakeBlog}>
                        <ul>
                            <li><NavLink
                                to="/"
                                exact
                            >Cakes</NavLink></li>
                            <li><NavLink
                            	to='/upload-cake'
                            >Upload Cake</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                	<Route path="/upload-cake" component={UploadCake} />
                    <Route path="/cake/:id" component={CakeDetail} />
                    <Route path="/" component={Cakes} />
                </Switch>
            </div>
        );
    }
}

export default CakeBlog;
