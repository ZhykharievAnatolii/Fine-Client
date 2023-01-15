import axios from "axios";


export const client= axios.create({
    baseURL:'http://localhost:3000/api'
});

export const registerUser=async (body,)=>
await client.post('/register',body);
/**
 * @param body
 * returns {Promice<axios.Axios.response<{token:string,email:string}>>}
 */

export const loginUser=async (body,)=>
    await client.post('/login',body);


// export const registerUser=async (body,)=>{
//     const {data}=await client.post('/register',body);
//     //     ,{
//     //     headers
//     // }
//     return data;
// };
// export const loginUser=async (body,)=>{
//     const {data}=await client.post('/login',body);
//     return data;
// };
