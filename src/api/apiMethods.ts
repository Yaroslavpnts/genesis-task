import { instance } from "./axios";

export interface ICredentials {
  toke: string;
}

export const api = {
  getToken() {
    return instance.get<ICredentials>("/auth/anonymous?platform=subscriptions");
  },
};
