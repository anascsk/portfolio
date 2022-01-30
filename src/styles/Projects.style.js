import styled from "styled-components";
export const Container = styled.div`
  margin-top: 7vw;
  margin-left: 2%;
`;
export const ProjectContainer = styled.div`
  width: 95vw;
  display: grid;

  grid-template-columns: 1fr 1fr;
  grid-gap: 15px;

  margin: 1rem;
  @media (max-width: 768px) {
    grid-template-columns: auto;
    margin: 0rem;
  }
`;

export const H2 = styled.h2`
  margin-bottom: 15px;
  font-size: 7vw;
  top: 30px;
  margin-left: 2%;
  color: #d8d8d8;
  opacity: 0.6;
  margin-top: 0;
  text-align: center;
  
`;
