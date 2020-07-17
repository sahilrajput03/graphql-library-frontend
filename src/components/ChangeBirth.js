import React, { useState } from "react";
import { EDIT_AUTHOR, ALL_BOOKS, ALL_AUTHORS } from "../queries";
import { useMutation } from "@apollo/client";

const ChangeBirth = ({ authors }) => {
  const [name, setName] = useState("");
  const [born, setBorn] = useState("");

  const [editAuth] = useMutation(EDIT_AUTHOR, {
    refetchQueries: [{ query: ALL_AUTHORS }],
    onError: (error) => {
      console.log("$error:-", error);
      //joni's error position..worked in way to knowing that schema has to be identical in both backend and front end query schema. Shit!(some bad taste!!:P)
      props.setError(error.graphQLErrors[0].message);
    },
  });

  const submit = () => {
    event.preventDefault();

    editAuth({ variables: { name: selected, setBornTo: Number(born) } });

    // updaitng author with query to doo...blahh
    setBorn("");
    setName("");
  };

  const [selected, setSelected] = useState("Martin Fowler");
  // console.log({ selected });
  return (
    <div>
      <h2>Set birthyear</h2>
      <form onSubmit={submit}>
        {/* <input value={name} onChange={({ target }) => setName(target.value)} /> */}
        <select value={selected} onChange={({ target }) => setSelected(target.value)}>
          {authors.map((a, i) => (
            <option key={i} value={a.name}>
              {a.name}
            </option>
          ))}
        </select>
        <br></br>
        born: <input value={born} onChange={({ target }) => setBorn(target.value)} />
        <br></br>
        <button type="submit">Update author</button>
      </form>

      {/* <form onSubmit={submit}>
        <label>
          Pick your favorite flavor:
          <select value={selected} onChange={({ target }) => setSelected(target.value)}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form> */}
    </div>
  );
};
export default ChangeBirth;
