
const headerMenu=document.querySelector('.hm-header');

console.log(headerMenu.offsetTop);

window.addEventListener('scroll',()=>{
    if(window.pageYOffset > 80){
        headerMenu.classList.add('header-fixed');
    }else{
        headerMenu.classList.remove('header-fixed');
    }
})

/*=========================================
    Tabs
==========================================*/
if(document.querySelector('.hm-tabs')){

    const tabLinks=document.querySelectorAll('.hm-tab-link');
    const tabsContent=document.querySelectorAll('.tabs-content');

    tabLinks[0].classList.add('active');

    if(document.querySelector('.tabs-content')){
        tabsContent[0].classList.add('tab-active');
    }
    

    for (let i = 0; i < tabLinks.length; i++) {
        
        tabLinks[i].addEventListener('click',()=>{

            
            tabLinks.forEach((tab) => tab.classList.remove('active'));
            tabLinks[i].classList.add('active');
            
            tabsContent.forEach((tabCont) => tabCont.classList.remove('tab-active'));
            tabsContent[i].classList.add('tab-active');
            
        });
        
    }

}

/*=========================================
    MENU
==========================================*/

const menu=document.querySelector('.icon-menu');
const menuClose=document.querySelector('.cerrar-menu');

menu.addEventListener('click',()=>{
    document.querySelector('.header-menu-movil').classList.add('active');
})

menuClose.addEventListener('click',()=>{
    document.querySelector('.header-menu-movil').classList.remove('active');
})

// --------------------------------------- carrito version1----------------------------
document.addEventListener("DOMContentLoaded", function() {
  const itemsContainer = document.getElementById("items-container");
  const totalElement = document.getElementById("total");
  const checkoutBtn = document.getElementById("checkout-btn");
  let total = 0;

  // Función para agregar un elemento al carrito
  function addItem(name, price) {
    const item = document.createElement("div");
    item.classList.add("item");
    item.innerHTML = `
      <span>${name}</span>
      <span>$${price}</span>
    `;
    itemsContainer.appendChild(item);
    total += price;
    updateTotal();
  }

  // Función para actualizar el total
  function updateTotal() {
    totalElement.textContent = `Total: $${total.toFixed(2)}`;
  }

  // Evento al hacer clic en el botón de pagar
  checkoutBtn.addEventListener("click", function() {
    alert("Gracias por su compra. Total a pagar: $" + total.toFixed(2));
    // Aquí podrías agregar lógica adicional, como enviar la información del carrito a un servidor, etc.
  });

  // Ejemplo: Agregar algunos elementos al carrito
   addItem("Call of Duty", 11001);
   addItem("Assasin Creed ",11002);
   addItem("God of Wars", 11003);
   addItem("Mortal Kombat11", 11008);


});

// ---------------------------------------fin  carrito version1 fin ----------------------------

//-----------------------------------inicio funciones para escribir en dat.json---------------   
function guardarEnServidor(data) {
    fetch('http://localhost:3000/agregar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error al enviar los datos');
        }
        return response.text();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

// Llamada a la función para enviar datos al servidor
//guardarEnServidor({ nombre: 'Producto', cantidad: 1, precio: 10 });


// Función para guardar los datos en un archivo JSON
function guardarEnJSON(data) {

    // Para esto fs.writeFile() nativo de Node.js
    const fs = require('fs');

    fs.writeFile('datos.json', JSON.stringify(data), function(err) {
        if (err) {
            console.error('Error al guardar los datos:', err);
        } else {
            console.log('Datos guardados correctamente');
        }
    });
}

//-----------------------------------fin funciones para escribir en dat.json---------------   


// para ver en carrito los datos del json
fetch('/carrito')
    .then(response => response.json())
    .then(data => {
        // Manipular el DOM para mostrar el contenido del archivo JSON
        const contentDiv = document.getElementById('content');
        contentDiv.innerHTML = ''; // Limpiar contenido previo si es necesario
        Object.keys(data).forEach(key => {
            contentDiv.innerHTML += `<p>${key}: ${data[key]}</p>`;
        });
        console.log('llego aqui');
    })
    .catch(error => {
        console.error('Error al cargar el archivo JSON:', error);
    });

 //   ---------------------------------------
