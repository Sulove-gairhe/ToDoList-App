import React, { useState } from "react";

function CreateArea(props) {
  const [storeArray, storeArrayHolder] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    storeArrayHolder((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function addNote(event) {
    event.preventDefault();
    props.onAdd(storeArray);
    storeArrayHolder({ title: "", content: "" });
  }
  return (
    <div>
      <form>
        <input
          name="title"
          value={storeArray.title}
          placeholder="Title"
          onChange={handleChange}
        />
        <textarea
          name="content"
          value={storeArray.content}
          placeholder="Take a note..."
          rows="3"
          onChange={handleChange}
        />
        <button onClick={addNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
