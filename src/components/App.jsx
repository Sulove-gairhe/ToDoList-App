import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [storeNewInput, storeNewInputHolder] = useState([]);

  function handleSubmit(storeArray) {
    storeNewInputHolder((prevValue) => {
      return [...prevValue, storeArray];
    });
  }
  function handleDeletion(indexToBeDeleted) {
    storeNewInputHolder((prevValue) => {
      return prevValue.filter((item, index) => index !== indexToBeDeleted);
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={handleSubmit} />
      {storeNewInput.map((toBePassedValue, index) => {
        return (
          <Note
            id={index}
            key={index}
            title={toBePassedValue.title}
            content={toBePassedValue.content}
            handleDeletion={handleDeletion}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
