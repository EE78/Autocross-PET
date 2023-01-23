import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

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

  export {MenuModalStyles, ModalMenuButton}