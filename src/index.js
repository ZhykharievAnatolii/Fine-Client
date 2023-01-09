
import './scss/index.scss';
import 'bootstrap';
import {validate} from "./js/utils/validate";

document.addEventListener('DOMContentLoaded',()=>{
    const registerForm=document.querySelector('.register-form');
    registerForm.addEventListener('submit',(event)=>{
        event.preventDefault();
        // [...registerForm.elements].forEach((elem)=>{
        //     validate(elem)
             const isValid  = [...registerForm.elements].reduce((accum,elem)=>{
                const result=elem.matches('input')?validate(elem):true;
                return !accum? accum:result;
        }, true);
        if(isValid){
            alert('Success')
        }
    });

    registerForm.addEventListener('change',({target})=>{
        if(target.matches('input')){
        validate(target);
        }
    })
})
