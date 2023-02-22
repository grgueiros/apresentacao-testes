import {
  Dialog as MUIDialog,
  DialogContent as MUIDialogContent,
} from "@mui/material";
import { styled } from "@mui/material/styles";

export const Dialog = styled(MUIDialog)({
  "& .MuiDialog-paper": {
    maxWidth: 444,
  },
});

export const DialogHeader = styled(MUIDialogContent)({
  padding: "8px 12px",

  "& h6": {
    fontSize: "18px",
  },
});

export const DialogContent = styled(MUIDialogContent)({
  padding: "8px 12px",

  "& img": {
    display: "block",
    maxWidth: 260,
    margin: "0 auto",
  },
});

export const DialogFooter = styled(MUIDialogContent)({
  padding: "8px 12px 16px",
  display: "flex",
  justifyContent: "flex-end",
  gap: "8px",
});
