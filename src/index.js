
import './scss/index.scss';
import 'bootstrap';
import {validate, validateForm} from "./js/utils/validate";

document.addEventListener('DOMContentLoaded',()=>{
    const registerForm=document.querySelector('.register-form');
    validateForm(registerForm,()=>{});
})
