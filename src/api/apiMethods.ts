import { instance } from "./axios";

export interface ICredentials {
  toke: string;
}

export const api = {
  getToken() {
    return instance.post<ICredentials>(
      "/auth/anonymous?platform=subscriptions"
    );
  },
};
