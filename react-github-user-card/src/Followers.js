import React from 'react';
import axios from 'axios';
import { Card, CardBody, CardTitle, CardText, CardImg, CardSubtitle, CardHeader } from 'reactstrap';
import styled from "styled-components";

const SpaceBorder = styled.div`
  color: grey;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  text-align: center;
  
  width: 33%;
  background: black;
  
  box-shadow: 5px 10px;
`;

function Followers(props) {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

    return (
      <>
      {props.followers.map(follower => (
                  <div key={follower.id}>
                    <SpaceBorder>
                    <Card>
                    <CardBody>
                    <CardImg className="cards" src={follower.avatar_url} />
                    <CardHeader>UserName: {follower.login}</CardHeader>
                    <CardText>
                      Following: {follower.following_url.length}
                    </CardText>
                    <CardText>
                      Followers: {follower.followers_url.length}
                    </CardText>
                    </CardBody>
                    </Card>
                    </SpaceBorder>


                  </div>
                ))}
      </>
    );

}

export default Followers;

