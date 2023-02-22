import nock from 'nock';
import '@testing-library/jest-dom/extend-expect';

beforeAll(() => {
  nock.disableNetConnect();
});

afterAll(() => {
  nock.restore();
  nock.cleanAll();
});

jest.setTimeout(30000);
