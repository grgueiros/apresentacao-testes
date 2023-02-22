import React from "react";
import { useDispatch } from "react-redux";
import { Button, Typography } from "@mui/material";

import * as S from "./Dialog.styles";
import { toggleDialog } from "../state/reducer";

export function DialogCannotChange() {
  const dispatch = useDispatch();

  return (
    <>
      <S.DialogHeader>
        <Typography variant="h6">Ops!!</Typography>
      </S.DialogHeader>
      <S.DialogContent>
        <img src="forbidden.gif" alt="success" />
        <Typography variant="body1">
          Você alterou a sua escolha de filme no dia 24/02. Você poderá alterar
          novamente em <strong>X dias.</strong>
        </Typography>
      </S.DialogContent>
      <S.DialogFooter>
        <Button variant="contained" onClick={() => dispatch(toggleDialog())}>
          Entendi
        </Button>
      </S.DialogFooter>
    </>
  );
}
