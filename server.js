const {ApolloServer} = require('apollo-server');
const {sequelize} = require('./models');
const envConfigs =  require('./config/config');
const env = process.env.NODE_ENV || 'development';
const config = envConfigs[env];
const Sequelize = require('sequelize');


// A map of functions which returns data for the schema
const resolvers = require('./graphql/resolvers');
const typeDefs = require('./graphql/typeDefs');

const server = new ApolloServer({
  typeDefs,
  resolvers
})

let Sequel = new Sequelize(config.url, config);

server.listen().then(({url}) => {
  console.log(` Server ready at ${url}`)
  Sequel.authenticate().then(() => console.log('Database is connected!!!')).catch(err=> console.error(err));
})
