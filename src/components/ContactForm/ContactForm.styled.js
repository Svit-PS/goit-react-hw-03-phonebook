import styled from 'styled-components';

export const FormSt = styled.form`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  width: 300px;
  gap: 20px;
  padding: 15px;

  button {
    &:hover {
      cursor: pointer;
      background-color: #969191;
    }
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-weight: 600;
`;
