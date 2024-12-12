// auth.models.ts
export interface LoginData {
  email: string;
  password: string;
}

export interface AdminLoginData {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  message?: string;
}

export interface GoogleLoginResponse {
  token: string;
}

export interface LoginFormData {
  email: string;
  password: string;
}
