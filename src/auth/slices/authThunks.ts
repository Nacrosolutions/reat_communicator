import {createAsyncThunk} from '@reduxjs/toolkit';
import {gql} from '@apollo/client'
import client from '../../apollo/client';

import {type LoginMutationResponse, type AuthResponse,  type LoginInput, type SignUpMutationResponse, type SignUpInput} from './authTypes';




const LOGIN_MUTATION=gql`
  mutation SignIn($email: String!, $password: String!) {
    signIn(input: { email: $email, password: $password }) {
      access_token
      email
      role
    }
  }
  `
const SIGNUP_MUTATION=gql`
  mutation SignUp($email: String!, $password: String!,$name:String!) {
    signUp(input: { email: $email, password: $password,name:$name }) {
      access_token
      email
      role
      name
    }
  }
  `
// dispatch(loginUser({ email, password }))    ------ TRANSLATED TO THIS

export const loginUser=createAsyncThunk<AuthResponse,LoginInput,{rejectValue:string}>(
    "auth/loginUser",
    async({email,password},thunkAPI)=>{
            try {
      const { data } = await client.mutate<LoginMutationResponse>({
        mutation: LOGIN_MUTATION,
        variables: { email, password },
      }) || null;

      if (!data || !data.signIn) {
  return thunkAPI.rejectWithValue("Invalid server response");
}
return data.signIn;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    catch (err: any) {
      return thunkAPI.rejectWithValue(err.message);
    }
}
)

export const signUpUser=createAsyncThunk<AuthResponse,SignUpInput,{rejectValue:string}>(
    "auth/signUpUser",
    async({email,password,name},thunkAPI)=>{
            try {
      const { data } = await client.mutate<SignUpMutationResponse>({
        mutation: SIGNUP_MUTATION,
        variables: { email, password ,name},
      }) || null;

      if (!data || !data.signUp) {
  return thunkAPI.rejectWithValue("Invalid server response");
}
return data.signUp;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    catch (err: any) {
      return thunkAPI.rejectWithValue(err.message);
    }
}
)