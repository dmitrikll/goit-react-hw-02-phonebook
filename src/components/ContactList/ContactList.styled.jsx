import styled from 'styled-components';

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

export const ContactName = styled.p`
    font-size: 18px;
    font-style: italic;
    color: #800080;
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

    &:hover,
    :focus {
        cursor: pointer;
        background-color: #ff0000;
        color: #ffffff;
        box-shadow: 0px 0px 5px 0px #ff0000;
    }
`;
