import { User } from "../../types/state/user";
import { http } from "./service";

type UserOptions = {
  username: string;
  password: string;
};

/**
 * Get user
 * @param baseURL
 * @param username
 * @param password
 */
export const getUserToken = async (
  baseURL,
  { username, password }: UserOptions
): Promise<User> => {
  const response = await http.post<{
    //user_id: number;
    token: string;
  }>(`${baseURL}/sign-in`, {
    body: { username, password },
  });
  if (response.data) {
    return {
      //id: response.data.user_id,
      token: response.data.token,
    };
  }
};
