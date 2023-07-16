import { ApolloClient, InMemoryCache } from "@apollo/client";
import getUserQuery from "./queries/getUser";

const GraphQL = (() => {
  const client = new ApolloClient({
    uri: 'https://8dccf47sb8.execute-api.us-west-2.amazonaws.com/v1/graphql',
    cache: new InMemoryCache(),
  });

  const gqlOperation = op => async params => {
    const result = await client[op](params)
    const { data } = result
    return result
  }

  console.log(client, 'graph ql CE:TEST');

  return {
    query: gqlOperation('query'),
    mutation: gqlOperation('mutate')
  }
})();

export const getUser = async () => {
  const { user: res } = await GraphQL.query({
    opName: 'getUser',
    query: getUserQuery,
    variables: {}
  })
  return res
}