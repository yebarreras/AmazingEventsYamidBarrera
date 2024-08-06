import { obtenerDatos } from "./Modules/Funciones.js";

document.addEventListener("DOMContentLoaded", () => {
    obtenerDatos()
        .then(data => {
            let url = window.location
            let urlObjeto = new URLSearchParams(url.search);
            let id = urlObjeto.get("_id");

            function pintarDetalles(id) {
                for (let i = 0; i < data.events.length; i++) {
                    if (data.events[i]._id == id) {
                        let imagen = document.getElementById("imagenDetalles");
                        console.log(imagen);
                        let titulo = document.getElementById("tituloDetalles");
                        let categoria = document.getElementById("categoriaDetalles");
                        let fecha = document.getElementById("fechaDetalles");
                        let descripcion = document.getElementById("descripcionDetalles");
                        let aforo = document.getElementById("aforoDetalles");
                        let precio = document.getElementById("precioDetalles");
                        imagen.src = data.events[i].image;
                        imagen.alt = data.events[i].name;
                        titulo.innerHTML = data.events[i].name;
                        categoria.innerHTML = data.events[i].category;
                        fecha.innerHTML = "Date: " + data.events[i].date + " - " + data.events[i].place;
                        descripcion.innerHTML = data.events[i].description;
                        aforo.innerHTML = data.events[i].assistance?"Asistencia: " + data.events[i].assistance + " - Capacidad: " + data.events[i].capacity:"Estimado: " + data.events[i].estimate + " - Capacidad: " + data.events[i].capacity
                        precio.innerHTML = "Price: $" + data.events[i].price;
                    }
                }
            }
            pintarDetalles(id);
        })
        .catch(e => console.log(e));
})