import React from 'react'
import {Switch, Route} from 'react-router-dom'
import AboutMePage from './AboutMePage'
import ContactPage from './ContactPage' 
import ResumePage from './ResumePage'
import HomePage from './HomePage'
import Projects from "./Projects"


const Routes = ()=> (
    <Switch> 
        <Route  exact path="/" component={HomePage}></Route>
        <Route  path="/aboutme" component={AboutMePage}></Route>
        <Route  path="/contact" component={ContactPage}></Route> 
        <Route  path="/resume" component={ResumePage}></Route>
        <Route path="/projects" component={Projects} />
    </Switch>
)

export default Routes