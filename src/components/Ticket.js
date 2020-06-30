import React from "react";
import PropTypes from "prop-types";

function Ticket(props){
  return (
    <React.fragment>
      <h3>{props.location} - {props.name}</h3>
      <p><em>{props.issue}</em></p>
      <hr/>
    </React.fragment>
  );
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string.isRequired
};

export default Ticket;