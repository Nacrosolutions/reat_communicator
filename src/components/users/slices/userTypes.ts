export type UserRole="user" | "admin";

// export type User ={
//     name:string,
//     email:string
//     role:UserRole
// }


export interface User {
    id:string;
    name:string;
    email:string;
    role:UserRole
}


export interface UsersState{
    users:User[];
    loggedInUser:User| null;
    loading:boolean;
    error:string|null
}