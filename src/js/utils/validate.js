import {isEmail} from "validator/lib/isEmail";

// /**
//  * @param {HTMLFormElement}
//  * @param {function} callback
//  * @type {{invalidInput: string, validText: string, invalidText: string, validInput: string}}
//  */
//
// //

// export function makeValidation(HTMLFormElement, callcack) {
//     form.onsubmit=(SubmitEvent)=>{
//         event.preventDefault();
//         const isValid  = [...form.elements].reduce((accum,elem)=>{
//             const result=elem.matches('input')?validate(elem):true;
//             return !accum? accum:result;
//         }, true);
//         if(isValid){
//             // alert('Success')
//             // const body=new FormData(form);
//             callback();
//
//     }
//
//
//
// }
const classNames={
    validInput:'is-valid',
    invalidInput:'is-invalid',
    validText:'valid-feedback',
    invalidText:'invalid-feedback'

}

export function validateForm(form,callback) {
    form.addEventListener('submit',(event)=>{
        event.preventDefault();
        // [...registerForm.elements].forEach((elem)=>{
        //     validate(elem)
        const isValid  = [...form.elements].reduce((accum,elem)=>{
            const result=elem.matches('input')?validate(elem):true;
            return !accum? accum:result;
        }, true);
        if(isValid){
            // alert('Success')
            const body=new FormData(form);
           callback(body);
        }
    });

    form.addEventListener('change',({target})=>{
        if(target.matches('input')){
            validate(target);
        }
    })
}
export function validate(input) {
    const {value, minLength, maxLenght, required,type}= input;
    const feedbackElem=input.nextElementSibling;

    function makeInvalid(text) {
        input.classList.add(classNames.invalidInput);
        feedbackElem.classList.add(classNames.invalidText);
        feedbackElem.innerText=text;
    }
    
    function makeValid(text) {
        input.classList.add(classNames.validInput);
        input.classList.remove(classNames.invalidInput);
        feedbackElem.classList.add(classNames.validText);
        feedbackElem.innerText='';
    };
    
    if(required&& value===''){
        makeInvalid('This field is required');
        return false;
    };
    if(minLength&&minLength>value.length ){
        makeInvalid(`This field should has minimum ${minLength} symbols`);
        return false
    };
    if(maxLenght&&maxLength<value.length ){
        makeInvalid(`This field should has maximum ${maxLenght} symbols`);
        return false
    };
    if(type==='email' && !isEmail(value)){
        makeInvalid(`This field should have a valid email`);
        return false
    };
    makeValid()
    return true
}
}