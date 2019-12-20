class Authentication {
    constructor(){
        this.authenticated = false; 
    }

    isTokenExist(){
        if(localStorage.getItem('swap_access_token') ) { 
           //TODO create is token valid function
            return true
        }else{
            return false
        }
    }

    isAuthorize(){
        return this.authenticated;
    }
}

export default new Authentication()