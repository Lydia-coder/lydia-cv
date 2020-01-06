import React, { Component } from 'react';
import { Grid, Cell, List,ListItem,ListItemContent } from 'react-mdl';


class ContactPage extends Component {
    render() {
        return (
            <div className= "contact-body"> 
            <Grid className= "contact-grid">
                <Cell col={6}>
                    <h2>Lydia Michael Smeets</h2>
                    <img src="https://scontent-ams4-1.xx.fbcdn.net/v/t1.0-9/27540167_10159867709430257_5567187484998451299_n.jpg?_nc_cat=107&_nc_ohc=sk0dLaqfLY8AQlsnmIgzjy3Kt9Fe2XGrOjZpQTxUYMGzONCaSvRbfiFJA&_nc_ht=scontent-ams4-1.xx&oh=5b2b9634dbefa588d570f0fa5a2c9434&oe=5EAA01BA"
                     alt="avatar"
                     style={{height: '250px', borderRadius:'10px'}}/>
                     <p style={{width:'75%', margin: 'auto', paddingTop: '1em' }}>Please contact me when you would like to know more </p>
                </Cell>
                <Cell col={6}>
                    <h2>Contact Me</h2>
                    <hr/>
                    <div className= 'contact-list'>
<List>
  <ListItem>
    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
        <i className= 'fa fa-phone-square' aria-hidden= 'true'/>
        +31640233276
        </ListItemContent>
  </ListItem>
  <ListItem>
    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
        <i className= 'fa fa-envelope' aria-hidden= 'true'/>
        lydiatjuh@gmail.com
        </ListItemContent>
  </ListItem>
 
</List>
                    </div>

                </Cell>

            </Grid>
            </div>
        )
    }
}

export default ContactPage;