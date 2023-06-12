import { productServices } from "./product-service.js";


const crearArticuloFront = (img, nombre, precio, id) =>{
    const linea =document.createElement("div");
    linea.classList.add("section_product");
    const contenido =
                        `        
                        <img class="product-image" src="../imagenes/${img}" alt="">
                        <p>${nombre}</p>
                        <span class="gray">S/.${precio}</span>
                        <br>
                        <p><a href="/controllers/descripcion.html?id=${id}" class="enlace blue">Ver producto</a></p>
                        `;


    linea.innerHTML = contenido;
    const btn= linea.querySelector("a");
    btn.addEventListener("click", () =>{
        const id = btn.id;
        productServices.mostrarDescripcion(id).then(respuesta => {
        }).catch(err => alert("Ocurrió un error"));
    })
    return linea;
}

const tableStar= document.querySelector("[data-star]");
const tableConsole=document.querySelector("[data-console]");
const tableDiversos=document.querySelector("[data-diversos]");

productServices.listaProductos()

.then((data) =>{console.log(data);
    data.forEach(({img, nombre, precio, id,categoria}) => {

        if(categoria=="star-wars"){
            const nuevaLinea= crearArticuloFront(img, nombre, precio, id, categoria);
            tableStar.appendChild(nuevaLinea);    
        }
        else if(categoria=="consolas"){
            const nuevaLinea= crearArticuloFront(img, nombre, precio, id, categoria);
            tableConsole.appendChild(nuevaLinea); 
        }
        else if(categoria=="diversos"){
            const nuevaLinea= crearArticuloFront(img, nombre, precio, id, categoria);
            tableDiversos.appendChild(nuevaLinea); 
        }
        else{
            console.log("error");

        }
       
    }); 
}).catch((error)=> alert("Ocurrió un error"));
