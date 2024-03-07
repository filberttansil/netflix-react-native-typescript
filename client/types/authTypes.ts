// Types
export interface AuthState {
  user: User | null;
  token: string;
  authenticated: boolean;
  loading: boolean;
  error: string | undefined;
}
export interface User {
  username: string;
  email: string;
  password: string;
  phoneNumber: string;
  address: string;
}

export interface LoginForm {
  email: string;
  password: string;
}
