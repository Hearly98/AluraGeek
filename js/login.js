import { Cuenta } from "./cuenta.js";
import { SistemaAutenticacion } from "./loginAutenticator.js";



 
 const btn = document.querySelector("[data-btn]");


const cuentaAdmin = new Cuenta ("admin@alurageek.com");
cuentaAdmin.asignarPassword('alura123');


  






let expr=/^([a-zA-Z])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    

btn.addEventListener('click', (evento) => {
    evento.preventDefault();
    const dEmail = document.querySelector("[data-email]").value;
    const dPassword = document.querySelector("[data-password]").value;

    // Expresión regular para verificar que no estén vacíos
    var regla = /\S+/;

    // Validar campos vacíos
    if (!regla.test(dEmail) || !regla.test(dPassword)) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Los campos no pueden estar vacíos.'
          });
        return;
    }

    if(dEmail==cuentaAdmin.email && dPassword==cuentaAdmin.password){
       
        window.location.href="../controllers/admin.html";
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Credenciales incorrectas.'
          });
    }
});
