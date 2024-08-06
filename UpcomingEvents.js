import { obtenerDatos, createCards, pintarCheckbox, aplicarFiltros, elementosDom } from "./Modules/Funciones.js";

document.addEventListener("DOMContentLoaded", () => {
    obtenerDatos()
        .then(data => {
            let eventosFuturos = data.events.filter(evento => evento.date > data.currentDate)
            createCards(eventosFuturos)
            pintarCheckbox(eventosFuturos)
            let { checkboxes, search, checkboxChecked, textoBusqueda } = elementosDom()

            checkboxes.forEach((checkbox) => {
                checkbox.addEventListener("change", () => {
                    checkboxChecked = Array.from(checkboxes).filter(checkbox => checkbox.checked).map(checkbox => checkbox.value);
                    aplicarFiltros(eventosFuturos, checkboxChecked, textoBusqueda);
                });
            });
            search.addEventListener("keyup", (e) => {
                textoBusqueda = e.target.value.toLowerCase();
                aplicarFiltros(eventosFuturos, checkboxChecked, textoBusqueda);
            });

            aplicarFiltros(eventosFuturos, checkboxChecked, textoBusqueda);
        })
        .catch(e => console.log(e));
})