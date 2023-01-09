import validator from "validator";

const classNames={
    validInput:'is-valid',
    invalidInput:'is-invalid',
    validText:'valid-feedback',
    invalidText:'invalid-feedback'

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
        feedbackElem.classList.add(classNames.validText);
        feedbackElem.innerText='';
    };
    
    if(required&& value===''){
        makeInvalid('This field is required');
        return false;
    };
    if(minLength&&minLength>value ){
        makeInvalid(`This field should has minimum ${minLength} symbols`);
        return false
    };
    if(maxLenght&&maxLength<value ){
        makeInvalid(`This field should has maximum ${maxLenght} symbols`);
        return false
    };
    if(type==='email' &&validator.isEmail(value)){
        makeInvalid(`This field should have a valid email`);
        return false
    };
    makeValid()
    return true
}