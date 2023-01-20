import styled from 'styled-components';

export const Label = styled.label`
    display: block;
    margin-bottom: 5px;
    font-size: 18px;
    color: #000000;
`;

export const Input = styled.input`
    display: block;
    width: 70%;
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
