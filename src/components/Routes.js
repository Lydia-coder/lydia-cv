import React from 'react'
import {Switch, Route} from 'react-router-dom'
// import LandingPage from './LandingPage';
import AboutMePage from './AboutMePage'
import ContactPage from './ContactPage' 
import ResumePage from './ResumePage'


const Routes = ()=> (
    <Switch> 
        {/* <Route exact path="/" component={LandingPage}></Route>*/}
        <Route  path="/aboutme" component={AboutMePage}></Route>
        <Route  path="/contact" component={ContactPage}></Route> 
        <Route  path="/resume" component={ResumePage}></Route>
    </Switch>
)

export default Routes