export class Cuenta{

        constructor (email){
            this.email=email;
        }
        asignarPassword(password){
            this.password=password;
         }
    
         autenticable(password){
            return password ==this.password;
         }
}
