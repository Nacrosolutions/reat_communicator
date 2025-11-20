export type UserRole="user" | "admin";


export interface AuthResponse {
  access_token: string;
  email: string;
  role: UserRole;
  name:string
}

export interface LoginMutationResponse {
  signIn: AuthResponse;
}
export interface SignUpMutationResponse {
  signUp: AuthResponse;
}

export interface AuthState {
  email: string | null;
  name:string | null
  role: UserRole | null;
  token: string | null;
  loading: boolean;
  error: string | null;
}


export interface LoginInput {
  email: string;
  password: string;
}
export interface SignUpInput {
  email: string;
  password: string;
  name:string;
}