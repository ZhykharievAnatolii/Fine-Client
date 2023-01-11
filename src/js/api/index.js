import axios from "axios";


export const client= axios({
    baseUrl:'http://localhost:3000/api'
});

export const registerUser=async (body,)=>{
    const {data}=await client.post('/register',body);
    //     ,{
    //     headers
    // }
    
}