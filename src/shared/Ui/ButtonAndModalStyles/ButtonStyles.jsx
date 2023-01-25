import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const ModalButton = styled(Button)({
  color: "white",
  fontSize: 16,
  borderRadius: "10px",
  backgroundColor: "#4e47a9a4",
  "&:hover": {
    backgroundColor: "#3c7e17",
  },
  textAlign: "center",
  marginTop: "20px",
  marginRight: "20px",
  width: "135px",
});

export { ModalButton };
