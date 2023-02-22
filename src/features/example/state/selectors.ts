import { RootState } from "../../../state/rootStore";

export const getCanEdit = ({ unitState }: RootState) => unitState.canEdit;

export const getDialogOpened = ({ unitState }: RootState) =>
  unitState.dialogOpened;

export const getAlreadyChanged = ({ unitState }: RootState) =>
  unitState.alreadyChanged;

export const isSuccess = ({ unitState }: RootState) =>
  unitState.status === "success";

export const isLoading = ({ unitState }: RootState) =>
  unitState.status === "loading";

  export const isFailed = ({ unitState }: RootState) =>
  unitState.status === "failed";
