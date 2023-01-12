
import './scss/index.scss';
import 'bootstrap';
import {validateForm} from "./js/utils/validate";
import {loginUser, registerUser} from "./js/api";
import {viewController} from "./js/view/ViewController";
// import {b} from "msw/lib/glossary-58eca5a8";
import {store} from "./js/store";
import {header} from "./js/view/header";

document.addEventListener('DOMContentLoaded',()=>{
    viewController.openLoginPage();
    header.openLoggedOutView();
    if(store.token){
        viewController.openDashBoard();
        header.openLoggedInView();

    }
    const registerForm=document.querySelector('.register-form');
    const loginForm=document.querySelector('.login-form');

    validateForm(registerForm,async (body)=>{
        const info=await registerUser(body)
        // console.log(info)
        viewController.openLoginPage();

    });
    validateForm(loginForm, async (body)=>{
    const {token, email}=await loginUser(body);
    store.saveData({toke,email});
    viewController.openDashBoard();
    header.openLoggedInView();
    })
})
