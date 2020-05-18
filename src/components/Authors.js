import React, { useEffect, useState } from "react";

const Authors = (props) => {
  if (!props.show) {
    return null;
  }

  const [authors, setAuthors] = useState([]);
  //defining the initial state as empty array is important, as initial rendering rendering requires the .map function to be valid, as null would not work.
  useEffect(() => {
    setAuthors(props.authors);
  });

  // const authors = [];

  return (
    <div>
      <h2>authors</h2>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>born</th>
            <th>books</th>
          </tr>
          {authors.map((a) => (
            <tr key={a.name}>
              <td>{a.name}</td>
              <td>{a.born}</td>
              <td>{a.bookCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Authors;
