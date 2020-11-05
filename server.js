const {ApolloServer, gql} = require('apollo-server');

// The GraphQL Schema
const typeDefs = gql`
    type User {
        username: String!
        email: String!
    }
    type Query{
        getUsers: [User]!
    }
`;

// A map of functions which returns data for the schema
const resolvers = {
  Query: {
    getUsers: () => {
      const users = [
        {
          username: 'john',
          email: 'john@email.com'
        },
        {
          username: 'jane',
          email: 'jane@email.com'
        }
      ]
      return users
    },
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen().then(({url}) => {
  console.log(` Server ready at ${url}`)
})
