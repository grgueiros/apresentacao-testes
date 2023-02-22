import type { Config } from "jest";

const config: Config = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["./jestSetup.js"],
  verbose: true,
  testEnvironmentOptions: {
    url: "http://localhost/",
  },
  globals: {
    ENV: "TEST",
    __DEV__: false,
  },
  setupFiles: ["<rootDir>/jest.setup.js"],
};

export default config;
