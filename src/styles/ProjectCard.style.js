import styled from "styled-components";
import { mobile } from "../responsive";

export const CardContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
width: 98%;
max-width: 960px;
background-color: #f0f5fa;  
box-shadow: 1px 3px 32px -7px black;
border-radius:10px;
text-align: center;
overflow: hidden;
&:hover{

}
img {
    width: 97%;
    border-radius: 10px;
    margin-top: .7rem; 
    box-shadow: 1px 1px 25px -1px gray;
    transition: transform .9s;
    &:hover{
        transform: scale(1.03);
    }
}
@media (max-width: 768px){
    width: 100%;
}
`
export const Flex = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
max-width: 100%;
@media (max-width: 768px){
    font-size: .5rem;
    
}

`
export const CardContent = styled.div`
text-align: left;
max-width: 97%;
h3 {
    margin: 2rem;
    padding: 1rem;
    font-size: 1.5rem;
    color: #6e3bc2;
    
    ${mobile({ fontSize: "1 rem",  })}
  
}
p {
    margin: 2rem;
    padding: 0 ;
    font-size: 1.2rem;
    font-weight: 400;
    color: #343a40;
    @media (max-width: 768px){
        font-size: 1.4rem;
    }
    @media (max-width: 425px){
        font-size: 1rem;
        padding: 0;
    }
}
h6 {
    margin: 1rem ;
    padding: 1rem;
    font-size: .8rem;
    font-weight: 700;
    @media (max-width: 768px){
        font-size: 1rem;
    }
    @media (max-width: 425px){
        font-size: 1.1rem;
    }
}
`
export const CardLink = styled.div`
.icon{
    font-size: 2rem;
    color: #343a40;
    margin: 2.5rem 2rem 1rem .5rem;
    @media (max-width: 425px){
        margin: .7rem 1rem 1rem 2rem;
    }
    &:hover{
        color: #705edb;
        transition: all 0.5s ease;
    }
}
`
