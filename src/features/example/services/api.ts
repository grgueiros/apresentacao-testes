import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API,
});

export const token =
  ".eJwVycEKgCAMANB_2bnBnErlz8jSCVJkhIcg-vfq8i7vhuNspW4aa4ZgB9DrqKf02vaYpSsEYGKLxPjrkQgG6G3V_asixi3OCzI5QsdFcDZjRmumNKU8m6QEzwv49Rxv:1pUnTw:PMRqV3IKMNJ6W91PTGkc1fg0m7A";

api.interceptors.request.use((request) => {
  const tokenParams = { params: { token, ...request.params } };
  return Object.assign(request, tokenParams);
});

export default api;
