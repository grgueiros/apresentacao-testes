import React from "react";

import { useSelector } from "react-redux";

import * as S from "./Dialog.styles";
import {
  getAlreadyChanged,
  getDialogOpened,
  isSuccess,
} from "../state/selectors";
import { DialogRequest } from "./DialogRequest";
import { DialogCannotChange } from "./DialogCannotChange";
import { DialogSuccess } from "./DialogSuccess";

type DialogContentProps = {
  alreadyChanged: boolean;
  success: boolean;
};

function DialogContent({ alreadyChanged, success }: DialogContentProps) {
  if (success) return <DialogSuccess />;
  if (alreadyChanged) return <DialogCannotChange />;
  return <DialogRequest />;
}

export function Dialog() {
  const open = useSelector(getDialogOpened);
  const alreadyChanged = useSelector(getAlreadyChanged);
  const success = useSelector(isSuccess);

  return (
    <S.Dialog open={open}>
      <DialogContent alreadyChanged={alreadyChanged} success={success} />
    </S.Dialog>
  );
}
