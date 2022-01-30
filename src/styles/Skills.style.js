import styled from "styled-components";

export const DivWrapper = styled.div`
  max-height: 500px;
  margin-left: 15vh;
  margin-right: 15vh;
  margin-top: 10vh;
  text-align: center;
  
  /* @media (max-width: 768px) {
    margin: 8rem 5rem 5rem 5rem;
  }
  @media (max-width: 425px) {
    margin-left: 5vh;
    margin-right: 3vh;
    margin-top: 2rem;
  } */
`;
export const Text = styled.h2`
  margin-bottom: 15px;
 font-size: 7vw;
  top: 30px;
  margin-left: 2%;
  color: #d8d8d8;
opacity: 0.6;
  margin-top: 0;
text-align: center;
`;

export const Icons = styled.div`
  height: 60%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 1em;
  row-gap: 3rem;
  justify-items: center;
  align-items: center;
  img {
    margin-top: 1vh;
    width: 5vw;
  }

  /* @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 1rem;
    row-gap: 4rem;
    img {
      margin-top: -1vh;
      padding: 1rem 2rem;
      width: 14vw;
    }
    .white-circle {
      margin-top: -1vh;
      padding: 1rem 2rem;
      width: 14vw;
    }
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1rem;
    row-gap: 1rem;
    img {
      margin-top: -1vh;
      padding: 1rem 2rem;
      width: 25vw;
    }
    .white-circle {
      margin-top: -1vh;
      padding: 1rem 2rem;
      width: 25vw;
    }
  } */
`;
