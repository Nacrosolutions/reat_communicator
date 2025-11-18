import { StyledDiv, StyledUserTable } from "./ManageUser.style";
import ManageUserTable from "./ManageUserTable";


const ManageUser=()=>{

    function onEdit(){

    }


    function onDelete() {


    }


    const data=[{id:1,name:"nabham",email:"nabhamsharmadev@gmail.com"},{id:2,name:"prokshima",email:"prokshima@gmail.com"}]

    return (
<StyledDiv>
            <h1 className="mt-5" style={{marginLeft:"2%"}}>Users</h1>
            <StyledUserTable >
                <ManageUserTable data={data} onDelete={onDelete} onEdit={onEdit}></ManageUserTable>
            </StyledUserTable>
        </StyledDiv>
    )
}

export default ManageUser;