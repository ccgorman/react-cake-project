import React, { Component } from 'react';
import axios from '../../../axios';
import classes from './CakeDetail.css';

class CakeDetail extends Component {
    state = {
        loadedPost: null
    }

    componentDidMount () {
        this.loadData();
    }

    componentDidUpdate() {
        this.loadData();
    }

    loadData () {
        if ( !this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.match.params.id) ) {
            axios.get( '/cakes/' + this.props.match.params.id )
                .then( response => {
                    this.setState( { loadedPost: response.data } );
                } );
        }
    }

    returnHandler = ( ) => {
        this.props.history.push( '/' );
    }

    render () {
        let cake = <p style={{ textAlign: 'center' }}>Loading...!</p>;
        if ( this.state.loadedPost ) {
            cake = (
                <div className={classes.CakeDetail}>
                    <h1>{this.state.loadedPost.name}</h1>
                    <p><img src={this.state.loadedPost.imageUrl} alt={this.state.loadedPost.name} /></p>
                    <p>{this.state.loadedPost.comment}</p>
                    <p><a onClick={this.returnHandler}>return to list</a></p>
                </div>

            );
        }
        return cake;
    }
}

export default CakeDetail;
