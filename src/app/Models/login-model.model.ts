import { ILogin } from '../Interfaces/ilogin,model';

export class LoginModel implements ILogin {
  public userName: string;
  public password: string;


 

  constructor(userName: string, password:string) {
    this.userName = userName;
    this.password = password;
}
  
}

