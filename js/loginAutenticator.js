export class SistemaAutenticacion{
    static login(email,password){
        if("autenticable" in email && email.autenticable instanceof Function){
            return email.autenticable(password);
        }
           return false;
}
    }
   