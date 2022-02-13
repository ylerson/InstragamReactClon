import { client } from "../client";

export const userFetch = (userId, setUser) =>{
  
  const query = `*[_type == "user" && _id == '${userId}']`;

  if(!userId) return
    
  client.fetch(query).then((users) => {
   setUser(users[0])
  })

 
}