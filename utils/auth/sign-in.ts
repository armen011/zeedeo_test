import {
  AuthenticationDetails,
  CognitoUser,
  CognitoUserPool,
} from "amazon-cognito-identity-js";
import { poolData } from "./utils";

type LogInUserPayloadType = {
  email: string;
  password: string;
};

const statuses = {
  UserNotFoundException: {
    status: 400,
    message: "User does not exist.",
  },
  NotAuthorizedException: {
    status: 400,
    message: "Incorrect username or password",
  },
  UserNotConfirmedException: {
    status: 300,
    message: "verification",
  },
};

export const logInUser = ({ email, password }: LogInUserPayloadType) => {
  const authenticationDetails = new AuthenticationDetails({
    Username: email,
    Password: password,
  });
  const userPool = new CognitoUserPool(poolData);

  const cognitoUser = new CognitoUser({
    Username: email,
    Pool: userPool,
  });
  return new Promise<{
    accessToken: string;
    idToken: string;
    accessTokenExpiration: number;
    refreshToken: string;
  }>((resolve, reject) => {
    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: (result) => {
        const accessToken = result.getAccessToken().getJwtToken();
        const idToken = result.getIdToken().getJwtToken();
        const accessTokenExpiration = result.getAccessToken().getExpiration();
        const refreshToken = result.getRefreshToken().getToken();

        resolve({ accessToken, idToken, accessTokenExpiration, refreshToken });
      },
      onFailure: (err) => {
        reject(
          statuses[err.code as keyof typeof statuses] || {
            code: 400,
            message: err.message,
          }
        );
      },
    });
  });
};
