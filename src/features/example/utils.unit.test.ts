import { parseDate } from "./utils";

// test("parseDate should return `24/02` if input is `2023-02-24`", () => {
//   const result = parseDate("2023-02-24");

//   expect(result).toBe("24/02");
// });

// test("parseDate should return `24/02` if input is `2023-2-24`", () => {
//   const result = parseDate("2023-2-24");

//   expect(result).toBe("24/02");
// });

// test("parseDate should return `24/02` if input is `2023-2-2`", () => {
//   const result = parseDate("2023-2-2");

//   expect(result).toBe("02/02");
// });

test.each([
  ["24/02", "2023-02-24"],
  ["24/02", "2023-2-24"],
  ["02/02", "2023-2-2"],
])("parseDate should return %s if input is %s", (expected, dateString) => {
  const result = parseDate(dateString);

  expect(result).toBe(expected);
});

test("parseDate should return falsy if input is not a string", () => {
  const result = parseDate({} as string)

  expect(result).toBeFalsy()
})
