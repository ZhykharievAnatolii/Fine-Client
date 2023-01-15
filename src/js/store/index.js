const {email,token}=localStorage.userinfo?JSON.parse(localStorage.userinfo):{};



class Store {

    token=token;
    email=email;

    saveData({token,email}){
        this.token=token,
        this.email=email,
            this.updateWithStorage()
    };

    clearData(){
        this.token=null,
        this.email=null,
            this.updateWithStorage()
    }

    updateWithStorage(){
        localStorage.userinfo=JSON.stringify({
            token:this.token,
            email:this.email
        });
    }
    get isLoggedIn(){
        return !!this.token
    }
};

export const store=new Store();