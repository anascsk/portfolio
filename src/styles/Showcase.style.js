import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  margin-bottom: 50px;
`;
export const Left = styled.div`
  flex: 40%;
  text-align: left;
  margin: auto;

  padding-left: 50px;
  color: #949294;

  h1 {
    font-size: 90px;
    top: 30px;
    margin-left: 2%;
    color: #d8d8d8;
  }

  h2 {
    font-size: 45px;
    color: #333133;
    margin-left: 15%;
    font-family: "Ubuntu", sans-serif;
  }

  p {
    font-size: 20px;
    margin-left: 20%;
  }
  span {
      font-size: 22px;
      margin-right: 5px;
      color: #949294;
  }
`;
export const H1 = styled.h1``;
export const H2 = styled.h2``;
export const P = styled.p``;
export const Center = styled.div`
  flex: 50%;
  text-align: center;
  margin: auto;
  opacity: 0.15;
`;
export const Right = styled.div`
  flex: 10%;
  display: flex;
  flex-direction: column;
  margin: auto;
  overflow: hidden;
  font-size: 60px;
  color: #705edb;

  overflow: hidden;
`;
export const SocialIcons = styled.div`
  cursor: pointer;
  &:hover {
    color: #7288e7;
  }
`;
