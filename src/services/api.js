const APIURL = "https://jsonplaceholder.typicode.com/users"
export const getUsers = async () =>{
    const response = await fetch(APIURL)
    const data = response.json();
    return data
}