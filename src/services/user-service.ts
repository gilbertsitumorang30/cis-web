import api from "./api"


export interface User{
    id:number;
    name:string;
    username:string;
    email:String;
    phone:string;
    website:string;

}

export const getUsers=async()=>{
    const response= await api.get("/users/1")

    console.log(response);
    
    return response.data as User;
}

export const deleteUsers=async()=>{

    const response= await api.get<User>("/users/1")
    console.log(response);
}

export const userService={
    getUsers,}