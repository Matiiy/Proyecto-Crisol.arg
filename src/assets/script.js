const carrito = document.querySelector("#carrito");
const listaCarrito = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.querySelector("#vaciar-carrito");
const prendas = document.querySelectorAll(".agregar-carrito");

cargarEventListeners();

function cargarEventListeners() {
    prendas.forEach(boton => {
        boton.addEventListener('click', comprarElemento);
    });
    carrito.addEventListener('click', eliminarElemento);
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
}

function comprarElemento(e) {
    if (e.target.classList.contains('agregar-carrito')) {
        const elemento = e.target.parentElement.parentElement;
        leerDatosElemento(elemento);
    }
}

function leerDatosElemento(elemento) {
    const infoElemento = {
        imagen: elemento.querySelector('img').src,
        titulo: elemento.querySelector('h1').textContent,
        precio: elemento.querySelector('h3').textContent,
        id: elemento.querySelector('button').getAttribute('data-id')
    }
    insertarCarrito(infoElemento);
}

function insertarCarrito(elemento) {
    const row = document.createElement('tr');
    row.innerHTML = `
     <td>
        <img src="${elemento.imagen}" width="100">
      </td>
       <td>
         ${elemento.titulo}
      </td>
       <td>
       ${elemento.precio}
      </td>
       <td>
       <button class="borrar" data-id="${elemento.id}"> x </button>
      </td>
    `;
    listaCarrito.appendChild(row);
}

function eliminarElemento(e) {
    e.preventDefault();
    if (e.target.classList.contains('borrar')) {
        e.target.parentElement.parentElement.remove();
    }
}

function vaciarCarrito() {
    while (listaCarrito.firstChild) {
        listaCarrito.removeChild(listaCarrito.firstChild);
    }
}



