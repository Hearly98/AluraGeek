import { productServices } from "./product-service.js";

const formulario = document.querySelector("[data-form]");

const obtenerInformacion= () => { 
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    if(id==null){
        window.location.href= alert("Ocurrió un error");
    }


    const img =document.querySelector("[data-img]");
    const nombre =document.querySelector("[data-name]");
    const precio =document.querySelector("[data-price]");
    const codigo =document.querySelector("[data-code]");
    const categoria =document.querySelector("[data-category]");
    const descripcion =document.querySelector("[data-description]");

    productServices.detalleProducto(id).then( (perfil) =>{
    img.value=perfil.img;
    nombre.value = perfil.nombre;
    precio.value = perfil.precio;
    codigo.value= perfil.codigo;
    categoria.value= perfil.categoria;
    descripcion.value= perfil.descripcion;
});
};

obtenerInformacion();

formulario.addEventListener("submit", (evento) => {
        evento.preventDefault();
        const url = new URL(window.location);
        const id = url.searchParams.get("id");
    

        const img =document.querySelector("[data-img]").value;
        const nombre =document.querySelector("[data-name]").value;
        const precio =document.querySelector("[data-price]").value;
        const codigo =document.querySelector("[data-code]").value;
        const categoria =document.querySelector("[data-category]").value;
        const descripcion =document.querySelector("[data-description]").value;

        productServices.actualizarProducto(img, nombre, precio,codigo, categoria, descripcion, id).then(()=>{
            window.location.href= alert("Producto editado con exito");
        })
});