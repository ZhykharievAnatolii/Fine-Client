export class ViewController {

    registrationPage=document.querySelector('.register');
    loginPage=document.querySelector('.login');
    hideClassName='d-none';

    openRegistrationPage(){
    this.registrationPage.classList.remove(this.hideClassName);
    this.loginPage.classList.add(this.hideClassName);

};
    openLoginPage(){
        this.registrationPage.classList.add(this.hideClassName);
        this.loginPage.classList.remove(this.hideClassName);

    }

};

export const viewController=new ViewController();