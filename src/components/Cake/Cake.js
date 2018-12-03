import React from 'react';
import classes from './Cake.css';

const cake = (props) => (
    <div className={classes.Cake} onClick={props.clicked}>
   		<div>
    		<img src={props.imageUrl} alt={props.name} />
    	</div>
        <div>
            <div className={classes.Name}>{props.name}</div>
        </div>
    </div>
);

export default cake;