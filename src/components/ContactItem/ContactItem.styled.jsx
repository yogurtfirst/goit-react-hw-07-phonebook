import styled from '@emotion/styled';

export const Contact = styled.li`
    margin-top: 10px;
    padding: 5px 8px;
    border: 0.5px solid grey;
    border-radius: 40px;
    display: flex;
    justify-content: space-between;
    background-color: #8ec8bd;
`;

export const Avatar = styled.div`
    border: 0.5px solid #4c8277;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #dce9a3;
`;

export const Name = styled.p`
    margin: 0;
    padding: 0;
    text-transform: capitalize;
    font-size: 18px;
    font-weight: 600;
`;

export const Phone = styled.p`
    margin: 0;
    padding: 0;
    font-size: 14px;
    font-weight: 400;
`;

export const Btn = styled.button`
    border: 0.5px solid #4c8277;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
        :hover,
        :focus {
            background-color: rgb(35, 149, 207);
            color: white;
        }
`;