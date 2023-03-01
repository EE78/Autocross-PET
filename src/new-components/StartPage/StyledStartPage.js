import styled from "@emotion/styled";

const StartPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 50px;
  padding-right: 50px;
`;

const WrapperText = styled.p`
  color: white;
  font-size: 45px;
  font-weight: 200;
  margin: 0;
`;

const MenuTitle = styled.h1`
  color: white;
  font-size: 92px;
  font-weight: 400;
  margin-bottom: 0;
  margin-top: 0;
`;
const MenuLink = styled.a`
  color: white;
  font-size: 42px;
  font-weight: 200;
  margin: 0px 10px 33px 0px;
  cursor: pointer;
  text-decoration: underline;
  &:hover {
    opacity: 0.5;
    font-weight: 400;
    color: rgb(73, 138, 235);
  }
`;
const WrapperButton = styled.button`
  font-size: 36px;
  padding: 30px;
  margin-bottom: 82px;
  border-radius: 10px;
  background-color: rgba(28, 28, 28, 0);
  border: 2px rgb(60, 126, 23) solid;
  color: #3c7e17;
  cursor: pointer;
  text-align: center;
  &:hover {
    opacity: 0.75;
  }
`;

export { WrapperText, MenuTitle, StartPageWrapper, WrapperButton, MenuLink };
