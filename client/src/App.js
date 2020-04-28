import React from "react";
import BookList from "./components/BookList";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import AddBook from "./components/AddBook";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
});
class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="main">
          <h1>Book List</h1>
          <BookList />
          <AddBook />
        </div>
      </ApolloProvider>
    );
  }
}
export default App;
