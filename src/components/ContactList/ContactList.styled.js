import styled from '@emotion/styled';

export const ContactsList = styled.ul`
  display: inline-flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const Contact = styled.li`
  display: flex;
  border-bottom: 1px solid;
`;

export const ContactName = styled.p`
  min-width: 250px;
`;

export const ContactPhone = styled.p`
  min-width: 180px;
`;

export const Button = styled.button`
  :hover {
    background-color: red;
  }
`;
