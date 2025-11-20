export type UserRole="user" | "admin";


export interface AuthResponse {
  access_token: string;
  email: string;
  role: UserRole;
}

export interface LoginMutationResponse {
  signIn: AuthResponse;
}

export interface AuthState {
  email: string | null;
  role: UserRole | null;
  token: string | null;
  loading: boolean;
  error: string | null;
}


export interface LoginInput {
  email: string;
  password: string;
}