import React from "react";
import { useDispatch } from "react-redux";
import { Button, Typography } from "@mui/material";

import * as S from "./Dialog.styles";
import { toggleDialog } from "../state/reducer";

export function DialogSuccess() {
  const dispatch = useDispatch();

  return (
    <>
      <S.DialogHeader>
        <Typography variant="h6">Filme alterado com sucesso!!</Typography>
      </S.DialogHeader>
      <S.DialogContent>
        <img src="success.gif" alt="success" />
        <Typography variant="body1">
          Legal!! A alteração foi concluída com sucesso e a partir de agora o
          filme selecionado é <strong>Top Gun: Maverick</strong>
        </Typography>
      </S.DialogContent>
      <S.DialogFooter>
        <Button variant="contained" onClick={() => dispatch(toggleDialog())}>
          Finalizar
        </Button>
      </S.DialogFooter>
    </>
  );
}
