import { useEffect, useState } from "react";
import { getUsers } from "../services/api";

const Table = () => {
    const [users,setUsers] = useState([]);
    useEffect(()=>{
        const callApi = async() => {
            setUsers(await getUsers());

        }
        callApi();
    },[])
    console.log(users);
    return (
        <div>
           {
                users.length > 0 ? 
                <table>
                    <thead>
                        <tr>
                            <th>sddsa</th>
                            <th>sddsa</th>
                            <th>sddsa</th>
                        </tr>
                    </thead>
                </table>
                : "loading..."
           }
        </div>
    );
}
 
export default Table;