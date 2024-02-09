import { v4 as uuidv4 } from 'uuid';

let users=[];

export const getusers=(req,res)=>{
    console.log(users);
    res.send(users);
}
export const createpostuser=(req,res)=>{
    // console.log(req.body);
   const user=req.body
   const userid=uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
   const userwithid={...user,id:userid}
       users.push(userwithid)
     res.send(`hello everyone my name is ${user.firstname} added in to the database!`)
}
export const getuser=(req,res)=>{
    const{id}=req.params;
  const founduser=users.find((user) =>user.id==id);
    res.send(founduser)
}
export const deleteuser=(req,res)=>{
    const{id}=req.params;

    users=users.filter((user)=> user.id !== id);
    res.send(`User with the id ${id} is been deleted`)
}
export const patchupdate=(req,res)=>{
    const {id}=req.params;
    const {firstname,lastname,Age}=req.body;
    const user=users.find((user)=>user.id==id);
    if(firstname)user.firstname=firstname;
    if(lastname)user.lastname=lastname;
    if(Age)user.Age=Age;
    res.send(`user with the id ${id} has been updated`)
}