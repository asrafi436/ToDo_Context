import React from "react";
import { useContext } from "react";
import { CrudContext } from "../context/Crud";

export const Form = () => {
  const { addname, setAddname, editMode, updateHandler, addHandler } = useContext(CrudContext);

  return (
    <div>
      <form className="input-form">
        <input
          type="text"
          value={addname}
          onChange={(e) => setAddname(e.target.value)}
        />
        <button type="submit" onClick={editMode ? updateHandler : addHandler}>
          {editMode ? "Update" : "Add Name"}
        </button>
      </form>
    </div>
  );
};
