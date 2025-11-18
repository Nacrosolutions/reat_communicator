import { StyledMangedUserDiv } from "./ManageUserTable.style";

interface User {
    id:number;
    name:string;
    email:string;

}


const ManageUserTable=({data,onEdit,onDelete}:{
    data:User[],
    onEdit:(user:User)=>void,
    onDelete:(id:number)=>void
})=>{

return (
    <StyledMangedUserDiv>
        <table className="table table-responsive table-light">

            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
<tbody>
          {data.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>

            <td>
              <button
                 
                className="btn btn-primary btn-lg"
                onClick={() => onEdit(user)}
              >
                Edit
              </button>
<p style={{display:"inline-block",marginLeft:"4px",color:"gray"}}> | </p>
              <button
                className="btn btn-danger btn-lg ms-2"
                onClick={() => onDelete(user.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>

        </table>
        </StyledMangedUserDiv>
)

}


export default ManageUserTable;