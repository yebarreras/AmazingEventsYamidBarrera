import { obtenerDatos, createCards, pintarCheckbox, aplicarFiltros, elementosDom } from "./Modules/Funciones.js";

document.addEventListener("DOMContentLoaded", () => {

    obtenerDatos()
        .then(data => {
            let eventosPasados = data.events.filter(evento => evento.date < data.currentDate)
            createCards(eventosPasados)
            pintarCheckbox(eventosPasados)
            let { checkboxes, search, checkboxChecked, textoBusqueda } = elementosDom()
            
            checkboxes.forEach((checkbox) => {
                checkbox.addEventListener("change", () => {
                    checkboxChecked = Array.from(checkboxes).filter(checkbox => checkbox.checked).map(checkbox => checkbox.value);
                    aplicarFiltros(eventosPasados, checkboxChecked, textoBusqueda);
                });
            });
            search.addEventListener("keyup", (e) => {
                textoBusqueda = e.target.value.toLowerCase();
                aplicarFiltros(eventosPasados, checkboxChecked, textoBusqueda);
            });

            aplicarFiltros(eventosPasados, checkboxChecked, textoBusqueda);
        })
        .catch(e => console.log(e));
})