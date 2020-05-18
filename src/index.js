import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "http://localhost:4001",
  }),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
