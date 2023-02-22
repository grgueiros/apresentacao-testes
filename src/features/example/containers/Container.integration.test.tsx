import React from "react";
import { Provider } from "react-redux";
import {
  render as renderTestingLibrary,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import nock from "nock";
import { faker } from "@faker-js/faker";

import { createConfigureStore } from "../../../state/rootStore";
import { Container } from "./Container";
import { token } from "../services/api";

const API = process.env.REACT_APP_API || "";
const checkCanChangeUrl =
  "/v2/subscriptions/subscription/user-can-change-day-billing/";

const changeMovieUrl = "/v2/subscriptions/subscription/change-day-billing/";

const generateErrorResponse = (code: string) => ({
  message: {
    message: faker.random.words(),
    code,
  },
});

type TestProps = {
  errorCode?: string;
};

const initTest = ({ errorCode = "" }: TestProps = {}) => {
  const errorResponse = generateErrorResponse(errorCode);
  const status = errorCode ? 400 : 200;
  const response = errorCode ? errorResponse : { success: true };
  nock(API).get(checkCanChangeUrl).query({ token }).reply(status, response);

  const store = createConfigureStore();

  renderTestingLibrary(
    <Provider store={store}>
      <Container />
    </Provider>
  );
};

test("show unauthorized message if any unknown error", async () => {
  initTest({ errorCode: "unknown" });

  const loader = screen.getByTestId("loading");

  const text = await screen.findByText(
    /você não está autorizado a fazer esta ação/i
  );

  expect(loader).not.toBeInTheDocument();
  expect(text).toBeInTheDocument();
});

test("show recently changed message if error code is 400908", async () => {
  initTest({ errorCode: "400908" });

  const changeButton = await screen.findByRole("button", {
    name: /clique para trocar/i,
  });

  await userEvent.click(changeButton);

  const modalTitle = screen.getByRole("heading", { name: /ops!!/i });

  expect(modalTitle).toBeInTheDocument();

  const gotItButton = screen.getByRole("button", { name: /entendi/i });

  await userEvent.click(gotItButton);

  await waitForElementToBeRemoved(gotItButton);
});

test("change movie success flow", async () => {
  initTest();

  nock(API)
    .post(changeMovieUrl, {
      day_billing: 8,
    })
    .query({ token })
    .reply(200, { success: true });

  const changeButton = await screen.findByRole("button", {
    name: /clique para trocar/i,
  });

  await userEvent.click(changeButton);

  const modalTitle = await screen.findByRole("heading", {
    name: /faça alguma coisa incrível/i,
  });

  expect(modalTitle).toBeInTheDocument();

  const select = screen.getByRole("button", { name: /filme/i });

  await userEvent.click(select);

  const option = screen.getByRole("option", {
    name: /top gun: maverick/i,
  });

  await userEvent.click(option);

  const submitButton = screen.getByRole("button", { name: /confirmar/i });

  await userEvent.click(submitButton);

  const successHeading = await screen.findByRole("heading", {
    name: /filme alterado com sucesso!!/i,
  });

  const successButton = await screen.findByRole("button", {
    name: /finalizar/i,
  });

  expect(successHeading).toBeInTheDocument();

  await userEvent.click(successButton);

  await waitForElementToBeRemoved(successHeading);
});

test("change movie fail flow", async () => {
  initTest();

  nock(API)
    .post(changeMovieUrl, {
      day_billing: 8,
    })
    .query({ token })
    .reply(500, new Error());

  const changeButton = await screen.findByRole("button", {
    name: /clique para trocar/i,
  });

  await userEvent.click(changeButton);

  const modalTitle = await screen.findByRole("heading", {
    name: /faça alguma coisa incrível/i,
  });

  expect(modalTitle).toBeInTheDocument();

  const select = screen.getByRole("button", { name: /filme/i });

  await userEvent.click(select);

  const option = screen.getByRole("option", {
    name: /top gun: maverick/i,
  });

  await userEvent.click(option);

  const submitButton = screen.getByRole("button", { name: /confirmar/i });

  await userEvent.click(submitButton);

  const alertMessage = await screen.findByText(/alguma coisa deu errado/i);

  expect(alertMessage).toBeInTheDocument();
});
