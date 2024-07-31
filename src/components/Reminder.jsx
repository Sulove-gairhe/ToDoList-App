import React, { useState } from "react";

function Reminder() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
    
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, description, date, time });
    // Add form submission logic here
  };

  return (
    <div className="reminder-form">
      <h2>Reminder</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title :</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Read Programming Book"
          />
        </div>
        <div className="form-group">
          <label>Description :</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Chapter 12"
          />
        </div>
        <div className="form-group">
          <label>Date :</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Time :</label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Reminder;
