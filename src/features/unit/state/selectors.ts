import { RootState } from "../../../state/rootStore";

export const getTest = ({ unitState }: RootState) => unitState.test;
