import { CognitoUser, CognitoUserPool } from "amazon-cognito-identity-js";

import { poolData } from "./utils";

type ResetPasswordPayloadType = {
  email: string;
};

export const resetPassword = ({ email }: ResetPasswordPayloadType) => {
  const userPool = new CognitoUserPool(poolData);

  const cognitoUser = new CognitoUser({
    Username: email,
    Pool: userPool,
  });
  return new Promise<{ email: string }>((resolve, reject) => {
    cognitoUser.forgotPassword({
      onSuccess: () => {
        resolve({ email });
      },
      onFailure: () => {
        reject({ message: "Unable to send code" });
      },
    });
  });
};
