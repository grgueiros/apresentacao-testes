import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Alert,
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import Theaters from "@mui/icons-material/Theaters";

import * as S from "./Dialog.styles";
import { selectOptions } from "../constants";
import { changeMovie, toggleDialog } from "../state/reducer";

export function DialogRequest() {
  const dispatch = useDispatch();

  const [selectValue, setSelectValue] = useState<string | number>(3);

  const onClickHandler = () => {
    dispatch(changeMovie(parseInt(selectValue as string, 10)));
    
  };

  return (
    <>
      <S.DialogHeader>
        <Typography variant="h6">Faça alguma coisa incrível</Typography>
      </S.DialogHeader>
      <S.DialogContent>
        <Typography variant="body1">
          Seu filme escolhido atualmente é{" "}
          <strong>Everything Everywhere All At Once.</strong> Deseja alterar a
          sua escolha?
        </Typography>
        <FormControl sx={{ mt: 2 }}>
          <InputLabel id="label">Filme</InputLabel>
          <Select
            labelId="label"
            value={selectValue}
            onChange={(e) => setSelectValue(e.target.value)}
            label="Filme"
            startAdornment={
              <InputAdornment position="start">
                <Theaters />
              </InputAdornment>
            }
            defaultValue={3}
          >
            {selectOptions.map((option, index) => (
              <MenuItem key={option} value={index + 2}>
                {option.toLowerCase()}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Alert severity="info" sx={{ mt: 2 }}>
          Depois dessa confirmação, você só poderá realizar uma nova alteração
          depois de X dias{" "}
        </Alert>
      </S.DialogContent>
      <S.DialogFooter>
        <Button onClick={() => dispatch(toggleDialog())}>Cancelar</Button>
        <Button
          variant="contained"
          disabled={selectValue === 3}
          onClick={onClickHandler}
        >
          Confirmar
        </Button>
      </S.DialogFooter>
    </>
  );
}
