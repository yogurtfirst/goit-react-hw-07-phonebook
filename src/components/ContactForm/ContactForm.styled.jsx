import styled from '@emotion/styled';

export const ContactWrapper = styled.form`
    display: flex;
    // flex-direction: column;
    justify-content: space-between;
    align-items: baseline;
    gap: 5px;
    flex-wrap: wrap;
    width: 100%;
    padding: 14px;
    border: 1px solid black;
    border-radius: 12px;
`;

export const Label = styled.label`
    font-size: 14px;
`;

export const Input = styled.input`
    width: 70%;
    padding: 6px;
    border-radius: 10px;
    font-size: 14px;
`;

export const Button = styled.button`
    margin: auto;
    padding: 6px;
    border-radius: 16px;
    :hover,
    :focus {
        background-color: rgb(35, 149, 207);
        color: white;
    }
`;