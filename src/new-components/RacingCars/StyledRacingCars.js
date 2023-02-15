import styled from "@emotion/styled";

const RacingCarsCollection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
const CollectionButton = styled.button`
  font-size: 36px;
  padding: 30px;
  margin-right: 50px;
  margin-top: 50px;
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
const RacingCarsTitle = styled.h1`
  color: #3c7e17;
  font-size: 92px;
  font-weight: 400;
  margin-bottom: 50px;
  margin-top: 35px;
  text-align: center;
`;

const CarModalTitle = styled.h1`
  text-align: center;
  color: white;
  font-size: 42px;
  font-weight: 200;
`;

export {
  RacingCarsCollection,
  CollectionButton,
  RacingCarsTitle,
  CarModalTitle,
};
