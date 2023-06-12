import { productServices } from "./product-service.js";
const formulario = document.querySelector("[data-form]");

formulario.addEventListener('submit', (evento) =>{
    evento.preventDefault();
    const img =document.querySelector("[data-img]").value;
    const nombre =document.querySelector("[data-name]").value;
    const precio =document.querySelector("[data-price]").value;
    const codigo =document.querySelector("[data-code]").value;
    const categoria =document.querySelector("[data-category]").value;
    const descripcion =document.querySelector("[data-description]").value;
    console.log(img + "---" + nombre+ "---" + precio + codigo + "---" + categoria + "---" + descripcion);

    var regla = /\S+/;

    // Validar campos vacíos
    if (!regla.test(img) || !regla.test(nombre)|| !regla.test(precio)|| !regla.test(codigo)|| !regla.test(categoria) || !regla.test(descripcion)) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Los campos no pueden estar vacíos.'
          });
        return;
    }

    productServices.crearProducto(img, nombre, precio,codigo, categoria, descripcion)
    
    .then(respuesta =>{
        window.location.href = '../controllers/admin.html'; 
              }).then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Registro Exitoso',
                    text: '¡El producto ha sido creado exitosamente!'
              });
            })
            .catch((err) => console.log(err));
        });