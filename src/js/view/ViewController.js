export class ViewController {

    registrationPage=document.querySelector('.register');
    loginPage=document.querySelector('.login');
    dashboardPage=document.querySelector('.dashboard')
    hideClassName='d-none';

    openRegistrationPage(){
    this.registrationPage.classList.remove(this.hideClassName);
    this.loginPage.classList.add(this.hideClassName);
    this.dashboardPage.classList.add(this.hideClassName);

};
    openLoginPage(){
        this.registrationPage.classList.add(this.hideClassName);
        this.loginPage.classList.remove(this.hideClassName);
        this.dashboardPage.remove(this.hideClassName);

    };
    openDashBoard(){
        this.registrationPage.classList.add(this.hideClassName);
        this.loginPage.classList.add(this.hideClassName);
        this.dashboardPage.classList.remove(this.hideClassName);
    }

};

export const viewController=new ViewController();