import { parseHms } from "../src/main.js";

describe("parseHms", () => {
  it("100h20m30s", () => {
    expect(parseHms("100h20m30s")).toEqual([100, 20, 30]);
  });

  it("10h20m", () => {
    expect(parseHms("10h20m")).toEqual([10, 20, 0]);
  });

  it("10h", () => {
    expect(parseHms("10h")).toEqual([10, 0, 0]);
  });

  it("20m30s", () => {
    expect(parseHms("20m30s")).toEqual([0, 20, 30]);
  });

  it("20m", () => {
    expect(parseHms("20m")).toEqual([0, 20, 0]);
  });

  it("30s", () => {
    expect(parseHms("30s")).toEqual([0, 0, 30]);
  });

  it("xh20m30s", () => {
    expect(() => parseHms("xh20m30s")).toThrow();
  });

  it("10hx20m30s", () => {
    expect(() => parseHms("10hx20m30s")).toThrow();
  });

  it("10h20mx30s", () => {
    expect(() => parseHms("10h20mx30s")).toThrow();
  });

  it("10h20m30sx", () => {
    expect(() => parseHms("10h20m30sx")).toThrow();
  });
});
