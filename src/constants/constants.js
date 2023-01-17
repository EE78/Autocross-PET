import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const MenuButton = styled(Button)({
  color: "white",
  fontSize: 18,
  borderRadius: "10px",
  backgroundColor: "#a8475c",
  width: "350px",
  heigth: "100px",
  "&:hover": {
    backgroundColor: "#ff8e53",
  },
  marginBottom: "15px",
  textAlign: "center"
});

const ModalMenuButton = styled(Button)({
  color: "white",
  fontSize: 16,
  borderRadius: "10px",
  backgroundColor: "#4e47a9a4",
  width: "150px",
  heigth: "50px",
  "&:hover": {
    backgroundColor: "#ff8e53",
  },
  margin: "10px",
 textAlign: "center"
});

const RacesCities = [
  "Томск",
  "Омск",
  "Новокузнецк",
  "Рубцовск",
  "Зеленогорск",
  "Красноярск",
  "Новосибирск",
  "Киселевск",
  "Полысаево",
  "Ордынское",
  "Черногорск",
  "Топки"
];

const CrossCars = [
  "Д2Н",
  "Супер1600",
  "СуперАвто",
  "Д3-Спринт",
  "СуперБагги",
  "Д2-Классика",
  "Т1-2500",
  "Д3-Юниор",
  "Д2-Юниор",
  "Д3-Мини",
  "Д3-Микро",
  "Т4",
];

const MenuModalStyles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "lightblue",
  borderRadius: "20px",
  p: 4,
  
};

export { CrossCars, RacesCities, MenuModalStyles, MenuButton, ModalMenuButton };
