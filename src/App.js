import React, { Component } from 'react';
import {Layout,Header,Navigation,Drawer,Content} from 'react-mdl';
import Routes from './components/Routes';
import {Link} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div>
        <div className="demo-big-content">
    <Layout>
        <Header className='header-color' title="My PortFolio" scroll>
            <Navigation>
            <Link to="/">Home</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About me</Link>
                <Link to="/contact">Contact</Link>
               
            </Navigation>
        </Header>
        <Drawer title="My Portfolio">
            <Navigation>
            <Link to="/">Home</Link>
            <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About me</Link>
                <Link to="/contact">Contact</Link>
              
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
             <Routes/> 
        </Content>
    </Layout>
</div>
      </div>
    );
  }
}

export default App;