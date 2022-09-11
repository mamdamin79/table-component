import { useEffect, useState } from "react";
import ComboBox from "./components/ComboBox";
import Table from "./components/Table";
import { getUsers } from "./services/api";

function App() {
  const [users,setUsers] = useState([]);
  const [searchTerm , setSearchTerm] = useState("")

    useEffect(()=>{
        const callApi = async() => {
            setUsers(await getUsers());

        }
        callApi();
    },[])
  return (
    <div className="w-full md:flex items-start justify-between px-8 gap-4 my-4">
      <main className="w-full overflow-x-auto  md:w-4/6 lg:w-9/12">
        <Table users={users} searchTerm={searchTerm}/>
      </main>
      <aside className="w-full md:w-2/6 lg:w-3/12 bg-white shadow-md">
        <ComboBox users={users} setUsers={setUsers} searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      </aside>
    </div>
  );
}

export default App;
