class Header {
    header=document.querySelector('.navbar');

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