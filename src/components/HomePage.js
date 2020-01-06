import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Particles from 'react-particles-js';

const particleOpt= {
  particles:{
    number:{
      value:150,
      density:{
        enable: true,
        value_area: 500
      }
    }
  }
}

class HomePage extends Component {
  render() {
    return (
      
      
            
      <div  style={{ width: "100%", margin: "auto" }}>
         
     
        <Grid className="landing-grid">
        <Particles params={particleOpt}/>
    
        
          <Cell col={12}>
         
            <img
              src="https://scontent-ams4-1.xx.fbcdn.net/v/t1.0-9/14359025_10157450179285257_8982111078051220177_n.jpg?_nc_cat=107&_nc_ohc=ksde0ZwMV7QAQn4z3j0fxXMFZN6bD1KNafXAmJw_T-vhh1tQt0YD1PS1w&_nc_ht=scontent-ams4-1.xx&oh=aa28fde45489d2d37c1ac0b71794ec4a&oe=5EA3E949"
              alt="avatar"
              className="avatar-img"
            />
 
          
            <div className="banner-text">
              <h1> Full-Stack Web Developer</h1>
              <hr />
              <p>
                HTML/CSS | BOOTSTRAP | JAVASCRIPT(ES6) | REACT | REDUX | NODE.JS
                | EXPRESS.JS SEQUELIZE.JS | DOCKER | REST API | GIT/GITHUB
              </p>
              <div className="social-links">
                {/*linkedIn*/}
                <a
                  href="http://google.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>
                {/*Github*/}
                <a
                  href="http://google.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
           
        </Grid>
      </div>
    );
  }
}

export default HomePage;
