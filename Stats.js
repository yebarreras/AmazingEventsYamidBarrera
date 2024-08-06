import { obtenerDatos } from "./Modules/Funciones.js";

document.addEventListener("DOMContentLoaded", () => {
    obtenerDatos()
        .then(data => {
            let mayorCapacidad = data.events.sort((a, b) => b.capacity - a.capacity);
            document.getElementById("event_larger").innerHTML = mayorCapacidad[0].name + " - " + mayorCapacidad[0].capacity;

            let eventosPasados = data.events.filter(evento => evento.date < data.currentDate);
            let eventosFuturos = data.events.filter(evento => evento.date > data.currentDate);

            eventosPasados.forEach(evento => {
                evento.porcentajeAsistencia = (parseInt(evento.assistance) / parseInt(evento.capacity)) * 100;
            })
            eventosPasados.sort((a, b) => b.porcentajeAsistencia - a.porcentajeAsistencia);
            document.getElementById("event_highest").innerHTML = eventosPasados[0].name + " - " + eventosPasados[0].porcentajeAsistencia.toFixed(2) + "%";
            document.getElementById("event_lowest").innerHTML = eventosPasados[9].name + " - " + eventosPasados[eventosPasados.length - 1].porcentajeAsistencia.toFixed(2) + "%";


            function estadisticasPasadas(Array) {
                let categorias = [...new Set(Array.map(evento => evento.category))];
                for (let i = 0; i < categorias.length; i++) {
                    let table = document.getElementById("table_past")
                    let totalIngresos = 0
                    let totalPorcentajeAsistencia = 0
                    let eventosPorCategoria = Array.filter(evento => evento.category === categorias[i]);
                    for (let j = 0; j < eventosPorCategoria.length; j++) {
                        let ingresos = eventosPorCategoria[j].price * eventosPorCategoria[j].assistance;
                        totalIngresos += ingresos;
                        let porcentajeAsistencia = eventosPorCategoria[j].assistance / eventosPorCategoria[j].capacity * 100;
                        totalPorcentajeAsistencia += porcentajeAsistencia
                    }
                    totalPorcentajeAsistencia = totalPorcentajeAsistencia / eventosPorCategoria.length
                    let crearFila = `
                    <tr>
                        <td class="fw-semibold">${categorias[i]}</td>
                        <td class="text-center">$ ${totalIngresos}</td>
                        <td class="text-center">${totalPorcentajeAsistencia.toFixed(2)}%</td>
                    </tr>`
                    table.innerHTML += crearFila;
                }
            }
            estadisticasPasadas(eventosPasados);

            function estadisticasFuturas(Array) {
                let categorias = [...new Set(Array.map(evento => evento.category))];
                for (let i = 0; i < categorias.length; i++) {
                    let table = document.getElementById("table_upcoming")
                    let totalIngresos = 0
                    let totalPorcentajeAsistencia = 0
                    let eventosPorCategoria = Array.filter(evento => evento.category === categorias[i]);
                    console.log(eventosPorCategoria);
                    for (let j = 0; j < eventosPorCategoria.length; j++) {
                        let ingresos = eventosPorCategoria[j].price * eventosPorCategoria[j].estimate;
                        totalIngresos += ingresos;
                        let porcentajeAsistencia = eventosPorCategoria[j].estimate / eventosPorCategoria[j].capacity * 100;
                        totalPorcentajeAsistencia += porcentajeAsistencia
                    }
                    totalPorcentajeAsistencia = totalPorcentajeAsistencia / eventosPorCategoria.length
                    let crearFila = `
                    <tr>
                        <td class="fw-semibold">${categorias[i]}</td>
                        <td class="text-center">$ ${totalIngresos}</td>
                        <td class="text-center">${totalPorcentajeAsistencia.toFixed(2)}%</td>
                    </tr>`
                    table.innerHTML += crearFila;
                }
            }
            estadisticasFuturas(eventosFuturos);
        })
        .catch(e => console.log(e));
})
