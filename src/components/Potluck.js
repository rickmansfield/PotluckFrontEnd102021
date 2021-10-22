import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utilities/axiosWithAuth";
import { useParams } from "react-router";
import PotluckItems from "./PotluckItems";

// Styling
import { Jumbotron } from "reactstrap";

import styled from "styled-components";

const StyledPotluck = styled.div`
  width: max-content;
  min-width: 35%;
  margin: 2rem auto;
  padding: 5%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px,
    rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;

  h1 {
    text-align: center;
    padding-bottom: 4%;
  }

  p {
    text-align: center;
    line-height: 2.5rem;
  }

  button {
    margin: 4% 0;
  }

  form {
    input:nth-of-type(1) {
      margin-bottom: 1rem;
    }
  }

  .foodsContainer {
    .foodItem {
      display: flex;
      justify-content: space-between;
      align-items: center;

      padding: 0.5rem 2rem;
      border-radius: 0.5rem;

      p {
        margin: 0;
        margin-right: 2%;
      }

      height: max-content;
      width: 100%;
      border: 2px solid var(--black);

      margin: 2% 0;

      .delete-item-container {
        &:hover {
          cursor: pointer;
        }
        img {
          height: 20px;
          aspect-ratio: 1;
        }
      }
    }
  }

  @media (max-width: 770px) {
    width: 70%;
  }
`;

export default function Potluck() {
  const { id } = useParams();
  const [potluckName, setPotluckName] = useState([]);
  const [potluck, setPotluck] = useState([]);

  const options = { month: "long", day: "numeric", year: "numeric" };

  const formatDate = (date) => {
    if (!date) return "";
    const day = date.slice(8, 10);
    const month = date.slice(5, 7);
    const year = date.slice(0, 4);

    return new Date(year, month, day)
      .toLocaleDateString("en-US", options)
      .replaceAll(",", "");
  };

  const formatTime = (time) => {
    if (!time) return "";
    const hour = time.slice(0, 2);
    const minutes = time.slice(3, 5);
    const timeString = new Date(0, 0, 0, hour, minutes);

    return timeString.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  let formattedDate = formatDate(potluck?.potluck_date?.slice(0, 10));

  let formattedTime = formatTime(potluck?.potluck_time);

  useEffect(() => {
    axiosWithAuth()
      .get(`/potlucks/${id}`)
      .then((res) => {
        setPotluckName(res.data);
      })
      .catch((err) => console.log({ err }));
  }, [id]);

  useEffect(() => {
    axiosWithAuth()
      .get(`/potlucks/${id}`)
      .then((res) => {
        setPotluck(res.data.details);
      });
  },[id]);

  

  return (
    <StyledPotluck>
      <Jumbotron>
        {<h1>{potluckName.potluck_name}</h1>}
        {
          <p>
            {potluck.potluck_description}
            <br />
            {formattedDate}
            <br />
            {formattedTime}

            <br />
            {potluck.potluck_location}
          </p>
        }
      </Jumbotron>
      <PotluckItems className="addItemsContainer" />
    </StyledPotluck>
  );
}
