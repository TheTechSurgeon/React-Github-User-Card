import React from 'react';
import axios from 'axios';
import Followers from './Followers';
import { CardImg, CardHeader, Card, CardBody, CardText } from 'reactstrap';
import styled from "styled-components";
import './App.css';



const SpaceBorder = styled.div`
  color: grey;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  text-align: center;
  display:flex;
  flex-direction:column;
  width: 75%;
  background: black;
  padding-bottom: 5%;
`;


class App extends React.Component {


  constructor() {
    super();
    this.state = {
      user: {},
      followers: []
    };
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/thetechsurgeon')
    .then(response => {
    this.setState({
      user: response.data
    });
    })
    .catch(error => {
      console.log("error", error)
    });
    axios.get('https://api.github.com/users/thetechsurgeon/followers')
    .then(response => {
    this.setState({
      followers: response.data
    });
    })
    .catch(error => {
      console.log("error", error)
    });

  }

  render() {
    return (
      <div>
        <SpaceBorder>
        <h1>Ben Github</h1>
        <Card>
        <CardBody>
        <CardHeader>Github User: {this.state.user.name}</CardHeader>
        <CardText>Location: {this.state.user.location}</CardText>
        <CardText>Following: {this.state.user.following}</CardText>
        <CardText>Followers: {this.state.user.followers}</CardText>
        <CardImg className="cards" src={this.state.user.avatar_url}></CardImg>
        </CardBody>
        </Card>
        </SpaceBorder>
        <Followers followers={this.state.followers}/>
      </div>
    );
  }
}

export default App;