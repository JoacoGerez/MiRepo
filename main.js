
const ul = document.createElement('ol');
const productos = [
        {id: 1, producto: "Remera", precio: 5000},
        {id: 2, producto: "Pantalon", precio: 7000},
        {id: 3, producto: "Vermuda", precio: 4000 }]
        const guardarlocal = (clave, valor) => { localStorage.setItem(clave, valor)}
console.log (productos)
guardarlocal("Lista de productos", JSON.stringify(productos))
productos.forEach(item => {
    const li = document.createElement('li')
    li.textContent = item.producto
    ul.appendChild(li);
    const boton = document.createElement('button')
boton.textContent = 'Comprar'
li.appendChild(boton)
boton.addEventListener('click', () => {
    console.log(`Comprar ${item.producto}`)
    console.log(`Comprar ${item.precio}`)
    agregarAlCarrito(item)
    function agregarAlCarrito(item){
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.push(item)
    localStorage.setItem('Carrito de Compra', JSON.stringify(carrito))
    }
})
})
const prod = document.getElementById('listaproductos');
prod.appendChild(ul)




    
