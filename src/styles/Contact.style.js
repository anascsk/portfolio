import styled from "styled-components/macro";

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-content: center;
  margin-top: 60px;
  width: 100%;
  padding: 200px 0px 60px;
  background-color: #784cfb;
  border-radius: 0 0 40px 40px;
`;

export const ContactBox = styled.div`
  width: 80%;
  padding: 15px;
  background-color: #fff;
  border-radius: 45px;
  padding: 60px 0px;
  display: flex;
  justify-content: center;
  
  font-family: "poppins", sans-serif;
  h3 {
    font-size: 60px;

    
  display: inline-block;
  padding-bottom: 1rem;
  line-height: 1;

  margin-bottom: 0.6rem;
  }
  p {
    font-size: 23px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
`;

export const ContactInfo = styled.div`
  margin-right: 40px;
  display: flex;
  flex-direction: column;
  
  
`;
export const InfoWrap = styled.div`
  display: flex;
  padding: 25px;
  font-size: 20px;
  
`;
export const ContactForm = styled.form`
  margin-right: 40px;
  width: 40%;
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
    &:focus {
      border: none;
    }
  }
`;
