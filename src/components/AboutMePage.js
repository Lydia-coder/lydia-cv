import React, { Component } from 'react';
import {Grid,Cell} from "react-mdl"
import ParticleComponent from "./ParticleComponent"

class AboutMePage extends Component {
    render() {
        return (
            <div className="about-body">
              <Grid className="about-grid">
                  <ParticleComponent/>
              <Cell col={6}>
                    <h2 >Lydia Michael Smeets</h2>
                    <img src="https://scontent-ams4-1.xx.fbcdn.net/v/t1.0-9/27540167_10159867709430257_5567187484998451299_n.jpg?_nc_cat=107&_nc_ohc=sk0dLaqfLY8AQlsnmIgzjy3Kt9Fe2XGrOjZpQTxUYMGzONCaSvRbfiFJA&_nc_ht=scontent-ams4-1.xx&oh=5b2b9634dbefa588d570f0fa5a2c9434&oe=5EAA01BA"
                     alt="avatar"
                     style={{height: '250px', borderRadius:'50%'}}/>
                   
                </Cell>
                <p>  I recently graduated as a Full- stack Web Developer from Codaisseur Academy. I was selected from a large group of hope-full applicants to follow the bootcamp course. I have worked on projects individually and in a team setting. 
                  I have applied technologies such as : React & Redux, Javascript and REST API to make full- stack apps.I am very motivated and excited to start working in a challenging environment where I can grow as a professional. 
                  My back ground in teaching and sales have taught me great communicative skills, which makes me a great colleague to have!   
                  </p>
              </Grid>
            </div>
        );
    }
}

export default AboutMePage;
// 