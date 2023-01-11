
import './scss/index.scss';
import 'bootstrap';
import {validateForm} from "./js/utils/validate";
import {registerUser} from "./js/api";
import {viewController} from "./js/view/ViewController";

document.addEventListener('DOMContentLoaded',()=>{
    const registerForm=document.querySelector('.register-form');
    const loginForm=document.querySelector('.login-form');
    viewController.openLoginPage();
    validateForm(registerForm,async (body)=>{
        const info=await registerUser(body)
        // console.log(info)
        viewController.openLoginPage();

    });
    validateForm(loginForm, async (body)=>{

    })
})
