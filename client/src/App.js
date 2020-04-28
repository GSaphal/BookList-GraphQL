import React from "react";
import BookList from "./components/BookList";
class App extends React.Component {
  render() {
    return (
      <div className="main">
        <h1>Book List</h1>
        <BookList />
      </div>
    );
  }
}
export default App;
