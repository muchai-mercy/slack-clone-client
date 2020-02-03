import React, { useState } from 'react';
import { Container, Header, Input, Button } from 'semantic-ui-react'
import {gql} from 'apollo-boost';
import {graphql, useMutation} from 'react-apollo';


const Register = () => {
  const [ username, setUsername ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [register] = useMutation(registerMutation);

  const submit = async () => {
    const response = await register({
      variables: {
        username,
        email,
        password
      }
    });
    return response;
  }

  return (
    <Container>
      <Header as='h3'>Register</Header>
      <Input
        name="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        placeholder='Email'
        fluid
        />
      <Input
        value={username}
        name="username"
        onChange={(e) => setUsername(e.target.value)}
        placeholder='Username'
        fluid
      />
      <Input
        name="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='Password'
        fluid />
      <Button onClick={submit}>Register</Button>
    </Container>
  )
}

const registerMutation = gql`
  mutation($username: String!, $email: String!, $password: String!) {
    register(username: $username, email: $email, password: $password) {
      isRegistered
      errors {
        path
        message
      }
    }
}`;

export default graphql(registerMutation)(Register);
