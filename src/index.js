import React from "react";
import App from "./components/App";
import { ApolloProvider } from "@apollo/client";
import client from "./apollo";
import { render } from "@testing-library/react";

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
