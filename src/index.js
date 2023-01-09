
import './scss/index.scss';
import 'bootstrap';
import {validate} from "./js/utils/validate";

document.addEventListener('DOMContentLoaded',()=>{
    const registerForm=document.querySelector('.register-form');
    registerForm.addEventListener('submit',(event)=>{
        event.preventDefault();

    });

    registerForm.addEventListener('change',({target})=>{
        if(target.matches('input')){
        validate(target);
        }
    })
})
