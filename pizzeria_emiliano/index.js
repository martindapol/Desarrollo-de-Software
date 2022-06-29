lista_precios = null;

function read_precios() {
  const xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      lista_precios = JSON.parse(this.responseText);
    }
  };
  xmlhttp.open("GET", "lista_precios.json", false); //peticion síncrona
  xmlhttp.send();
}

function cargarlista($cbo, valores) {
  valores.forEach((e, i) => {
    const option_elem = document.createElement("option");
    option_elem.value = i;
    option_elem.textContent = e.nombre;
    $cbo.appendChild(option_elem);
  });
}

function cargar_variedades() {
  read_precios();

  //lista pizzas comunes:
  const $lst_enteras = document.getElementById("variedades_enteras");
  cargarlista($lst_enteras, lista_precios);

  //lista pizzas mitades solas:
  const $lst_mediasSolas = document.getElementById("variedades_mediasSolas");
  cargarlista($lst_mediasSolas, lista_precios);

  //listas pizzas medias:
  const $lst_medias1 = document.getElementById("variedades_medias1");
  cargarlista($lst_medias1, lista_precios);
  const $lst_medias2 = document.getElementById("variedades_medias2");
  cargarlista($lst_medias2, lista_precios);

  //listas pizzas 4 estaciones:
  const $lst_4e1 = document.getElementById("variedades_4e1");
  cargarlista($lst_4e1, lista_precios);
  const $lst_4e2 = document.getElementById("variedades_4e2");
  cargarlista($lst_4e2, lista_precios);
  const $lst_4e3 = document.getElementById("variedades_4e3");
  cargarlista($lst_4e3, lista_precios);
  const $lst_4e4 = document.getElementById("variedades_4e4");
  cargarlista($lst_4e4, lista_precios);
}

function obtener_precio_enteras() {
  const $lst = document.getElementById("variedades_enteras");
  const checked = document.querySelector("input[name=opTipo]:checked");
  let elegida = $lst.options[$lst.selectedIndex].text;
  let pizza = lista_precios.filter((e) => e.nombre === elegida)[0];
  const $div = document.getElementById("precioEntera");
  let precio = 0;
  if (checked.value === "comun") {
    precio = pizza.comun;
  } else {
    precio = pizza.gigante;
  }
  $div.innerHTML = precio;
}

function obtener_precio_soloMitad() {
  const $lst = document.getElementById("variedades_mediasSolas");
  let elegida = $lst.options[$lst.selectedIndex].text;
  let pizza = lista_precios.filter((e) => e.nombre === elegida)[0];
  const $div = document.getElementById("precioSoloMedia");
  $div.innerHTML = pizza.mitadGigante;
}

function obtener_precio_medias() {
  const $lst = document.getElementById("variedades_medias1");
  const $lst2 = document.getElementById("variedades_medias2");
  const checked = document.querySelector("input[name=opcionTipo]:checked");
  let elegida = $lst.options[$lst.selectedIndex].text;
  let elegida2 = $lst2.options[$lst2.selectedIndex].text;
  let pizza = lista_precios.filter((e) => e.nombre === elegida)[0];
  let pizza2 = lista_precios.filter((e) => e.nombre === elegida2)[0];
  const $div = document.getElementById("precioMitad");

  if (checked.value === "comun") {
    let precioComun = pizza.comun + pizza2.comun;
    precio = precioComun / 2;
  } else {
    let precioGigante = pizza.gigante + pizza2.gigante;
    precio = precioGigante / 2;
  }

  $div.innerHTML = precio;
}

function obtener_precio_estaciones() {
  const $lst1 = document.getElementById("variedades_4e1");
  const $lst2 = document.getElementById("variedades_4e2");
  const $lst3 = document.getElementById("variedades_4e3");
  const $lst4 = document.getElementById("variedades_4e4");
  let elegida1 = $lst1.options[$lst1.selectedIndex].text;
  let elegida2 = $lst2.options[$lst2.selectedIndex].text;
  let elegida3 = $lst3.options[$lst3.selectedIndex].text;
  let elegida4 = $lst4.options[$lst4.selectedIndex].text;
  let pizza1 = lista_precios.filter((e) => e.nombre === elegida1)[0];
  let pizza2 = lista_precios.filter((e) => e.nombre === elegida2)[0];
  let pizza3 = lista_precios.filter((e) => e.nombre === elegida3)[0];
  let pizza4 = lista_precios.filter((e) => e.nombre === elegida4)[0];
  const $div = document.getElementById("precio4e");
  let valor = 0;
  
  /*if (pizza1.gigante > pizza2.gigante) {
    valor = pizza1.gigante;
  } else {
    valor = pizza2.gigante;
  }

  if (valor > pizza3.gigante) {
    valor = valor;
  } else {
    valor = pizza3.gigante;
  }

  if (valor > pizza4.gigante) {
    valor = valor;
  } else {
    valor = pizza4.gigante;
  }
  precio = valor;
*/

  precio = Math.max(...[pizza1.gigante, pizza2.gigante, pizza3.gigante, pizza4.gigante ])

  $div.innerHTML = precio;
}
