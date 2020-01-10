import React, { Component } from 'react';
import{ Grid,Cell} from 'react-mdl'
import EducationPage from "./EducationPage"
import ExperiencePage from "./ExperiencePage"
import SkillsPage from "./SkillsPage"

class ResumePage extends Component {
    render() {
        return (
            <div>
               <Grid>
                   <Cell col={4}> 
                   <div style={{textAlign:'center'}}>
                       <img
                       src='https://media.licdn.com/dms/image/C4D03AQGhICsTUGsC_w/profile-displayphoto-shrink_200_200/0?e=1583971200&v=beta&t=0MtR6HtOZ32QHFST1xmVBOTyL7_5eaOrp8Vbvy8fA5k'
                       alt='avatar'
                       style={{height: '200px'}}
                       />

                   </div>
                   <h2 style={{paddingTop: '2em'}} >Lydia Michael Smeets</h2>
                   <h4 style={{color: 'grey'}}>Full-Stack Web Developer</h4>
                   <hr style={{borderTop:'3px solid #001a33', width: '50%'}}/>
                   <p> Independent and motivated developer with background in Sales and Teaching, looking to work in challenging environment where I can grow professionally </p>
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
                       <EducationPage 
                       startYear={2019}
                       endYear={2019}
                       title="Full-Stack Web Developer Trainee"
                       schoolName="Codaisseur Academy"
                       schoolDescription="The technologies I aquired during my education at Codaisseur Academy were: JavaScript (ES6), React.js & Redux, React – Bootstrap, REST API, PostgreSQL, Express.js, Sequelize.js, Docker, HTML & CSS."/>

                        <EducationPage 
                       startYear={2011}
                       endYear={2015}
                       title=" English Teacher Trainee"
                       schoolName="Fontys Hogeschool"
                      
                       schoolDescription="Preparing lesson plans for classes, this helped me become very organized and taught me  how to achieve certain goals that I set for myself.
                       As i teacher I had to plan interesting lessons to really engage the students, this helped to increase my communication skills, such as speaking in public, engaging my audience, clearly explaining my material and quick thinking when answering questions of students.
                       "/>

                        <hr style={{borderTop: '3px solid white'}}/>
                        <h2>Experience</h2>
                       

                        <ExperiencePage
                         startYear={2019}
                         endYear={2019}
                         title="Full-Stack Web Developer Trainee"
                         jobName="Codaisseur Acamemy"
                         jobDescription="11-week intensive full – stack web development projects. workflow included: code reviews, quality assessment and teamwork using SCRUM methodology, Git and GitHub.
                         

                         "/>
                          <ExperiencePage
                        startYear={2016}
                        endYear={2019}
                        title="Brand Represenative"
                        jobName="Mazsol Group"
                        jobDescription="Attending beauty industry events where I would network for potential clients and business partners.
                        For creating a specific brand image through social media and web design, I used technologies such as: HTML & CSS.
                        I also was responsible for generating sales opportunities and promoting products and services to potential customers. 
                        "/>

                         

<hr style={{borderTop: '3px solid white'}}/>
  <h2>Skills</h2>
< SkillsPage 
skill="HTML/CSS                                    "
progress={60}/>

< SkillsPage 
skill="React – Bootstrap"
progress={60}/>
< SkillsPage 
skill="React & Redux"
progress={80}/>

< SkillsPage 
skill="React-Native"
progress={55}/>

< SkillsPage 
skill="REST API"
progress={90}/>

< SkillsPage 
skill="PostgreSQL"
progress={90}/>

< SkillsPage 
skill="GrapSQL"
progress={60}/>

< SkillsPage 
skill="Docker"
progress={80}/>

< SkillsPage 
skill="Git & GitHub"
progress={90}/>






                   </Cell>
               </Grid>
            </div>
        );
    }
}

export default ResumePage;