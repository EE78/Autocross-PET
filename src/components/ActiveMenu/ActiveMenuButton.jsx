import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const MenuButton = styled(Button)({
  color: "white",
  fontSize: 18,
  borderRadius: "10px",
  marginLeft: "20px",
  marginRight: "20px",
  marginTop: "10px",
  "&:hover": {},
  width: "300px",
  textAlign: "center",
});

export {MenuButton}