import React from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const Home = ({data: {loading, getAllUsers}}) => loading ? [] : (
  getAllUsers.map(user => (
    <h1 key={user.id}>
      {user.email}
    </h1>
  ))
);

const getAllUsers = gql`
  {
    getAllUsers {
      id
      email
      username
    }
  }
`;

export default graphql(getAllUsers)(Home);
