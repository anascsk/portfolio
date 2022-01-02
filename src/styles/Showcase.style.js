import styled from "styled-components";

export const Container = styled.div`
width: 100vw;
height: 90vh;
display: flex;

`
export const Left = styled.div`
flex: 40%;
text-align: left;
margin: auto;

padding-left: 50px;
color: 
#949294;

`
export const H1 = styled.h1`
font-size: 100px;
position: absolute;
top: 30px;
margin-left: 2%;
color: #d8d8d8;
`
export const H2 = styled.h2`
font-size: 50px;
color:#333133;
margin-left: 15%;
font-family: 'Ubuntu', sans-serif;
`
export const P = styled.p`
font-size: 20px;
margin-left: 20%;

`
export const Center = styled.div`
flex: 50%;
text-align: center;
margin: auto;
opacity: 0.15;
`
export const Right = styled.div`
flex: 10%;
display: flex;
flex-direction: column;
margin: auto;
overflow: hidden;
font-size: 60px;
color: #705edb;
cursor: pointer;
`