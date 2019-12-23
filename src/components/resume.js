import React, { Component } from 'react';
import{ Grid,Cell} from 'react-mdl'
import Education from "./Education"
import Experience from "./Experience"
import Skills from "./Skills"

class Resume extends Component {
    render() {
        return (
            <div>
               <Grid>
                   <Cell col={4}> 
                   <div style={{textAlign:'center'}}>
                       <img
                       src='https://cdn.xl.thumbs.canstockphoto.ca/female-avatar-profile-icon-round-african-american-woman-face-flat-vector-illustration-eps-vector_csp51913548.jpg'
                       alt='avatar'
                       style={{height: '200px'}}
                       />

                   </div>
                   <h2 style={{paddingTop: '2em'}} >Lydia Michael Smeets</h2>
                   <h4 style={{color: 'grey'}}>Full-Stack Web Developer</h4>
                   <hr style={{borderTop:'3px solid #001a33', width: '50%'}}/>
                   <p> Some more info about me text kind of thing after i finish this</p>
                   <hr style={{borderTop:'3px solid #001a33', width: '50%'}}/>
                   <h5>Adress</h5>
                   <p>Remmersteinpad 25, 1333 XN Almere</p>
                   <h5>Phone</h5>
                   <p>+31640233276</p>
                   <h5>Email</h5>
                   <p>lydiatjuh@gmail.com</p>
                   <hr style={{borderTop:'3px solid #001a33', width: '50%'}}/>
                   
                   </Cell>
                   <Cell className="resume-right-col" col={8}>
                       <h2>Education</h2>
                       <Education 
                       startYear={2011}
                       endYear={2015}
                       schoolName="Fontys Hogeschool"
                       schoolDescription="Het is al geruime tijd een bekend gegeven dat een lezer, tijdens het bekijken van de layout van een pagina, afgeleid wordt door de tekstuele inhoud. Het belangrijke punt van het gebruik van Lorem Ipsum is dat het uit een min of meer normale verdeling van letters"/>

                        <Education 
                       startYear={2011}
                       endYear={2015}
                       schoolName="Fontys Hogeschool"
                       schoolDescription="Het is al geruime tijd een bekend gegeven dat een lezer, tijdens het bekijken van de layout van een pagina, afgeleid wordt door de tekstuele inhoud. Het belangrijke punt van het gebruik van Lorem Ipsum is dat het uit een min of meer normale verdeling van letters"/>

                        <hr style={{borderTop: '3px solid white'}}/>
                        <h2>Experience</h2>
                        <Experience
                        startYear={2011}
                        endYear={2015}
                        jobName="Mazsol Group"
                        jobDescription="Het is al geru"/>

                        <Experience
                        startYear={2011}
                        endYear={2015}
                        jobName="Mazsol Group"
                        jobDescription="Het is al geru"/>

                         <Experience
                        startYear={2011}
                        endYear={2015}
                        jobName="Mazsol Group"
                        jobDescription="Het is al geru"/>

<hr style={{borderTop: '3px solid white'}}/>
  <h2>Skills</h2>
<Skills
skill="JavaScript(ES6)"
progress={80}/>
<Skills
skill="JavaScript(ES6)"
progress={80}/>

<Skills
skill="JavaScript(ES6)"
progress={80}/>

<Skills
skill="JavaScript(ES6)"
progress={80}/>

<Skills
skill="JavaScript(ES6)"
progress={80}/>

<Skills
skill="JavaScript(ES6)"
progress={80}/>





                   </Cell>
               </Grid>
            </div>
        );
    }
}

export default Resume;