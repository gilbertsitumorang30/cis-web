import { useEffect,useState } from "react";
import { userService,type User } from "../../services/user-service";

const About = () => {
useEffect(()=>{getUsers()},[]);

const [user,setUser]=useState<User | null>(null);

const getUsers=async ()=>{
    try{
        const user=await userService.getUsers();
        console.log("INI USERNAME ABOUT :",user.username);
        setUser(user);
    }catch(error){
        console.log(error)
    }
}

  return (
    <div>
        <h1 className="text-red-800 text-7xl">Ini about {user?.username}</h1>
        <h2>Ini dibuat Chelsea</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse sed reiciendis, repellat eius quia laboriosam, quod aliquid fugiat dignissimos autem blanditiis perspiciatis deleniti? Nobis officiis distinctio eveniet, magnam voluptatum odio.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dolorum eligendi dolores. Minima, autem veniam voluptatem natus temporibus doloremque odit provident consequuntur minus impedit voluptas ipsa reprehenderit id et unde?</p>
    </div>
  )
}

export default About;