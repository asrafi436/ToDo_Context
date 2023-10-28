import React, { createContext } from "react";
import { useState } from "react";

export const CrudContext = createContext();

const CrudProvider = ({ children }) => {
  const [names, setNames] = useState([
    { id: 1, name: "Eat" },
    { id: 2, name: "Sleep" },
  ]);
  const [addname, setAddname] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [update, setUpdate] = useState(null);

  const addHandler = (e) => {
    e.preventDefault();
    if (!addname) {
      return alert("Please enter a name");
    }
    const newName = {
      id: names.length + 1,
      name: addname,
    };
    setNames([...names, newName]);
    setAddname("");
  };

  const updateHandler = (e) => {
    e.preventDefault();
    if (!addname) {
      return alert("Please enter a name");
    }
    const updatedName = names.map((name) => {
      if (name.id === update.id) {
        return { ...name, name: addname };
      }
      return name;
    });
    setNames(updatedName);
    setEditMode(false);
    setUpdate(null);
    setAddname("");
  };

  const deleteHandler = (id) => {
    setNames(names.filter((name) => name.id !== id));
  };

  const editHandler = (name) => {
    setAddname(name.name);
    setEditMode(true);
    setUpdate(name);
  };

  const contextValue = {
    names,
    setNames,
    addname,
    setAddname,
    editMode,
    setEditMode,
    update,
    setUpdate,
    addHandler,
    updateHandler,
    deleteHandler,
    editHandler,

};
  return (
    <div>
      <CrudContext.Provider value={contextValue}>{children}</CrudContext.Provider>
    </div>
  );
};

export default CrudProvider;
