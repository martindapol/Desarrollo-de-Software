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

function obtener_precio_medias(){
  //completar...
}


function obtener_precio_estaciones(){
  //completar...
}