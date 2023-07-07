export interface IFormLogin {
    phoneNumber: string;
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

export enum OtpModalType {
  REGISTER = 'REGISTER',
  FORGOT_PASSWORD = 'FORGOT_PASSWORD'
}
  