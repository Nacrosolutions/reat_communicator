import { useSelector } from "react-redux";
import { StyledDiv, StyledUserTable } from "./ManageUser.style";
import ManageUserTable from "./ManageUserTable";
import type { RootState } from "../../store/store";


const ManageUser=()=>{

    
    function onEdit(){

    }


    function onDelete() {


    }

const { users, loggedInUser, loading } =useSelector((state:RootState)=>state.users);
console.log(users,"USERS");
if (loading) {
    return <h3 style={{ marginLeft: "2%" }}>Loading users...</h3>;
  }



    return (
<StyledDiv>
            <h1 className="mt-5" style={{marginLeft:"2%"}}>Users</h1>
            <StyledUserTable >
                <ManageUserTable data={users} onDelete={onDelete} onEdit={onEdit}></ManageUserTable>
            </StyledUserTable>
        </StyledDiv>
    )
}

export default ManageUser;