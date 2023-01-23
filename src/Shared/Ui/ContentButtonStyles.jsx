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

  export {ModalMenuButton}