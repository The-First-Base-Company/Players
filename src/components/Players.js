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
    document.body.style.background = "url(data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgIBwcHBw0IBwcHBw0HBwcHCA8ICQcNFREWFiARFRUYHSggGBolJxMTITEhJSkrLi4uFx8zODMsNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIALcBEwMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAABAAIH/8QAFhABAQEAAAAAAAAAAAAAAAAAAAER/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AOmlIEkQRBBFEAUQSRBJEAigSKAAoAigZRQMooGUQABQAEAkkASQFJAiiCIIIogikCKIAogEUCWIgyigCIABoAA0AZRAANAACACSBAoEkQRSAkECkQRRBJEEUgSKAIoAigAaAAFAyiAAIACtAGUQABAJIASCBIIEggiiCKIIggiiAKQJFAEQARAANAACAAIAAgACKARABJAjEYCIaBGAgSCBIIEggikBSIApAEQARAAEAA0KDKIAUGgACAAIAJICYIYChghAkECQQJBAkECQQRBBJIEkgAIAKpABSAFFNAAGgACAAIAJIDFEoBMBAkQgSCBIIEggUCBIQFBAQkCCQCggEKhQQIAAgACAAIAJIEQQJBAkECWSDRZIEggSyQJZIFBAQkCFSAJAEEgAIAAgBQQCCQBJAjAgJBAkECQgaQIEhA0ggaQQFBAUECSAJIAgkABAIIAgkABAIFAkkBLJAkECQgaQIFAgSyQKCAoICggISBBIEEAQSBBAEEgCSBAoAQQRCAkIGkCBIQEhASyQKCAlkgkEBQQJBAgkCCAJIAgQCSQBJAkkBSQIpAikBRQJFAkkCRQBFAEUASQBJAgkASQBBAkEBCQJJA//2Q==)"

    return (
      <React.Fragment> 


      <Alert variant="">
          <h1 align="center">
            <Badge variant="dark">Players</Badge>
          </h1>
        </Alert>
      
<main className="container">


<Row className="show-grid text-center">
  
  
  
  <Col xs= {11 } sm={6} className="person">
   
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
   <p><b>Nickname:</b> Kiiiiid</p>
   <p><b>Born:</b> 8/07/1991 in Vineland, NJ</p>
   <p><b>Draft:</b> 2009, Los Angeles Angels, Round: 1, Overall Pick: 25</p> 
   <p><b>High School:</b> Millville, NJ</p> 
   <p> <b>Debut:</b> 7/08/2011</p>   
   <p> <b>Relationship(s):</b> brother-in-law of Aaron Cox</p>    
    </h6>
    </p>      
    </Card>

  </Col>
  </Row>
  

  
  <h1 align="center">
  <br/>
            <Badge variant="dark">Top News</Badge>
          </h1>
     
    <div></div>    
    <div></div>  
    <div></div>   
    <div>
    <br/>
    <br/>
      <Row>
      <br/>
        <Col xs={6} md={4}>
          <iframe height="195"  width="340" src="https://www.youtube.com/embed/INDMWGQ7USk" 
        frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen></iframe>
        </Col>
        <Col xs={6} md={4}>
        <img src="https://img.mlbstatic.com/mlb-images/image/private/t_16x9/t_w1536/mlb/z7hn4h7dcqkteyykdckc" width="340" height="195"/>
        </Col>
        <Col xs={6} md={4}>
        <img src="https://img.mlbstatic.com/mlb-images/image/private/w_640,h_360/mlb/lmidtyhc8zbcjjjv0h5q" 
        width="340" height="195"/>
        </Col>
      </Row>
      </div>
        
</main>
    </React.Fragment>  
    )
  }
}



export default Players;
