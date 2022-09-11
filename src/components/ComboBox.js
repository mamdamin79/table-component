import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";


const ComboBox = ({users}) => {
    const [searchTerm , setSearchTerm] = useState("")
    const [isOpen ,setIsOpen] = useState(false);
    return (
        <div >
            {
                users.length > 0 ? 
                <>
                    <div >
                        <input  value={searchTerm} onChange={(e) =>{
                            setSearchTerm(e.target.value)
                            setIsOpen(true)
                        }} type="text" name="search-term" />
                        <BiChevronDown style={{cursor : 'pointer', fontSize: "20px"}} onClick={(e) => setIsOpen(!isOpen)}/>
                    </div>
                    <div className={isOpen ? "" : "" }>
                        {
                            users.filter(product => product.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())).map(product => <div onClick={() =>{
                                setSearchTerm(product.title)
                                setIsOpen(false);

                            }}className="" key={product.id}>{product.title}</div>)
                        }
                    </div> 
                </>
                : <p>loading...</p>

            }
        </div>
    );
}
 
export default ComboBox;