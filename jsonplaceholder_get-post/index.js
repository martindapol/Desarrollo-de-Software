//función principal:
function procesar() {
  const clienteHTTP = new XMLHttpRequest()
  const $lst = document.getElementById("lst")
  clienteHTTP.onreadystatechange = function () {
    if (clienteHTTP.readyState == XMLHttpRequest.DONE &&  clienteHTTP.status == 200) {
      const json = JSON.parse(clienteHTTP.responseText)
      //actualizar la página utilizando la API DOM:
      json.forEach((e) => {
        const $li = document.createElement("li")
        $li.innerHTML = `<h5 style='color:red;'>${e.id} | Titulo: ${e.title}</h5><br/><h6>Cuerpo: ${e.body}</h6><hr/>`
        $lst.appendChild($li)
      })
    }
  }
  clienteHTTP.open('GET', 'https://jsonplaceholder.typicode.com/posts')
  clienteHTTP.send();



  /*fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      $lst.innerHTML = "";
      json.forEach((element) => {
        const $li = document.createElement("li");
        $li.innerHTML = `<h5 style='color:blue;'>${element.id} | Titulo: ${element.title}</h5><br/><h6>Cuerpo: ${element.body}</h6><hr/>`;
        $lst.appendChild($li);
      });
    })
    .catch((error) => {
      alert(`Ha ocurrido un error. Vuelva a intentarlo`);
      console.error(error);
    });
    */
}

function enviar() {
  const $divError = document.getElementById("error");
  const $divOk = document.getElementById("ok");
  const $title = document.getElementById("title");
  const $body = document.getElementById("body");

  let data = {
    id: 0,
    userId: 1,
    title: $title.value,
    body: $body.value,
  };

  //1| Crear la instancia:
  const xhr = new XMLHttpRequest();
  //2| Asignarle un escucha para el evento 'readystatechange'
  xhr.addEventListener("readystatechange", (e) => {
    if (xhr.readyState !== 4) return;

    if (xhr.status >= 200 && xhr.status < 300) {
      $divOk.removeAttribute("hidden");
      console.log(xhr.responseText); // respuesta de la API!
    } else {
      $divError.removeAttribute("hidden");
    }
  });
  //3|Abrir la petición HTTP:
  xhr.open("POST", "https://jsonplaceholder.typicode.com/posts");
  xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
  //4|enviar la petición:
  xhr.send(JSON.stringify(data));
}

//función para recargar la página:
function recargar() {
  location.reload();
}
