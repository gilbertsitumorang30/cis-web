import { useEffect, useState } from "react";
import { userService, type User } from "../../services/user-service";

const About = () => {
  useEffect(() => {
    getUsers();
  }, []);

  const [user, setUser] = useState<User | null>(null);

  const getUsers = async () => {
    try {
      const user = await userService.getUsers();
      console.log("INI USERNAME ABOUT :", user.username);
      console.log("INI USERNAME ABOUT :", user.id);
      console.log("INI USERNAME ABOUT :", user.phone);
      console.log("INI USERNAME ABOUT :", user.phone);
      setUser(user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
        <h1 className="text-red-800 text-7xl">Ini about {user?.username}</h1>
        <h2>Ini dibuat Chelsea</h2>
       
     
      <h1>About dengan git</h1>
      <h2>Ini dibuat Gilbert</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse sed
        reiciendis, repellat eius quia laboriosam, quod aliquid fugiat
        dignissimos autem blanditiis perspiciatis deleniti? Nobis officiis
        distinctio eveniet, magnam voluptatum odio.
      </p>

    </div>
  );
};

export default About;
