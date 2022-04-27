const carrito = document.getElementById('carrito');
const cafes = document.getElementById('lista-cafe');
const listaCafes = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

cargarEventListeners();

function cargarEventListeners () {
    cafes.addEventListener('click', comprarCafe);
    carrito.addEventListener('click', eliminarCafe);
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
    document.addEventListener('DOMContentLoaded', leerLocalStorage)
}

function comprarCafe(e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')) {
        const cafe = e.target.parentElement.parentElement;
        leerDatosCafe(cafe);
        Swal.fire({
            title: '!Se ha añadido al carrito¡',
            icon: 'success',
            confirmButtonText: 'aceptar',
            confirmButtonColor: 'green',
            padding: '5rem',
            backdrop: true,
            timer: 5000,
        });
        
    }
}

function leerDatosCafe(cafe) {
    const infoCafe = {
        imagen: cafe.querySelector('img').src,
        titulo: cafe.querySelector('h4').textContent,
        precio: cafe.querySelector('.precio span').textContent,
        id: cafe.querySelector('a').getAttribute('date-id')
    }
    insertarCarrito(infoCafe);
}

function insertarCarrito(cafe) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>
            <img src="${cafe.imagen}" width=100>
        </td>
        <td>${cafe.titulo}</td>
        <td>${cafe.precio}</td>
        <td>
            <a href="#" class="borrar-cafe" data-id="${cafe.id}">X</a>
        </td>
    `;
    listaCafes.appendChild(row);
    guardarCafeLocalStorage(cafe);
}


function eliminarCafe(e) {
    e.preventDefault();

    let cafe,
    cafeId;
    if(e.target.classList.contains('borrar-cafe')){
        e.target.parentElement.parentElement.remove();
        cafe = e.target.parentElement.parentElement;
        cafeId = cafe.querySelector('a').getAttribute('data-id');
    }
    eliminarCafeLocalStorage(cafeId);
}

function vaciarCarrito() {
    while(listaCafes.firstChild){
        listaCafes.removeChild(listaCafes.firstChild);

    }

    vaciarLocalStorage();
    return false;
}

function guardarCafeLocalStorage(cafe) {
    let cafes;
    cafes = obtenerCafesLocalStorage();
    cafes.push(cafe);
    localStorage.setItem('cafes', JSON.stringify(cafes))
}

function obtenerCafesLocalStorage() {
    let cafesLS;

    if(localStorage.getItem('cafes') === null){
        cafesLS = [];
    } else {
        cafesLS = JSON.parse(localStorage.getItem('cafes'));
    }
    return cafesLS;
}

function leerLocalStorage() {
    let cafesLS;

    cafesLS = obtenerCafesLocalStorage();

    cafesLS.forEach(function(cafe){
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${cafe.imagen}" width=100> 
            </td>
            <td>${cafe.titulo}</td>
            <td>${cafe.precio}</td>
            <td>
                <a href="#" class="borrar-cafe" data-id="${cafe.id}">X</a>
            </td>
        `;
        listaCafes.appendChild(row);
    });

}

function eliminarCafeLocalStorage(cafe) {
    let cafesLS;

    cafesLS = obtenerCafesLocalStorage();

    cafesLS.forEach(function(cafesLS, index){
        if(cafesLS.id === cafe) {
            cafesLS.splice(index, 1)
        }
    });

    localStorage.setItem('cafes', JSON.stringify(cafesLS));
}

function vaciarLocalStorage() {
    localStorage.clear();
}

/* barra de busqueda */
document.addEventListener('keyup', e=>{

    if (e.target.matches('#buscador')){
        document.querySelectorAll('.card').forEach(cafe =>{
            cafe.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            ?cafe.classList.remove("filtro")
            :cafe.classList.add('filtro')
        })
    }
})

/* api google */
const coordenadas = { lat: -33.5149168, lng: -70.6051204 };
let map;
let marker;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: coordenadas,
    zoom: 12,
  });
  const marker = new google.maps.Marker({
    position: coordenadas,
    map: map,
  });
}

window.initMap = initMap;
