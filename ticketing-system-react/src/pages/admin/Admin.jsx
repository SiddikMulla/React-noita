import React, { useContext, useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import Ticket from "../../components/Ticket";
import TicketForm from "../../components/CreateTicketForm";
import { useAuth } from "../../hooks/AuthProvider";
import { AdminTicketContext } from "../../contexts/AdminTicketContext";
import { TechSupportContext } from "../../contexts/TechSupportContext";
import './Admin.css'

const AdminDash = () => {
  const auth = useAuth();

  const { tickets, updateTicketTechSupport, handleDeleteTicket } =
    useContext(AdminTicketContext);
  //console.log(tickets);
  const { techSupports } = useContext(TechSupportContext);

  const handleChangeTechSupport = (ticketId, techSupport) => {
    // Call the update function from TicketContext to change the assigned tech support

    updateTicketTechSupport(ticketId, techSupport);
  };

  const [currentState, setCurrentState] = useState(tickets);
  console.log("current state:", currentState);

  useEffect(() => {
    setCurrentState(tickets);
  }, [tickets]);

  return (
  <div className="text-light mt-5">
    <h1>Admin Dashboard</h1>
    <h2>All Tickets</h2>
    <div id="adminDiv">


      {currentState.map((ticket) => (
        <div >
          <Ticket
            key={ticket.id}
            title={ticket.title}
            body={ticket.body}
            assignedSupport={ticket.assignedSupport}
          />

          <select
            onChange={(e) =>
              handleChangeTechSupport(ticket.id, JSON.parse(e.target.value))
            }
            className="bg bg-primary text-light rounded-4"
          >
            <option value="">Select Tech Support</option>
            {techSupports.map((techSupport) => (
              <option
                key={techSupport.id}
                value={JSON.stringify({
                  id: techSupport.id,
                  email: techSupport.email,
                })}
              >
                {techSupport.email}
              </option>
            ))}
          </select> <br />
          <button className="btn btn-danger rounded-5" onClick={() => handleDeleteTicket(ticket.id)}>Delete</button>
        </div>
      ))}
    </div>
  </div>
  );

};

export default AdminDash;
