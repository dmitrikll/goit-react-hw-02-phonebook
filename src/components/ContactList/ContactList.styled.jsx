import styled from "styled-components";

export const List = styled.ul`
padding-left: 0px;
list-style: none;
`;

export const Item = styled.li`
display: flex;
justify-content: space-between;
align-items: center;
margin-left: 0px;
list-style: none;
`;

export const Button = styled.button`
width: 120px;
height: 35px;
margin-top: 10px;
padding: 2px;
font-size: 14px;
font-weight: bold;
color: #000000;
border: 1px solid #000000;
border-radius: 4px;

&:hover {
    cursor: pointer;
    background-color: #FF0000;
    color: #FFFFFF;
    box-shadow: 0px 0px 7px 0px #FF0000;
}
`;