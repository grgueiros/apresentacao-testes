import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Alert, CircularProgress, Snackbar, Typography } from "@mui/material";

import * as S from "./Container.styles";
import { fetchCanEdit, toggleDialog } from "../state/reducer";
import { Dialog } from "../components/Dialog";
import { getCanEdit, isFailed, isLoading } from "../state/selectors";

export function Container() {
  const dispatch = useDispatch();
  const canEdit = useSelector(getCanEdit);
  const loading = useSelector(isLoading);
  const failed = useSelector(isFailed);
  

  useEffect(() => {
    dispatch(fetchCanEdit());
  }, [dispatch]);

  const onClickHandler = () => {
    dispatch(toggleDialog());
  };

  if (!canEdit && !loading)
    return (
      <S.ContainerWrapper>
        <Typography variant="body1" color="white">
          Você não está autorizado a fazer esta ação
        </Typography>
      </S.ContainerWrapper>
    );

  return (
    <S.ContainerWrapper>
      <Snackbar open={failed} autoHideDuration={6000} title="Alguma coisa deu errado">
        <Alert severity="error">Alguma coisa deu errado</Alert>
      </Snackbar>
      {loading ? (
        <CircularProgress data-testid="loading" />
      ) : (
        <>
          <S.Button onClick={onClickHandler}>Clique para trocar</S.Button>
          <Dialog />
        </>
      )}
    </S.ContainerWrapper>
  );
}
