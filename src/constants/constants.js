import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const MenuButton = styled(Button)({
  color: "white",
  fontSize: 18,
  borderRadius: "10px",
  marginLeft: "20px",
  marginRight: "20px",
  marginTop: "30px",
  "&:hover": {},
  width: "300px",
  textAlign: "center",
});

const ModalMenuButton = styled(Button)({
  color: "white",
  fontSize: 16,
  borderRadius: "10px",
  backgroundColor: "#4e47a9a4",
  "&:hover": {
    backgroundColor: "#3c7e17",
  },
  margin: "30px 10px 0 10px",
  textAlign: "center",
  width: "140px",
});

const RacesCities = [
  {
    city: "ТОМСК",
    status: "МУНИЦИПАЛЬНЫЙ ЧЕМПИОНАТ",
    results: "ГОНКИ ЕЩЕ НЕ БЫЛО",
    stages: 1,
  },
  {
    city: "ОМСК",
    status: "РЕГИОНАЛЬНЫЙ ЧЕМПИНАТ",
    results: "ГОНКИ ЕЩЕ НЕ БЫЛО",
    stages: 2,
  },
  {
    city: "ЗЕЛЕНОГОРСК",
    status: "МУНИЦИПАЛЬНЫЙ ЧЕМПИОНАТ",
    results: "ГОНКИ ЕЩЕ НЕ БЫЛО",
    stages: 1,
  },
  {
    city: "КРАСНОЯРСК",
    status: "МУНИЦИПАЛЬНЫЙ ЧЕМПИОНАТ",
    results: "ГОНКИ ЕЩЕ НЕ БЫЛО",
    stages: 3,
  },
  {
    city: "ЧЕРНОГОРСК",
    status: "РЕГИОНАЛЬНЫЙ ЧЕМПИОНАТ",
    results: "ГОНКИ ЕЩЕ НЕ БЫЛО",
    stages: 3,
  },
  {
    city: "РУБЦОВСК",
    status: "РЕГИОНАЛЬНЫЙ ЧЕМПИОНАТ",
    results: "ГОНКИ ЕЩЕ НЕ БЫЛО",
    stages: 2,
  },
  {
    city: "КИСЕЛЕВСК",
    status: "РЕГИОНАЛЬНЫЙ ЧЕМПИОНАТ",
    results: "ГОНКИ ЕЩЕ НЕ БЫЛО",
    stages: 1,
  },
  {
    city: "ТОПКИ",
    status: "МУНИЦИПАЛЬНЫЙ ЧЕМПИОНАТ",
    results: "ГОНКИ ЕЩЕ НЕ БЫЛО",
    stages: 2,
  },
  {
    city: "ПОЛЫСАЕВО",
    status: "РЕГИОНАЛЬНЫЙ ЧЕМПИОНАТ",
    results: "ГОНКИ ЕЩЕ НЕ БЫЛО",
    stages: 1,
  },
  {
    city: "НОВОКУЗНЕЦК",
    status: "ВСЕРОССИЙСКИЙ ЧЕМПИОНАТ",
    results: "ГОНКИ ЕЩЕ НЕ БЫЛО",
    stages: 4,
  },
  {
    city: "НОВОСИБИРСК",
    status: "РЕГИОНАЛЬНЫЙ ЧЕМПИОНАТ",
    results: "ГОНКИ ЕЩЕ НЕ БЫЛО",
    stages: 1,
  },
  {
    city: "ОРДЫНСКОЕ",
    status: "РЕГИОНАЛЬНЫЙ ЧЕМПИОНАТ",
    results: "ГОНКИ ЕЩЕ НЕ БЫЛО",
    stages: 1,
  },
];

const CrossCars = [
  { class: "Д2Н", type: "ПЕРЕДНИЙ", price: "10000$", hp: "130 Л.С." },
  { class: "Супер1600", type: "ПЕРЕДНИЙ", price: "20000$", hp: "180 Л.С." },
  { class: "Д2-Классика", type: "ЗАДНИЙ", price: "7000$", hp: "120 Л.С." },
  { class: "Д3-Спринт", type: "ЗАДНИЙ", price: "10000$", hp: "140 Л.С." },
  { class: "СуперАвто", type: "ПОЛНЫЙ", price: "40000$", hp: "350 Л.С." },
  { class: "СуперБагги", type: "ПОЛНЫЙ", price: "40000$", hp: "300 Л.С." },
  { class: "Т1-2500", type: "ПОЛНЫЙ", price: "10000$", hp: "200 Л.С." },
  { class: "Т4", type: "ЗАДНИЙ", price: "8000$", hp: "260 Л.С." },
  { class: "Д3-Юниор", type: "ЗАДНИЙ", price: "3000$", hp: "80 Л.С." },
  { class: "Д2-Юниор", type: "ПЕРЕДНИЙ", price: "3000$", hp: "80 Л.С." },
  { class: "Д3-Мини", type: "ЗАДНИЙ", price: "2500$", hp: "20 Л.С." },
  { class: "Д3-Микро", type: "ЗАДНИЙ", price: "2000$", hp: "10 Л.С." },
];

const MenuModalStyles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  boxShadow: 24,
  bgcolor: "#040136",
  borderRadius: "20px",
  p: 5,
};

export { CrossCars, RacesCities, MenuModalStyles, MenuButton, ModalMenuButton };
