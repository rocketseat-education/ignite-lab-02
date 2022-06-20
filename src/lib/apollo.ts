import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4n4k5w68h3x01yra00r5rzf/master',
  cache: new InMemoryCache(),
})
