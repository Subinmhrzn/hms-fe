import { LocalStorageKey } from "@/constants";
import { LocalStorage } from "./local-storage";
import type { User } from "@/api/user/user.types";

export const saveAuthDataInLocalStorage = (accessToken: string, user: User) => {
  try {
    LocalStorage.set(LocalStorageKey.ACCESS_TOKEN, accessToken);
    LocalStorage.set(LocalStorageKey.USER, user);
  } catch (error) {
    throw new Error(`Failed to save user info in local storage: ${error}`);
  }
};

export const getUser = () => {
  const user = LocalStorage.get(LocalStorageKey.USER) as User | null;
  return user;
};
