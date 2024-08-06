import { obtenerDatos, createCards, pintarCheckbox, aplicarFiltros, elementosDom } from "./Modules/Funciones.js";

document.addEventListener("DOMContentLoaded", () => {
    obtenerDatos()
        .then(data => {
            let eventos = data.events
            createCards(data.events)
            pintarCheckbox(data.events)
            let { checkboxes, search, checkboxChecked, textoBusqueda } = elementosDom()

            checkboxes.forEach((checkbox) => {
                checkbox.addEventListener("change", () => {
                    checkboxChecked = Array.from(checkboxes).filter(checkbox => checkbox.checked).map(checkbox => checkbox.value);
                    aplicarFiltros(eventos, checkboxChecked, textoBusqueda);
                });
            });
            search.addEventListener("keyup", (e) => {
                textoBusqueda = e.target.value.toLowerCase();
                aplicarFiltros(data.events, checkboxChecked, textoBusqueda);
            });

            aplicarFiltros(eventos, checkboxChecked, textoBusqueda);
        })
        .catch(e => console.log(e));
})