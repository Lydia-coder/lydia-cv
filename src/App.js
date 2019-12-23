import React, { Component } from 'react';
import {Layout,Header,Navigation,Drawer,Content} from 'react-mdl'
import Main from './components/main';
import {Link} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div>
        <div className="demo-big-content">
    <Layout>
        <Header title="Title" scroll>
            <Navigation>
            <Link to="/">Home</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About me</Link>
                <Link to="/contact">Contact</Link>
               
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
            <Link to="/">Home</Link>
            <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About me</Link>
                <Link to="/contact">Contact</Link>
              
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
      </div>
    );
  }
}

export default App;