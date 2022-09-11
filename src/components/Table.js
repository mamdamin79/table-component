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
                <table className="w-full shadow-md rounded-md bg-white">
                    <thead>
                        <tr>
                            {
                                Object.keys(users[0]).map((title,index) => <th className="px-2 text-slate-800" key={index}>{title}</th>)
                            }
                        </tr>
                    </thead>
                </table>
                : "loading..."
           }
        </div>
    );
}
 
export default Table;