import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueMeta from 'vue-meta'
// var os = require('os')
// console.log('test OS-----',os.type())


import { ApolloClient, HttpLink, ApolloLink, InMemoryCache, gql } from '@apollo/client';
import { RestLink } from "apollo-link-rest";
import { onError } from "apollo-link-error";
const restLink = new RestLink({
    endpoints : {
      v1: {uri: 'https://api.github.com/'},
      v2: {uri: 'https://swapi.dev/api/'}
    }
  });
  // const restLink2 = new RestLink({uri: 'https://swapi.dev/api/'});

const httpLink = new HttpLink({ uri: 'https://48p1r2roz4.sse.codesandbox.io' });

const link = onError(({ graphQLErrors, networkError }) => {
  console.log(graphQLErrors, networkError)
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
//   link: restLink
  link : ApolloLink.from([restLink, link, httpLink]),
  test : () => {
    console.log('CB-------')
  }
});



// client.query({query: gql`query GetRates {rates(currency: "USD") {currency}}`}).then(result => console.log(result)).catch(err => {
//   console.log(err)
// });

// REST calls
const query = gql`query {user(abc : "abc") @rest(type: "User", path: "repos/afhammk/components/contents", endpoint: "v1") {name, _links}}`;
client.query({ query }).then(response => {
  console.log(response);
  // console.log(client.readQuery({query : gql`query {user(abc : "abc") @rest(type: "User", path: "users", endpoint: "v3") {name, _links}}`}))
  console.log(client)
  console.log(client.readQuery({query: gql`query GetLogins {user(abc : "abc") {name, _links}}`}))
}).catch(err => {
  console.log(err)
});

// Graphql calls
client.query({query: gql`query GetRates {rates (currency: "USD") {currency}}`}).then(result => {
  console.log(result)
  console.log(client.readQuery({query: gql`query GetLogins {rates (currency: "USD") {currency}}`}))
}).
  catch(err => {
  console.log(err)
});

// console.log(client.readQuery({query: gql`query GetRates {rates(currency: "USD") {currency}}`}))

// setTimeout(() => {
//   // console.log(client.cache.data.data)
//   console.log(client.readQuery({query: gql`query GetLogins {user(login: "USD") {login}}`}))
// }, 3000)

// cache.writeQuery({ query: gql`query GetRates {rates(currency: "USD") {currency}}`, data: user })



// const query2 = gql`query luke {person @rest(type: "Person", path: "people/1/", endpoint: "v2") {name}}`;
// client.query({ query : query2 }).then(response => {
//   console.log(response.data.person.name);
// }).catch(err => {
//   console.log(err)
// });

createApp(App).use(router, VueMeta).mount('#app')
