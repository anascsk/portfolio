import styled from "styled-components/macro";
import { mobile, tablet } from "../responsive";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  margin-top: 60px;
  width: 100%;
  padding: 50px 0px 60px;
  background-color: #784cfb;
  border-radius: 0 0 40px 40px;
`;
export const H2 = styled.h2`
  font-size: 90px;
  top: 0px;
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
  @media (max-width: 425px) {
    margin-top: 10vh;
    margin-bottom: 7vh;
    font-size: 3.5rem;
  }
`;
export const ContactBox = styled.div`
  width: 80%;
  padding: 15px;
  background-color: #fff;
  border-radius: 45px;
  padding: 60px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  font-family: "poppins", sans-serif;
  ${tablet({ flexDirection: "column" })}
  h3 {
    font-size: 60px; 
  display: inline-block;
  padding-bottom: 1rem;
  line-height: 1;
  margin-bottom: 0.6rem;
  ${mobile({ fontSize: "30px", paddingBottom: "0px", marginLeft: "15%"  })}
  }
  p {
    font-size: 23px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
      ${mobile({ fontSize: "15px", paddingBotton: "0px", marginLeft: "15%"  })}
  }
`;

export const ContactInfo = styled.div`
  margin-right: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
`;
export const InfoWrap = styled.div`
  display: flex;
  padding: 25px;
  font-size: 20px;
  ${mobile({ marginLeft: "5%", padding: "10px" })}

  
`;
export const ContactForm = styled.form`
 
  width: 40%;
  margin-right: 40px;
  display: flex;
  flex-direction: column;
  ${mobile({ width: "60%" })}
 
`;

export const ContactIcon = styled.div`
  padding-right: 20px;
  font-size: 30px;
  color: #784cfb;
`;
export const Row = styled.div`
  width: 100%;
  
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  grid-column-gap: 0.6rem;

  input {
    padding: 1.2rem 2.1rem;
    margin: 0.6rem 0;
    border: none;
    outline: none;
    background: #f3f3f3;
    border-radius: 4rem;
    font-weight: 600;
    font-size: 1.25rem;
    transition: 0.3s;
    ${mobile({ padding: ".6 rem 1 rem", fontWeight: "300", fontSize: ".75rem", borderRadius: "1rem" })}

  }
  textarea {
    resize: none;
    min-height: 200px;
    border-radius: 15px;
    padding: 1.2rem 2.1rem;
    margin: 0.6rem 0;
    border: none;
    outline: none;
    background: #f3f3f3;
    border-radius: 4rem;
    font-weight: 600;
    font-size: 1.25rem;
    transition: 0.3s;
    ${mobile({ minHeight: "100px", borderRadius: "1rem" })}

    
    &:focus {
      border: none;
    }
  }
`;
