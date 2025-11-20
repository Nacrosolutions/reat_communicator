import { createAsyncThunk } from "@reduxjs/toolkit";
import { gql } from "@apollo/client";
import client from "../../../apollo/client";
import type { User } from "./userTypes";


export const fetchUsers = createAsyncThunk<
  User[],      // return type
  void,        // argument type
  { rejectValue: string }
>(
  "users/fetchUsers",
  async (_, thunkAPI) => {
    try {
      const GET_USERS = gql`
        query {
          users {
            id
            name
            email
            role
          }
        }
      `;

      const { data } = await client.query({
        query: GET_USERS,
      });

      console.log("{DARRRRR}",data);

      return data.users as User[];
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);