import axios from "axios";


export const client= axios.create({
    baseURL:'http://localhost:3000/api'
});

export const registerUser=async (body,)=>{
    const {data}=await client.post('/register',body);
    //     ,{
    //     headers
    // }
    return data;
};
export const loginUser=async (body,)=>{
    const {data}=await client.post('/login',body);
    return data;
};
