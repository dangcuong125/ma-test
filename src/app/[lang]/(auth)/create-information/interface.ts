export interface IRegisterInformationRequest {
    name: string;
    password: string;
    phoneNumber: string;
    referralCode?: string;
    otp: string
  }