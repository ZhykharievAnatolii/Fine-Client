
import './scss/index.scss';
import 'bootstrap';
import {validateForm} from "./js/utils/validate";
import {loginUser, registerUser} from "./js/api";
import {viewController} from "./js/view/ViewController";
import {b} from "msw/lib/glossary-58eca5a8";

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
    const {token, email}=await loginUser(body)
    })
})
