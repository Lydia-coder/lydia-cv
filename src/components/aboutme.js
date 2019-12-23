import React, { Component } from 'react';
import{Grid,Cell}from "react-mdl"

class Aboutme extends Component {
    render() {
        return (
            <div>
     <Grid>
     <Cell col={6}>
                    <h2>About Me</h2>
                    <img src="https://scontent-ams4-1.xx.fbcdn.net/v/t1.0-9/27540167_10159867709430257_5567187484998451299_n.jpg?_nc_cat=107&_nc_ohc=sk0dLaqfLY8AQlsnmIgzjy3Kt9Fe2XGrOjZpQTxUYMGzONCaSvRbfiFJA&_nc_ht=scontent-ams4-1.xx&oh=5b2b9634dbefa588d570f0fa5a2c9434&oe=5EAA01BA"
                     alt="avatar"
                     style={{height: '250px', borderRadius:'10px'}}/>
                     <p>Here will be some info about me i don't know what yet </p>
                </Cell>
     </Grid>
            </div>
        );
    }
}

export default Aboutme;