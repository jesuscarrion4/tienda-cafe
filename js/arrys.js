const productos = [
    { tipo: "Cafe Negro", modelo: "Marca nescafe", precio: 1800, img:"img/coffee2.jpg" },
    { tipo: "Cafe con leche", modelo: "Marca nescafe", precio: 1500, img:"img/coffee1.jpg"  },
    { tipo: "Cafe Americano", modelo: "Marca nescafe", precio: 1550, img:"img/coffee4.jpg"  },
    { tipo: "cafe expreso", modelo: "Marca nescafe", precio: 1390, img:"img/coffee2.jpg"  },
    { tipo: "Cafe capuchino", modelo: "Marca nescafe", precio: 1990, img:"img/coffee1.jpg"  },
    { tipo: "Cafe de granos", modelo: "Marca nescafe", precio: 1890, img:"img/coffee5.jpg" },
    { tipo: "Cafe premium", modelo: "Marca nescafe", precio: 1790, img:"img/coffee4.jpg"  },
    { tipo: "Cafe latte", modelo: "Marca nescafe", precio: 1690, img:"img/coffee1.jpg"  },
    { tipo: "cafe Moca", modelo: "Marca nescafe", precio: 1650, img:"img/coffee5.jpg"  },
    { tipo: "Cafe frances", modelo: "Marca nescafe", precio: 1590, img:"img/coffee3.jpg"  },
    { tipo: "Cafe Caramelo Macchiato", modelo: "Marca nescafe", precio: 1290, img:"img/coffee1.jpg" },
    { tipo: "Cafe especial", modelo: "Marca nescafe", precio: 1950, img:"img/coffee5.jpg"  },
];


const container = document.getElementById('container');
for(const producto of productos){
const cardCinco = document.createElement('main');
cardCinco.className = '';
const img = `
<div class="four columns">
    <div class="card">
            <img src="${producto.img}" class="u-full-width">
            <div class="info-card">
                <h4>${producto.tipo}</h4>
                <p>Marca nescafe</p>
                <img src="img/estrellas.png" >
                    <p class="precio">$5000 <span class="u-pull-right">${producto.precio}</span></p>
                <a href="#" 
                class="u-full-width button-primary button input agregar-carrito                        
                ">Agregar Al Carrito</a>
            </div>
    </div>
</div>`;

cardCinco.innerHTML = img;

container.append(cardCinco)
};