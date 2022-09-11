import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";


const ComboBox = ({users,setUsers,searchTerm,setSearchTerm}) => {
    console.log(searchTerm)
    const [isOpen ,setIsOpen] = useState(false);
    return (
        <div >
            {
                users.length > 0 ? 
                <>
                    <div className="flex w-full relative items-center  rounded-md">
                        <input placeholder="search a name" className="w-full p-1" value={searchTerm} onChange={(e) =>{
                            setSearchTerm(e.target.value)
                            setIsOpen(true)
                        }} type="text" name="search-term" />
                        <BiChevronDown className={isOpen ?  "cursor-pointer asbsolute left-0 font-bold text-lg rotate-180" : "cursor-pointer font-bold text-lg asbsolute left-0 " } onClick={(e) => setIsOpen(!isOpen)}/>
                    </div>
                    <div className={isOpen ? "block" : "hidden" }>
                        {
                            users.filter(user => user.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())).map(user => <div className="hover:bg-gray-100 transition-all duration-300 font-normal px-2 py-1 text-base" onClick={() =>{
                                setSearchTerm(user.name)
                                setIsOpen(false);

                            }} key={user.id}>{user.name}</div>)
                        }
                    </div> 
                </>
                : <p>loading...</p>

            }
        </div>
    );
}
 
export default ComboBox;