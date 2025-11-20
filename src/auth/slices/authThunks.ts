import {createAsyncThunk} from '@reduxjs/toolkit';
import {gql} from '@apollo/client'
import client from '../../apollo/client';

import {type LoginMutationResponse, type AuthResponse,  type LoginInput} from './authTypes';




const LOGIN_MUTATION=gql`
  mutation SignIn($email: String!, $password: String!) {
    signIn(input: { email: $email, password: $password }) {
      access_token
      email
      role
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