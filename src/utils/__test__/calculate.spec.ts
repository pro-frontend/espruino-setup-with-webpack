import { sum } from "../calculate";

describe("should calculate", () => {
  it("should return sum", () => {
    expect(sum(1, 3, 5)).toEqual(9);
  });
});
