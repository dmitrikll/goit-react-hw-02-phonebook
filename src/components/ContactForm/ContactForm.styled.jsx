import styled from 'styled-components';

export const Label = styled.label`
    display: block;
    margin-bottom: 5px;
    font-size: 18px;
    color: #000000;
`;

export const Input = styled.input`
    display: block;
    width: 100%;
    height: 32px;
    margin-top: 5px;
    margin-bottom: 10px;
    border: 1px solid #000000;
    border-radius: 8px;
    font-size: 16px;

    &:focus {
        box-shadow: 0px 0px 5px 0px #000000;
    }
`;

export const Button = styled.button`
    display: block;
    width: 120px;
    margin-top: 16px;
    margin-right: 0px;
    margin-left: auto;
    padding: 10px;
    font-size: 16px;
    font-weight: bold;
    color: #000000;
    border: 1px solid #000000;
    border-radius: 8px;

    &:hover,
    :focus {
        cursor: pointer;
        background-color: #006400;
        color: #ffffff;
        box-shadow: 0px 0px 5px 0px #006400;
    }
`;
