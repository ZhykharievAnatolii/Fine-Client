
import './scss/index.scss';
import 'bootstrap';
import {validateForm} from "./js/utils/validate";
import {registerUser} from "./js/api";

document.addEventListener('DOMContentLoaded',()=>{
    const registerForm=document.querySelector('.register-form');
    validateForm(registerForm,async (body)=>{
        const info=await registerUser(body)
        console.log(info)
    });
})
