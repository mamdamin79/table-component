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
                <table className=" text-center w-full shadow-lg rounded-md bg-white  border-separate border-spacing-1 border-slate-500">
                    <thead>
                        <tr>
                            {/* map over one user object keys */}
                            {
                                Object.keys(users[0]).map((title,index) => <th className="px-1 text-slate-800" key={index}>{title}</th>)
                            }
                        </tr>
                    </thead>
                    <tbody>
                          {/* map over each user object values */}   
                            {
                               users.map(user => Object.values(user)).map((arrayOfvalues,ind) => {
                                return <tr className="odd:bg-slate-200 text-slate-700 font-medium text-base">
                                    {arrayOfvalues.map(value => {
                                        return typeof value === "string" ? <td>{value}</td> : typeof value === "number" ? <td>{value}</td> : typeof value === "object" ? <td>{Object.values(value)[0]}</td>: <span></span>
                                    })}
                                </tr>
                               })
                               
                            }
                </tbody>
                </table>
                : "loading..."
           }
        </div>
    );
}
 
export default Table;