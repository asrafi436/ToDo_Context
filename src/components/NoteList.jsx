import React from "react";
import { useContext } from "react";
import { CrudContext } from "../context/Crud";



export const NoteList = () => {

  const {names,deleteHandler,editHandler} = useContext(CrudContext);

  return (
    <div>
      <ul>
        {names.map((name) => (
          <li key={name.id}>
            <span>
              {name.id} {name.name}
            </span>
            <button onClick={() => deleteHandler(name.id)}>Delete</button>
            <button onClick={() => editHandler(name)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
