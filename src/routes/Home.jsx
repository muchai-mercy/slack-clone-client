import React from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const Home = ({data: {loading, getAllUsers}}) => loading ? null : (
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
    }
  }
`;

export default graphql(getAllUsers)(Home);
