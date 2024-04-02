import React, { useContext, useState } from "react";
import { UserTicketContext } from "../contexts/UserTIcketContext";
import './CreateTicketForm.css'

const CreateTicketForm = () => {
  const { createTicket } = useContext(UserTicketContext);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a FormData object to send file along with other data
    const formData = new FormData();
    formData.append("title", title);
    formData.append("body", body);
    formData.append("file", file);
    // Call the createTicket function with form data
    await createTicket(formData);

    // Clear form fields after submission
    setTitle("");
    setBody("");
    setFile(null);
  };

  return (
    <div className="container text-light" id="TicketGen">
      <h2>Submit Your Query Here</h2>
      <form onSubmit={handleSubmit}>
        <table></table>
        <div>
          <label htmlFor="title">Create Title</label><br />
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

        </div>

        <div>
          <label htmlFor="body">Type Your Query Here</label><br />
          <textarea
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="file" id="snapshot"><span>Click here to Upload Snapshot</span></label><br />
          <input type="file" id="file" onChange={handleFileChange} />
          </div>

      <div> 
        <button className="btn btn-outline-light " type="submit">Create Ticket</button>
        </div>
       
      </form>
    </div>

  );
};

export default CreateTicketForm;
