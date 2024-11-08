import { isPasswordValid } from "../pwd-validator";

describe("Password Validator", () => {
  it("should return true for a valid password", () => {
    expect(isPasswordValid("My_Passw0rd")).toBe(true);
  });

  it("should return false for a password with less than 8 characters", () => {
    expect(isPasswordValid("Abc123_")).toBe(false);
  });

  it("should return false for a password without a capital letter", () => {
    expect(isPasswordValid("my_passw0rd")).toBe(false);
  });

  it("should return false for a password without a lowercase letter", () => {
    expect(isPasswordValid("MY_PASSW0RD")).toBe(false);
  });

  it("should return false for a password without a number", () => {
    expect(isPasswordValid("My_Password")).toBe(false);
  });

  it("should return false for a password without an underscore", () => {
    expect(isPasswordValid("MyPassword1")).toBe(false);
  });
});