import { Button as MUIButton } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ContainerWrapper = styled("div")({
  display: "flex",
  width: "100%",
  height: "80vh",
  justifyContent: "center",
  alignItems: "center",
});

export const Button = styled(MUIButton)({
  backgroundColor: "white",
  fontWeight: "bold",

  "&:hover": {
    backgroundColor: "white",
  },
});
