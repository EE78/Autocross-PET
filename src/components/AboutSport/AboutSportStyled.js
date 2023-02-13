import styled from "@emotion/styled";

const WrapperText = styled.p`
  color: white;
  font-size: 32px;
  font-weight: 200;
`;

const WrapperButton = styled.button`
  width: 370px;
  height: 90px;
  font-size: 28px;
  border-radius: 10px;
  background-color: rgba(28, 28, 28, 0);
  border: 2px rgb(73, 138, 235) solid;
  color: rgb(73, 138, 235);
  font-weight: 100;
  cursor: pointer;
  text-align: center;
  margin-top: 20px;
  &:hover {
    opacity: 0.75;
  }
`;

export { WrapperText, WrapperButton };
