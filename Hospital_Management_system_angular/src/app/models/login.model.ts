


export interface LoginRequest {
    email: string;
    password: string;
}


export interface LoginResponse {
    token: string;
    role: string;
    email: string;
    name: string;
}


export interface ForgotPasswordRequest {
    email: string;
}


export interface ResetPasswordRequest {
    token: string;
    newPassword: string;
}