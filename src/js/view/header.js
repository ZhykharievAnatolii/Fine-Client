import {viewController} from "./ViewController";

class Header {
    header=document.querySelector('.navbar');

    constructor() {
        this.header.addEventListener('click', (event) => {
            event.preventDefault();
            const {target} = event;
            if (target.dataset.page) {
                const page = target.dataset.page;
                if (page === 'login') {
                    return viewController.openLoginPage();
                }
                if (page === 'registration') {
                    return viewController.openRegistrationPage();
                }
                viewController.openDashBoard();
            }
        })
    }


    openLoggedInView(){
        this.header.querySelectorAll('.navbar-nav a').forEach((item)=>{
            if(item.classList.contains('logged-in')){
                item.classList.remove('d-none');
                return
            }
            item.classList.add('d-none');
        })
    };
    openLoggedOutView(){
        this.header.querySelectorAll('.navbar-nav a').forEach((item)=>{
            if(!item.classList.contains('logged-in')){
                item.classList.remove('d-none');
                return
            }
            item.classList.add('d-none');
        })
    }
}

const header=new Header();