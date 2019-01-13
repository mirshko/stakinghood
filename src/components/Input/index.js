import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  margin: 24px 0;
  padding: 12px 16px;
  border-radius: 4px;
  border: none;
  line-height: 1.5;
  font-size: 16px;
  background-color: var(--brand-light);
  color: #000;

  ::placeholder {
    color: #000;
  }
`;

export default Input;
