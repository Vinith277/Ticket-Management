import React, { useState, Fragment } from "react";
import AddTicket from "./addTicket";
import EditTicket from "./editTicket";
import TicketTable from "./table";

const App = () => {
  const refresh = { id: null, name: "", author: "" };

  const [tickets, setTickets] = useState([]);
  const [current, setCurrent] = useState(refresh);
  const [editing, setEditing] = useState(false);
  React.useEffect(() => {
    fetch("https://601b76f659fa2c0017560a8a.mockapi.io/data/")
      .then((resp) => resp.json())
      .then((datas) => {
        setTickets(datas);
        console.log(tickets);
      });
  }, []);

  const addTicket = (ticket) => {
    ticket.id = tickets.length + 1;
    fetch("https://601b76f659fa2c0017560a8a.mockapi.io/data/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ticket),
    })
      .then((res) => res.json())
      .then((dataa) => {
        setTickets([...tickets, ticket]);
        console.log(tickets);
      });
  };

  const deleteTicket = (id) => {
    setEditing(false);
    fetch("https://601b76f659fa2c0017560a8a.mockapi.io/data/" + id, {
      method: "DELETE",
    })
      .then((resp) => resp.json())
      .then(() => {
        setTickets(tickets.filter((ticket) => ticket.id !== id));
      });
  };

  const updateTicket = (id, updatedTicket) => {
    setEditing(false);
    fetch("https://601b76f659fa2c0017560a8a.mockapi.io/data/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(() => {
        setTickets(
          tickets.map((ticket) => (ticket.id === id ? updatedTicket : ticket))
        );
      });
  };

  const editRow = (ticket) => {
    setEditing(true);
    setCurrent({ id: ticket.id, name: ticket.name, author: ticket.author });
  };

  return (
    <div className="container p-4">
      <h1>Ticket Management</h1>
      <div>
        {editing ? (
          <Fragment>
            <h2>Edit Ticket</h2>
            <EditTicket
              editing={editing}
              setEditing={setEditing}
              current={current}
              updateTicket={updateTicket}
            />
          </Fragment>
        ) : (
          <Fragment>
            <h2>Add ticket</h2>
            <AddTicket addTicket={addTicket} />
          </Fragment>
        )}
      </div>
      <div>
        <h2>View Ticket</h2>
        <TicketTable
          tickets={tickets}
          editRow={editRow}
          deleteTicket={deleteTicket}
        />
      </div>
    </div>
  );
};
export default App;
