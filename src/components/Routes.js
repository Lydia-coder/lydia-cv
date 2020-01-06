import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Landingpage from './Landingpage'
import Aboutme from './Aboutme'
import Contact from './Contact' 
import Resume from './Resume'


const Routes = ()=> (
    <Switch> 
        <Route exact path="/" component={Landingpage}></Route>
        <Route  path="/aboutme" component={Aboutme}></Route>
        <Route  path="/contact" component={Contact}></Route>
        <Route  path="/resume" component={Resume}></Route>
    </Switch>
)

export default Routes