
import './scss/index.scss';
import 'bootstrap';
import {validateForm} from "./js/utils/validate";
import {getFinesUser, loginUser, registerUser} from "./js/api";
import {viewController} from "./js/view/ViewController";
// import {b} from "msw/lib/glossary-58eca5a8";
import {store} from "./js/store";
import {header} from "./js/view/header";
import {alertMessage} from "./js/view/alert";
import {renderFines} from "./js/view/renderfines";

// window.viewController=viewController

document.addEventListener('DOMContentLoaded',async ()=>{
    if(store.isLoggedIn){
        viewController.openDashBoard();
        try {
           await getFinesUser();
           data.forEach(renderFines);
        }catch (err) {
            
        }
    }else {
        viewController.openLoginPage();
    }

    viewController.openLoginPage();
    /**
     * type {HtmlFormElement}
     */

    viewController.openLoginPage();
    header.openLoggedOutView();
    if(store.token){
        viewController.openDashBoard();
        header.openLoggedInView();

    }
    const registerForm=document.querySelector('.register-form');
    /**
     * type {HtmlFormElement}
     */

    const loginForm=document.querySelector('.login-form');

    validateForm(registerForm,async (body)=>{
        try {const info=await registerUser(body);
            alertMessage.hideAlertMessage('registration');
        // console.log(info)
        viewController.openLoginPage();
        registerForm.reset();
        // viewController.openDashBoard();
        }catch (err){
            // console.log(err.response.data)
            alertMessage.showAlertMessage('registration',err.response.data.message())
        }

    });
    validateForm(loginForm, async (body)=>{
        try{
            const {token, email}=await loginUser(body);
            alertMessage.hideAlertMessage('login');
        store.saveData({token,email});
        viewController.openDashBoard();
        header.openLoggedInView();
        loginForm.reset();
    }catch(err){
            alertMessage.showAlertMessage('login',err.response.data.message())
    }
    })
})
