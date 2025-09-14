interface LoginAPIRequest {
  userId: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  nickname: string;
  message: string;
  provider: string;
}

export const LOGIN_API_PATH = "/api/auth/login";

export const loginAPI = async ({ userId, password }: LoginAPIRequest): Promise<LoginResponse> => {
  try {
    const response = await fetch(LOGIN_API_PATH, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId,
        password,
      }),
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }

    const data: LoginResponse = await response.json();
    return data;
  } catch (error) {
    console.error("loginAPI error:", error);
    throw error;
  }
};
