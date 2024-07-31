import React from "react";
import BookmarkRemoveIcon from "@mui/icons-material/BookmarkRemove";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
        <BookmarkRemoveIcon />
      </button>
    </div>
  );
}

export default Note;
