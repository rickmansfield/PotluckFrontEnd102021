import React, { useEffect, useState } from "react";
import Event from "./Event";
import axiosWithAuth from "../utilities/axiosWithAuth";
import { useHistory } from "react-router-dom";

// Styling
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.css";
import { Button } from "reactstrap";

  //   Styling
  const StyledUpcomingEvents = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      text-align: center;
      margin-top: 5%;
    }

    .events-container {
      display: flex;

      justify-content: center;
      flex-wrap: wrap;
      width: 90%;
      margin: 0 auto;
    }

    .createNew {
      background-color: var(--accent-color);
      border: none;
      width: max-content;
      margin-bottom: 2rem;
      &:hover {
        background-color: var(--accent-color-dark);
      }
    }
  `;
  
export default function UpcomingEvents() {
  const { push } = useHistory();
  const [potlucks, setPotlucks] = useState([]);

  const getPotlucks = () => {
    axiosWithAuth()
      .get("/potlucks")
      .then((res) => {
        setPotlucks(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  useEffect(() => {
    getPotlucks();
  }, []);

  const deletePotluck = (id) => {
    setPotlucks(potlucks.filter((potluck) => potluck.potluck_id !== +id));
  };

  const handleDelete = (id) => {
    axiosWithAuth()
      .delete(`/potlucks/${id}`)
      .then((resp) => {
        deletePotluck(id);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const handleAdd = () => {
    push("/add");
  };


  return (
    <StyledUpcomingEvents>
      <h1>Upcoming Potlucks</h1>

      <div className="events-container">
        {potlucks.map((potluck) => {
          return (
            <Event
              key={potluck.potluck_id}
              potluck={potluck}
              handleDelete={() => {
                handleDelete(potluck.potluck_id);
              }}
            />
          );
        })}
      </div>

      <Button className="createNew" onClick={handleAdd}>
        Create a New Potluck Event
      </Button>
    </StyledUpcomingEvents>
  );
}
