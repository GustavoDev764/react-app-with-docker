export default class AuthUser {

  public static isUserAuthenticate() {
    const dt = localStorage.getItem('user');
    
    if(dt){
      return true;
    }

    return false;
  }
  
  public static setUser(data:any) {
    localStorage.setItem('user',JSON.stringify(data));
  }

  public static setToken(data:any) {
    localStorage.setItem('token',JSON.stringify(data));
  }

  public static getUser() {
    return localStorage.getItem('user');
  }
  
  public static getToken() {
    return localStorage.getItem('token');
  }
  
  public static logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }
}