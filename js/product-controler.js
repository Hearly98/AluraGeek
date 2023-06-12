import { productServices } from "./product-service.js";


const crearNuevoArticulo = (img,nombre,precio, codigo, id) => {
    const linea =document.createElement("div");
    linea.classList.add("section_product");
    const contenido =
                        `        
                        <img class="product-image" src="../imagenes/${img}" alt="">
                        <a id=${id}><i class="eliminar fa-sharp fa-solid fa-trash" style="color: #ffff;"></i></a>
                        <a href="/controllers/editarProducto.html?id=${id}"><i class="editar fa-solid fa-pen-to-square" style="color: #ffff;"></i></a>
                        <p>${nombre}</p>
                        <span class="gray">S/.${precio}</span>
                        <br>
                        
                        <span>#${codigo}</span>
                        `;


    linea.innerHTML = contenido;
    const btn= linea.querySelector("a");
    btn.addEventListener("click", () =>{
        const id = btn.id;
        productServices.eliminarProducto(id).then(respuesta => {
        }).catch(err => alert("Ocurrió un error"));
    })
    return linea;
    
}

const table=document.querySelector("[data-table]");


productServices.listaProductos()

.then((data) =>{console.log(data);
    data.forEach(({img, nombre, precio, codigo, id}) => {
        const nuevaLinea= crearNuevoArticulo(img, nombre, precio, codigo, id);
        table.appendChild(nuevaLinea);

    }); 
}).catch((error)=> alert("Ocurrió un error"));


