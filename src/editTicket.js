import React, { useState } from "react";

const EditTicket = (props) => {
  const [ticket, setTicket] = useState(props.current);

  React.useEffect(() => {
    setTicket(props.current);
  }, [props]);

  const changeInput = (event) => {
    const { name, value } = event.target;

    setTicket({ ...ticket, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        props.updateTicket(ticket.id, ticket);
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
          onChange={changeInput}
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
          onChange={changeInput}
        />
      </div>
      <button type="submit" className="btn btn-outline-primary">
        Update Ticket
      </button>
      <button
        type="button"
        onClick={() => props.setEditing(false)}
        className="button muted-button btn btn-danger"
      >
        Cancel
      </button>
    </form>
  );
};

export default EditTicket;
