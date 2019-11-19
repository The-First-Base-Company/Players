import React, { Component } from "react";

import { Alert, Badge, Jumbotron} from "react-bootstrap";
import{ Row, Container, Col, Button, Image, Card} from "react-bootstrap";
import Typography from '@material-ui/core/Typography';
import TableTopFivePlayers from "./tableTopFivePlayers";
import TableTopFiveTeams from "./tableTopFiveTeams";
import CardGame from "./cardGame";
import CardResults from "./cardResults";




class Players extends Component {
  render() {
    return (
      <React.Fragment> 
      <Alert variant="">
          <h1 align="center">
            <Badge variant="dark">Players</Badge>
          </h1>
          <h1>hola</h1>
        </Alert>
        <Jumbotron>
<Row className="show-grid text-center">
  <Col xs={12} sm={4} className="person">
   
    <Card>
    <Card.Header as="h5">Michael Nelson Trout</Card.Header>           
    <p>
   <img
     src="https://securea.mlb.com/mlb/images/players/head_shot/545361.jpg"
     width="120" height="180"
   />
   </p>
    <p align="center">
    <h6>
   <p><b>Nickname:</b> Mike Trout</p>
   <p><b>Born:</b> August 7, 1991 Vineland, New Jersey</p>
   <p><b>Draft:</b></p> 
   <p><b>College:</b> </p> 
   <p> <b>Debut:</b> July 8, 2011 for the Los Angeles Angels</p>    
    </h6>
    </p>      
    </Card>
    <br />


    <Card>
    <Card.Header as="h5">Markus Lynn </Card.Header>       
    <p>
   <img
     src="https://securea.mlb.com/mlb/images/players/head_shot/605141.jpg"
     width="120" height="180"
   />
   </p>
    <p align="center">
    <h6>
   <p><b>Nickname:</b> Mookie Betts</p>
   <p><b>Born:</b> October 7, 1992 Nashville, Tennessee</p>
   <p><b>Draft:</b></p> 
   <p><b>College:</b> </p> 
   <p> <b>Debut:</b> June 29, 2014 for the Boston Red Sox</p>    
    </h6>
    </p>       
    </Card>
    <br />

    <Card>
    <Card.Header as="h5">José Enrique Ramírez</Card.Header>       
    <p>
   <img
     src="https://securea.mlb.com/mlb/images/players/head_shot/608070.jpg"
     width="120" height="180"
   />
   </p>
    <p align="center">
    <h6>
   <p><b>Nickname:</b> José Ramírez</p>
   <p><b>Born:</b> September 17, 1992 Baní, Peravia, Dominican Republic</p>
   <p><b>Draft:</b></p> 
   <p><b>College:</b> </p> 
   <p> <b>Debut: </b> September 1, 2013 for the Cleveland Indians</p>    
    </h6>
    </p>       
    </Card>
    <br />


    <Card>
    <Card.Header as="h5">Francisco Miguel Lindor</Card.Header>       
    <p>
   <img
     src="https://securea.mlb.com/mlb/images/players/head_shot/596019.jpg"
     width="120" height="180"
   />
   </p>
    <p align="center">
    <h6>
   <p><b>Nickname:</b> Francisco Lindor</p>
   <p><b>Born:</b> November 14, 1993 Caguas, Puerto Rico</p>
   <p><b>Draft:</b></p> 
   <p><b>College:</b> </p> 
   <p> <b>Debut:</b> June 14, 2015 for the Cleveland Indians</p>    
    </h6>
    </p>       
    </Card>
    <br />

    <Card>
    <Card.Header as="h5">Nolan James Arenado</Card.Header>       
    <p>
   <img
     src="https://securea.mlb.com/mlb/images/players/head_shot/571448.jpg"
     width="120" height="180"
   />
   </p>
    <p align="center">
    <h6>
   <p><b>Nickname:</b> Nolan Arenado</p>
   <p><b>Born: </b> April 16, 1991 Newport Beach, California</p>
   <p><b>Draft:</b></p> 
   <p><b>College:</b> </p> 
   <p> <b>Debut:</b> April 28, 2013 for the Colorado Rockies</p>    
    </h6>
    </p>       
    </Card>
    <br />

  </Col>
  </Row>
        </Jumbotron>
    </React.Fragment>  
    )
  }
}

class Playersii extends Component{
  render(){
    return(
      <button style={{background: this.props.color}}>
        {this.props.children}
      </button>
    );
  }
}

export default Players;
