class Alert {
    alerts={
        login:document.querySelector('.login-form .alert'),
        register:document.querySelector('.register-form .alert')
    }

    showAlertMessage(type,text){
        const alert=this.getAlert(type);
        alert.innerText=text;
        alert.classList.remove('d-none')
    };
    hideAlertMessage(type,text){
        const alert=this.getAlert(type);
        alert.innerText='';
        alert.classList.add('d-none')
    }
    getAlert(type){
       return this.alerts[type]
    }
}

export const alertMessage=new Alert();