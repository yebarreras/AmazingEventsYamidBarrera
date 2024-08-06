const urlAmazingEvents = "https://aulamindhub.github.io/amazing-api/events.json";

function obtenerDatos() {
    return fetch(urlAmazingEvents)
        .then(response => response.json())
        .then(data => {
            return data
        })
        .catch(e => console.log(e));
        
}

function createCards(arreglo) {
    let containerCards = document.getElementById("containerCards");
    if (arreglo.length == 0) {
        containerCards.innerHTML = "No se encontraron resultados";
    } else {
        containerCards.innerHTML = "";
        for (let i = 0; i < arreglo.length; i++) {
            let card = document.createElement('div');
            containerCards.appendChild(card)
            card.className = 'card m-2'
            let imag = document.createElement('img');
            card.appendChild(imag)
            imag.className = 'card-img-top h-50'
            imag.src = arreglo[i].image
            let description = document.createElement('div');
            card.appendChild(description)
            description.className = 'card-body'
            let nombre = document.createElement('h5');
            description.appendChild(nombre);
            nombre.classnombre = 'card-title'
            nombre.textContent = arreglo[i].name
            let content = document.createElement('p');
            description.appendChild(content);
            content.className = 'card-text'
            content.textContent = arreglo[i].description
            let details = document.createElement('div');
            card.appendChild(details);
            details.className = 'd-flex justify-content-between m-2'
            let price = document.createElement('p');
            details.appendChild(price);
            price.className = 'price mb-0'
            price.textContent = 'Price: $' + arreglo[i].price
            let info = document.createElement('a');
            details.appendChild(info);
            info.className = 'btn btn-info boton';
            info.id = arreglo[i]._id
            info.href = "Details.html?_id=" + arreglo[i]._id;
            info.textContent = 'Details';
        };
    }
    return containerCards;
}

function pintarCheckbox(arreglo) {
    let filtros = document.getElementById("filters")
    let categorias = [...new Set(arreglo.map(evento => evento.category))]
    for (let i = 0; i < categorias.length; i++) {
        let checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.className = "form-check form-check-inline mx-1"
        checkbox.value = categorias[i]
        checkbox.id = categorias[i]
        let label = document.createElement('label')
        label.className = 'form-check-label me-3'
        label.htmlFor = categorias[i]
        label.textContent = categorias[i]
        filtros.appendChild(checkbox)
        filtros.appendChild(label)
    }
}

function elementosDom() {
    let checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let search = document.getElementById("search");
    let checkboxChecked = [];
    let textoBusqueda = "";
    return { checkboxes, search, checkboxChecked, textoBusqueda };
}

function aplicarFiltros(arreglo, checkboxChecked, textoBusqueda) {
    const eventosFiltrados = arreglo.filter(evento => {
        const coincideCategoria = checkboxChecked.length === 0 || checkboxChecked.includes(evento.category);
        const coincideTexto = textoBusqueda === "" || evento.name.toLowerCase().includes(textoBusqueda) || evento.description.toLowerCase().includes(textoBusqueda);
        return coincideCategoria && coincideTexto;
    });
    createCards(eventosFiltrados);
}

export { obtenerDatos, createCards, pintarCheckbox, aplicarFiltros, elementosDom }