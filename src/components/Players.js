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
        </Alert>
        <Jumbotron>
<Row className="show-grid text-center">
  <Col sm={8} className="person">
   
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

  </Col>
  </Row>
        </Jumbotron>
    </React.Fragment>  
    )
  }
}



export default Players;
