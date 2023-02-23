import { AxiosResponse } from "axios";
import api from "./api";

export type ResponseCanEdit = {
  success: boolean;
};

export const userCanChange = (): Promise<AxiosResponse<ResponseCanEdit>> =>
  api.get<ResponseCanEdit>(
    "/some-endpoint/"
  );

export const changeMovie = (): Promise<AxiosResponse<ResponseCanEdit>> =>
  api.post<ResponseCanEdit>("/some-other-endpoint/", {
    day_billing: 8,
  });
