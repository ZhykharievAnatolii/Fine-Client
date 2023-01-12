const {email,token}=localStorage.userinfo?JSON.parse(localStorage.userinfo):{};



class Store {

    token=token;
    email=email;

    saveData({token,email}){
        this.token=token,
        this.email=email,
            this.updateWithStorage()
    }
    updateWithStorage(){
        localStorage.userinfo=JSON.stringify({
            token:this.token,
            email:this.email
        })
    }
};

export const store=new Store();