import styled from "styled-components";

export const Label = styled.label`
    display: block;
    margin-bottom: 5px;
    font-size: 18px;
    color: #000000;
`;

export const Input = styled.input`
    display: block;
    width: 200px;
    height: 24px;
    margin-top: 5px;
    margin-bottom: 10px;
`;

export const Button = styled.button`
    width: 120px;
    margin-top: 10px;
    padding: 10px;
    font-size: 16px;
    font-weight: bold;
    color: #000000;
    border: 1px solid #000000;
    border-radius: 4px;

    &:hover {
    cursor: pointer;
    background-color: #006400;
    color: #ffffff;
    box-shadow: 0px 0px 7px 0px #006400;
    }
`;