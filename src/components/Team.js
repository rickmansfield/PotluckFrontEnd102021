import React from "react";
import styled from "styled-components";
import rick from "../assets/Images/MeetTeam/rick.png";
import collyn from "../assets/Images/MeetTeam/Collyn.jpeg";
import erik from "../assets/Images/MeetTeam/erik.png";
import richard from "../assets/Images/MeetTeam/richard.jpg";
import jared from "../assets/Images/MeetTeam/jared.jpg";

const StyledTeam = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 550px) {
    .cardsContainer {
      .card {
        img {
          -webkit-filter: grayscale(0%);

          &:hover {
            filter: none;
            transform: none;
          }
        }
      }
    }
  }

  @media (min-height: 700px) {
    height: calc(100vh - 210px);
  }

  @media (max-width: 2070px) {
    .cardsContainer {
      .card {
        img {
          height: 200px;
          width: 200px;
        }
      }
    }
  }

  @media (max-width: 1330px) {
    .cardsContainer {
      .card {
        h2 {
          white-space: nowrap;
        }
        img {
          height: 100px;
          width: 100px;
        }
      }
    }
  }

  @media (max-width: 550px) {
    height: 100%;

    .cardsContainer {
      width: 100%;

      .card {
        padding: 0;
        margin: 0;
        width: 100%;
        height: max-content;
      }
    }
  }
`;

const StyledHeader = styled.div`
  h1 {
    font-size: 3rem;
    line-height: 3.5rem;
  }
  .teamHeader {
    text-align: center;
    margin-top: 10%;
    margin-bottom: 25%;
    padding-bottom: 0.5%;
    background-color: #FFFFF;
    padding-top: 2%;
  }
`;

const StyledCards = styled.div`
    margin: 0 auto;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-wrap: wrap;
    background-color: var(--white);

    
.card{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 2rem;
    
    width: max-content;
    height: 30%;
    margin-top: 1%;
    border: none;

    &:hover{
      
      img{
        transform: scale(1.1);
        -webkit-transform-origin: 0% 100%;
        border: none;

          filter: none;
          -webkit-filter: grayscale(0%);
      }
    }

    

    img{
        height: 350px;
        width: 350px;
        border-radius: 50%;
        filter: gray; /* IE6-9 */
        -webkit-filter: grayscale(100%); /* Chrome 19+ & Safari 6+ */
        -webkit-transition: 0.3s;
       
       
    }
 
    h2{
        margin-top: 1.5%;
        padding: 1%;
        font-size: 1.5rem;
    }
    p{
        padding: 2%;
        font-size: 1rem;
        width: max-content;
        padding-bottom: 1%;
    }
    }

}
`;

export default function Team() {
  return (
    <StyledTeam>
      <StyledHeader>
        <div className="teamHeader">
          <h1>Meet the Team!</h1>
        </div>
      </StyledHeader>

      <div></div>
      <StyledCards className="cardsContainer">
        <div className="card">
          <img classNames="card-photo" src={richard} alt="Richard Perry" />
          <h2>Richard Perry</h2>
          <p>Frontend Development</p>
        </div>

        <div className="card">
          <img classNames="card-photo" src={jared} alt="Jared Hall" />
          <h2>Jared Hall</h2>
          <p>Frontend Development</p>
        </div>

        <div className="card">
          <img className="card-photo" src={rick} alt=" Rick Mansfield" />
          <h2>Rick Mansfield</h2>
          <p>Backend Development</p>
        </div>

        <div className="card">
          <img className="card-photo" src={erik} alt=" Erik Bahena" />
          <h2>Erik Bahena</h2>
          <p>Frontend Development</p>
        </div>

        <div className="card">
          <img className="card-photo" src={collyn} alt=" Collyn Godlewski" />
          <h2>Collyn Godlewski</h2>
          <p>Frontend Development</p>
        </div>
      </StyledCards>
    </StyledTeam>
  );
}
