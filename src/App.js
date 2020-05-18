import React, { useState } from "react";
import Authors from "./components/Authors";
import Books from "./components/Books";
import NewBook from "./components/NewBook";
import { ALL_AUTHORS, ALL_BOOKS } from "./queries";
import { useQuery } from "@apollo/client";

const Notify = ({ errorMessage }) => {
  if (!errorMessage) {
    return null;
  }
  return <div style={{ color: "red" }}>{errorMessage}</div>;
};

const App = () => {
  const [errorMessage, setErrorMessage] = useState(null);

  const [page, setPage] = useState("authors");

  const result = useQuery(ALL_AUTHORS, {
    pollInterval: 2000, // querying server every two seconds..
  });
  const result2 = useQuery(ALL_BOOKS, {
    pollInterval: 2000, // querying server every two seconds..
  });

  if (result.loading || result2.loading) {
    return <div>Good things take loading...:D</div>;
  }

  // useEffect(() => {
  //   if (result.data && result2.data) {
  //     setPerson(result.data.findPerson);
  //   }
  // }, [result.data]);

  const notify = (message) => {
    setErrorMessage(message);
    setTimeout(() => {
      setErrorMessage(null);
    }, 10000);
  };

  return (
    <div>
      <Notify errorMessage={errorMessage} />

      <div>
        <button onClick={() => setPage("authors")}>authors</button>
        <button onClick={() => setPage("books")}>books</button>
        <button onClick={() => setPage("add")}>add book</button>
      </div>

      <Authors authors={result.data.allAuthors} show={page === "authors"} />

      <Books books={result2.data.allBooks} show={page === "books"} />

      <NewBook setError={notify} show={page === "add"} />
    </div>
  );
};

export default App;
