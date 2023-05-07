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

export const ContactInfo = styled.p`
  min-width: 175px;
`;

export const Button = styled.button`
  :hover {
    background-color: red;
  }
`;
