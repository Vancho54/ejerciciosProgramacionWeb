function actualizarCarrito (nombreProducto, cantidad) { //Actualizar carrito es una funcion que toma 2 parametros, estos dos parametros vendran dados de la funcion "actualizarContador" Ivan
    var carritoContador = document.querySelector('#carritoContador'+nombreProducto) //Definimos una variable que sera igual al primer elemento encontrado con el id "carritoContador" + el parametro nombreProducto Ivan
    if(carritoContador) //Si la variable carritoContador es verdadera entonces llena el campo del elemento con el id "carritoContador" con una string compuesta del parametro cantidad seguido por " unidades de" seguido por el parametro nombreProducto Ivan
        carritoContador.innerHTML = cantidad +' unidades de '+nombreProducto
    else {
        var parrafoProducto = document.createElement('p') //Si la condicion del if no se cumple entonces se crea una variable "parrafoProducto" con el id "carritoContador" concatenado con el parametro nombreProducto Ivan
        parrafoProducto.setAttribute('id', 'carritoContador'+nombreProducto)
        var textoProducto = document.createTextNode(cantidad+' Unidades de '+nombreProducto) //Define una variable que sera igual a un texto creado con el parametro cantidad + " Unidades de " + el parametro nombreProducto Ivan
        parrafoProducto.appendChild(textoProducto)  //al elemento "p" creado anteriormente y almacenando en la variable "parrafoProducto" le adicionamos la variable "textoProducto" para reflejar la cantidad de unidades de un producto determinado que se agregaron al carrito. Ivan
        document.querySelector('sidebar').appendChild(parrafoProducto) //Finalmente nos posisionamos sobre el elemento HTML "sidebar" y le agregamos al final el elemento "p" que contiene la informacion actualizada sobre el carrito. Ivan
    }   
}

function actualizarContador () {  //funcion para actualizar el contador de productos ubicados en el centro de la main page con el id "quarters". Ivan
    const contadorAnterior = this.querySelector('.contador') //definimos una funcion "contador anterior" que va a ser igual al contador que se halla apretado. Ivan
    if(contadorAnterior) contadorAnterior.remove() //Si el contador anterior es verdadero, o sea, si no es 0, entonces borra la informacion del contador anterior para actualizarlo. Ivan
    var parrafoClickeado = document.createElement('p')  //Define una variable "parrafoClickeado" que crea un parrafo debajo del producto correspondiente. Ivan
    parrafoClickeado.classList.add('contador')  //le agrega a este nuevo parrafo la clase "contador" si aun no la tiene. Ivan
    var historicoVecesClickeado = Number(this.attributes.vecesclickeado.value) //define una variable "historicoVecesClickeado" que es igual al valor del atributo "veces clickeado" transformado en numero. Ivan
    var actualizadoVecesClickeado = historicoVecesClickeado+1   //Crea una nueva variable "actualizado veces clickeado" que sumara "1" cada vez que se clickee el producto. Ivan
    if(historicoVecesClickeado) //Si el historico de veces clickeado no es 0 se crea la variable "textoClickeado" que es igual a un nuevo texto con el valor de "actualizadoVecesClickeado" sumado a una cadena de texto " unidades". Ivan
        var textoClickeado = document.createTextNode(actualizadoVecesClickeado+' Unidades')
    else
        var textoClickeado = document.createTextNode('1 Unidad')  //Si no se cumple la condicion del if "textoClickeado" se actualiza a "1 unidad". Ivan
    parrafoClickeado.appendChild(textoClickeado)    //Finalmente se le agrega al elemento "p" creado anteriormente la cadena de texto que se encuentra en "textoClickeado" correspondiente al producto seleccionado Ivan
    this.appendChild(parrafoClickeado)
    this.attributes.vecesclickeado.value = actualizadoVecesClickeado //Se actualiza la informacion del atributo "vecesClickeado" para que ahora contenga la cantidad de productos correspondientes a las veces que se lo clickeo. Ivan
    actualizarCarrito(this.attributes.id.value, actualizadoVecesClickeado) //Se llama a la funcion "actualizar carrito" y se le pasan 2 valores, el primero el id del producto se que clickeo que sera el parametro "nombreProducto", y el segundo el actualizado de las veces que se clickeo el producto se pasara al parametro "cantidad" Ivan
}

document.querySelectorAll('.quarter').forEach(el => el.addEventListener('click', actualizarContador)) 
