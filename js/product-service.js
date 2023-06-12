
const listaProductos = () => fetch("http://localhost:3000/profile").then((respuesta) => respuesta.json());
 


const crearProducto = (img, nombre, precio,codigo, categoria, descripcion) => {
     return fetch("http://localhost:3000/profile", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({img, nombre, precio,codigo, id: uuid.v4(), categoria, descripcion}),
    })
}

const eliminarProducto =(id) => {
    console.log("Eliminar a -->", id);
    return fetch(`http://localhost:3000/profile/${id}`,  {
        method: "DELETE",
    })
}

const detalleProducto = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`).then( respuesta =>respuesta.json());
}

const actualizarProducto =(img, nombre, precio,codigo, categoria, descripcion, id) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({img, nombre, precio,codigo, categoria, descripcion}),
        })
        .then((respuesta) => console.log(respuesta))
        .catch((err) => console.log(err));
}
export const productServices ={
    listaProductos,
    crearProducto,
    eliminarProducto,
    detalleProducto,
    actualizarProducto,
};
