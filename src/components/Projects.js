import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://media.giphy.com/media/3ohhwxWDV25DWpgleU/giphy.gif) center / cover'}} >Resume Project</CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
          
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#000', fontWeight:"bold", height: '176px', background: 'url(https://blog.joypixels.com/content/images/2019/12/clinking_beer_mugs-1.gif) center / cover'}} > Game Client Project</CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
       
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          
        </div>


      )
    } else if(this.state.activeTab === 1) {
      return (
        <div className="projects-grid"> <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.japan-guide.com/thumb/623_shrines_large.jpg) center / cover'}} >  Travel App Project  </CardTitle>
        <CardText>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        </CardText>
        <CardActions border>
          <Button colored>GitHub</Button>
      
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
          <IconButton name="share" />
        </CardMenu>
      </Card>

     </div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div className="projects-grid"> <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://onurkurtic.ca/wp-content/uploads/2018/03/Vancouver-Website-Design-Natours.jpg) center / contain'}} >  Project </CardTitle>
        <CardText>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        </CardText>
        <CardActions border>
          <Button colored>GitHub</Button>
      
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
          <IconButton name="share" />
        </CardMenu>
      </Card>
</div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div className="projects-grid"> <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: '#000', height: '176px', background: 'url(https://blog.joypixels.com/content/images/2019/12/clinking_beer_mugs-1.gif) center / cover'}} >Game Sever Project</CardTitle>
        <CardText>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        </CardText>
        <CardActions border>
          <Button colored>GitHub</Button>
      
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
          <IconButton name="share" />
        </CardMenu>
      </Card>

      </div>
      )
    }

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>React Native</Tab>
          <Tab>HTML/CSS/SASS</Tab>
          <Tab>NodeJS/Stream</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;