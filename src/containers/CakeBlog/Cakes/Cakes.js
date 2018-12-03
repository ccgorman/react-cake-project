import React, { Component } from 'react';
import axios from '../../../axios';
import Cake from '../../../components/Cake/Cake';
import classes from './Cakes.css';

class Cakes extends Component {
	state = {
        cakes: [],
        error: false
    }

    componentDidMount () {
        axios.get( '/cakes' )
            .then(
            	response => {
                	this.setState({cakes: response.data});
           		}
           	)
            .catch(
            	error => {
                	this.setState({error: true});
            	}
            );
    }

    cakeSelectedHandler = ( id ) => {
        this.props.history.push( '/cake/' + id );
    }
	
	render() {
		let cakes = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
        if (!this.state.error) {
        	cakes = this.state.cakes.map(cake => {
        		//just some basic validation there are a lot of bad URLs to images
        		if (cake.imageUrl.endsWith("jpg")) {
	        		return <Cake 
                        key={cake.id}
	                    name={cake.name} 
	                    imageUrl={cake.imageUrl}
                        clicked={() => this.cakeSelectedHandler(cake.id)} />;
                }
                return null;
            });
        }
		
		return (
            <div>
    			<section className={classes.Cakes}>
    				{cakes}
    			</section>
            </div>
		);
	}
}

export default Cakes;
