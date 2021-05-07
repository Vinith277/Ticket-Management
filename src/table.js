import React from "react";

const TicketTable = (props) => (
  <table className="table table-striped table-light">
    <thead>
      <tr>
        <th>Name</th>
        <th>author</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.tickets.length > 0 ? (
        props.tickets.map((ticket) => (
          <tr key={ticket.id}>
            <td>{ticket.name}</td>
            <td>{ticket.author}</td>
            <td>
              <button
                className="btn btn-outline-success"
                type="button"
                onClick={() => {
                  props.editRow(ticket);
                }}
              >
                Edit
              </button>
              <button
                type="button"
                className="btn btn-outline-danger"
                onClick={() => props.deleteTicket(ticket.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No Tickets Found</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default TicketTable;
