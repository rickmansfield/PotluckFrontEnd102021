import React from "react";
import styled from "styled-components";
import { Jumbotron, Button } from "reactstrap";
import { Link } from "react-router-dom";

const StyledEvent = styled.div`
  width: max-content;
  padding: 5%;
  margin: 2rem 1rem;
  border-radius: 0.4rem;

  box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px,
    rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;

  .buttons-container {
    display: flex;
    height: 3%;
  }

  button {
    height: inherit;
    margin-right: 1rem;
  }

  @media (max-width: 1450px) {
    margin: 2rem auto;
    flex: 0 0 15%;
  }

  @media (max-width: 630px) {
    flex: 0 0 90%;
    margin: 2rem auto;
  }
`;

export default function Event(props) {
  const { potluck, handleDelete } = props;

  const options = { month: "long", day: "numeric", year: "numeric" };

  const formatDate = (date) => {
    const day = date.slice(8, 10);
    const month = date.slice(5, 7);
    const year = date.slice(0, 4);

    return new Date(year, month, day)
      .toLocaleDateString("en-US", options)
      .replaceAll(",", "");
  };

  const formatTime = (time) => {
    const hour = time.slice(0, 2);
    const minutes = time.slice(3, 5);
    const timeString = new Date(0, 0, 0, hour, minutes);

    return timeString.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  let formattedDate = formatDate(potluck.potluck_date.slice(0, 10));
  let formattedTime = formatTime(potluck.potluck_time);

  if (!potluck) {
    return <h3>Working on getting event information...</h3>;
  }

  return (
    <StyledEvent>
      <Jumbotron>
        <h2>{potluck.potluck_name}</h2>
        <p>{potluck.potluck_description}</p>

        <p>
          Where: {potluck.potluck_location} <br></br>
          When: At {formattedTime}, <br></br> On {formattedDate}
        </p>

        <hr className="my-3" />
        <div className="buttons-container">
          <Link to={`/edit/${potluck.potluck_id}`}>
            <Button color="primary">Edit</Button>
          </Link>
          <Button onClick={handleDelete} color="danger">
            Delete
          </Button>
          <Link to={`/upcomingevents/${potluck.potluck_id}`}>
            <Button type="button">View</Button>
          </Link>
        </div>
      </Jumbotron>
    </StyledEvent>
  );
}
