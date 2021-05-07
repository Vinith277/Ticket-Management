import React, { useState } from "react";

const AddTicket = (props) => {
  const refresh = { id: null, name: "", author: "" };
  const [ticket, setTicket] = useState(refresh);

  const changeTicket = (event) => {
    const { name, value } = event.target;
    setTicket({ ...ticket, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!ticket.name || !ticket.author) return;

        props.addTicket(ticket);
        setTicket(refresh);
      }}
    >
      <div className="form-group">
        <label for="name">Name</label>
        <input
          id="name"
          className="form-control"
          type="text"
          name="name"
          value={ticket.name}
          onChange={changeTicket}
        />
      </div>
      <div className="form-group">
        <label for="author">author</label>
        <input
          id="author"
          className="form-control"
          type="text"
          name="author"
          value={ticket.author}
          onChange={changeTicket}
        />
      </div>
      <button type="submit" className="btn btn-outline-success">
        Add new Ticket
      </button>
    </form>
  );
};

export default AddTicket;
