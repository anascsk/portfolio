import styled from "styled-components";

export const ProjectContainer = styled.div`
width: 97vw;
  display: grid;
  
  grid-template-columns: 1fr 1fr;
  grid-gap: 15px;
  justify-content: center;
  margin: 1rem;
  @media (max-width: 768px) {
    grid-template-columns: auto;
    margin: 0rem;
  }
`;

export const H2 = styled.h2`
  font-size: 90px;
  top: 30px;
  margin-left: 2%;
  color: #d8d8d8;

  opacity: 0.6;
  margin-top: 0;

  text-align: center;
  @media (max-width: 768px) {
    margin-top: 2vh;
    margin-bottom: 7vh;
    font-size: 5rem;
  }
  @media (max-width: 480px) {
    margin-top: 10vh;
    margin-bottom: 7vh;
    font-size: 3.5rem;
  }
`;
