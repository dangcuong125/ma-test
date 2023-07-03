export interface IFormLogin {
    username: string;
    password: string;
  }

export interface ILoginCallback {
    onSuccess: VoidFunction;
    onError: VoidFunction;
  }
export interface IResLogin {
    accessToken: string;
    refreshToken: string;
  }
  