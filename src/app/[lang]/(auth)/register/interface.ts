export interface IFormRegister {
    phoneNumber: string;
}

export interface IFormCreateInfo {
    fullName: string;
    password: string;
    confirmPassword: string;
    referralCode: string;
    agreedTerms: boolean;
}