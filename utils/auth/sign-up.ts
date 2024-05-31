import {
  CognitoUserPool,
  CognitoUserAttribute,
  CognitoUser,
} from "amazon-cognito-identity-js";
import { poolData } from "./utils";

type RegisterUserPayloadType = {
  email: string;
  password: string;
};

export const registerUser = ({ email, password }: RegisterUserPayloadType) => {
  const userPool = new CognitoUserPool(poolData);

  const nameAttribute = new CognitoUserAttribute({
    Name: "name",
    Value: email,
  });
  const familyNameAttribute = new CognitoUserAttribute({
    Name: "family_name",
    Value: email,
  });

  return new Promise<{ email: string }>((resolve, reject) => {
    userPool.signUp(
      email,
      password,
      [nameAttribute, familyNameAttribute],
      [],
      (err, result) => {
        if (result) {
          resolve({ email: result.user.getUsername() });
        }
        if (err?.name === "UsernameExistsException") {
          reject({ code: 400, message: "The user already exists" });
        }
        if (err) {
          reject({ code: 400, message: err?.message });
        }
      }
    );
  });
};

type VerifyUserPayloadType = {
  email: string;
  code: string;
};

export const verifyUser = ({ email, code }: VerifyUserPayloadType) => {
  const userPool = new CognitoUserPool(poolData);

  const cognitoUser = new CognitoUser({
    Username: email,
    Pool: userPool,
  });
  return new Promise<{ email: string }>((resolve, reject) => {
    cognitoUser.confirmRegistration(code, true, (err, result) => {
      if (result) {
        resolve({ email: "" });
        result;
      }
      if (err) {
        reject({ code: 400, message: "Incorrect OTP Code" });
      }
    });
  });
};

type ResendCodePayloadType = {
  email: string;
};

export const resendCode = ({ email }: ResendCodePayloadType) => {
  const userPool = new CognitoUserPool(poolData);

  const cognitoUser = new CognitoUser({
    Username: email,
    Pool: userPool,
  });
  return new Promise<{ data: string }>((resolve, reject) => {
    cognitoUser.resendConfirmationCode((err, result) => {
      if (result) {
        resolve({ data: "success" });
      }
      if (err) {
        reject({ code: 400, message: err?.message });
      }
    });
  });
};
