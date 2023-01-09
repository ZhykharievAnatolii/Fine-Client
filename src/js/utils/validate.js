import validator from "validator";

const classNames={
    validInput:'is-valid',
    invalidInput:'is-invalid',
    validText:'valid-feedback',
    invalidText:'invalid-feedback'

}

export function validate(input) {
    const {value, minLengths, maxLenghts, required}= input;
    const feedbackElem=input.nextElementSibling;
    if(required&& value===''){
        input.classList.add(classNames.invalidInput);
        feedbackElem.classList.add(classNames.invalidText);
        feedbackElem.innerText='This field is required';
        return false;
    }
}