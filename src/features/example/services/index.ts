import { AxiosResponse } from "axios";
import api from "./api";

export type ResponseCanEdit = {
  success: boolean;
};

export const userCanChange = (): Promise<AxiosResponse<ResponseCanEdit>> =>
  api.get<ResponseCanEdit>(
    "/v2/subscriptions/subscription/user-can-change-day-billing/"
  );

export const changeMovie = (): Promise<AxiosResponse<ResponseCanEdit>> =>
  api.post<ResponseCanEdit>("/v2/subscriptions/subscription/change-day-billing/", {
    day_billing: 8,
  });
