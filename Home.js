document.addEventListener("DOMContentLoaded", () => {

    const data = {
        currentDate: "2023-01-01",
        events: [
            {
                _id: "639c723b992482e5f2834be9",
                name: "Collectivities Party",
                image: "https://i.postimg.cc/Fs03hQDt/Collectivities-Party.jpg",
                date: "2022-12-12",
                description:
                    "Enjoy your favourite dishes, from different countries, in a unique event for the whole family.",
                category: "Food Fair",
                place: "Room A",
                capacity: 45000,
                assistance: 42756,
                price: 5,
                __v: 0,
            },
            {
                _id: "639c723b992482e5f2834beb",
                name: "Korean style",
                image: "https://i.postimg.cc/ZmD3Xf57/Korean-style.jpg",
                date: "2023-08-12",
                description:
                    "Enjoy the best Korean dishes, with international chefs and awesome events.",
                category: "Food Fair",
                place: "Room A",
                capacity: 45000,
                price: 10,
                __v: 0,
                estimate: 42756,
            },
            {
                _id: "639c723c992482e5f2834bed",
                name: "Jurassic Park",
                image: "https://i.postimg.cc/GmHRkbNV/Jurassic-Park.jpg",
                date: "2022-11-02",
                description:
                    "Let's go meet the biggest dinosaurs in the paleontology museum.",
                category: "Museum",
                place: "Field",
                capacity: 82000,
                price: 15,
                __v: 0,
                assistance: 65892,
            },
            {
                _id: "639c723c992482e5f2834bef",
                name: "Parisian Museum",
                image: "https://i.postimg.cc/c4C2zXm8/Parisian-Museum.jpg",
                date: "2023-11-02",
                description:
                    "A unique tour in the city of lights, get to know one of the most iconic places.",
                category: "Museum",
                place: "Paris",
                capacity: 8200,
                estimate: 8200,
                price: 3500,
                __v: 0,
            },
            {
                _id: "639c723c992482e5f2834bf1",
                name: "Comicon",
                image: "https://i.postimg.cc/KYD0jMf2/comicon.jpg",
                date: "2022-02-12",
                description:
                    "For comic lovers, all your favourite characters gathered in one place.",
                category: "Costume Party",
                place: "Room C",
                capacity: 120000,
                assistance: 110000,
                price: 54,
                __v: 0,
            },
            {
                _id: "639c723c992482e5f2834bf3",
                name: "Halloween Night",
                image: "https://i.postimg.cc/RZ9fH4Pr/halloween.jpg",
                date: "2023-02-12",
                description: "Come with your scariest costume and win incredible prizes.",
                category: "Costume Party",
                place: "Room C",
                capacity: 12000,
                estimate: 9000,
                price: 12,
                __v: 0,
            },
            {
                _id: "639c723c992482e5f2834bf5",
                name: "Metallica in concert",
                image: "https://i.postimg.cc/PrMJ0ZMc/Metallica-in-concert.jpg",
                date: "2023-01-22",
                description: "The only concert of the most emblematic band in the world.",
                category: "Music Concert",
                place: "Room A",
                capacity: 138000,
                estimate: 138000,
                price: 150,
                __v: 0,
            },
            {
                _id: "639c723c992482e5f2834bf7",
                name: "Electronic Fest",
                image: "https://i.postimg.cc/KvsSK8cj/Electronic-Fest.jpg",
                date: "2022-01-22",
                description:
                    "The best national and international DJs gathered in one place.",
                category: "Music Concert",
                place: "Room A",
                capacity: 138000,
                assistance: 110300,
                price: 250,
                __v: 0,
            },
            {
                _id: "639c723d992482e5f2834bf9",
                name: "10K for life",
                image: "https://i.postimg.cc/fyLqZY9K/10-K-for-life.jpg",
                date: "2022-03-01",
                description: "Come and exercise, improve your health and lifestyle.",
                category: "Race",
                place: "Soccer field",
                capacity: 30000,
                assistance: 25698,
                price: 3,
                __v: 0,
            },
            {
                _id: "639c723d992482e5f2834bfb",
                name: "15K NY",
                image: "https://i.postimg.cc/zv67r65z/15kny.jpg",
                date: "2023-03-01",
                description:
                    "We'll be raising funds for hospitals and medical care in this unique event held in The Big Apple.",
                category: "Race",
                place: "New York",
                capacity: 3000000,
                price: 3,
                __v: 0,
                estimate: 2569800,
            },
            {
                _id: "639c723d992482e5f2834bfd",
                name: "School's book fair",
                image: "https://i.postimg.cc/Sst763n6/book1.jpg",
                date: "2023-10-15",
                description: "Bring your unused school book and take the one you need.",
                category: "Book Exchange",
                place: "Room D1",
                capacity: 150000,
                estimate: 123286,
                price: 1,
                __v: 0,
            },
            {
                _id: "639c723d992482e5f2834bff",
                name: "Just for your kitchen",
                image: "https://i.postimg.cc/05FhxHVK/book4.jpg",
                date: "2022-11-09",
                description:
                    "If you're a gastronomy lover come get the cookbook that best suits your taste and your family's.",
                category: "Book Exchange",
                place: "Room D6",
                capacity: 130000,
                assistance: 90000,
                price: 100,
                __v: 0,
            },
            {
                _id: "639c723d992482e5f2834c01",
                name: "Batman",
                image: "https://i.postimg.cc/vH52y81C/cinema4.jpg",
                date: "2022-3-11",
                description: "Come see Batman fight crime in Gotham City.",
                category: "Cinema",
                place: "Room D1",
                capacity: 11000,
                assistance: 9300,
                price: 225,
                __v: 0,
            },
            {
                _id: "639c723d992482e5f2834c03",
                name: "Avengers",
                image: "https://i.postimg.cc/T3C92KTN/scale.jpg",
                date: "2023-10-15",
                description:
                    "Marvel's Avengers Premier in 3d, the start of an epic saga with your favourite superheroes.",
                category: "Cinema",
                place: "Room D1",
                capacity: 9000,
                estimate: 9000,
                price: 250,
                __v: 0,
            },
        ],
    };

    let containerCards = document.getElementById("containerCards");

    function createCards(arreglo) {
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

        return containerCards

    }

    createCards(data.events)

    function pintarCheckbox(arreglo) {
        let filtros = document.getElementById("filters")
        let categorias = [...new Set(arreglo.map(evento => evento.category))]
        console.log(categorias);
        for (let i = 0; i < categorias.length; i++) {
            let checkbox = document.createElement('input')
            checkbox.type = 'checkbox'
            checkbox.className = "form-check form-check-inline me-1"
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

    pintarCheckbox(data.events)


    let checkboxCheckeados = [];
    let eventosCheckeados = [];


    function filtrarCheckbox() {
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');

        checkboxes.forEach(checkbox => {
            checkbox.addEventListener("change", function (event) {
                if (event.target.checked) {
                    if (tarjetasBuscadas.length !== 0) {
                        checkboxCheckeados.push(event.target.value);
                        eventosCheckeados = tarjetasBuscadas.filter(evento => checkboxCheckeados.includes(evento.category));
                        containerCards.innerHTML = "";
                        createCards(eventosCheckeados);
                        if (eventosCheckeados.length === 0) {
                            containerCards.innerHTML = "<h3>No hay resultados</h3>"
                        }
                    } else {
                        checkboxCheckeados.push(event.target.value);
                        console.log(checkboxCheckeados);
                        eventosCheckeados = data.events.filter(evento => checkboxCheckeados.includes(evento.category));
                        containerCards.innerHTML = "";
                        console.log(eventosCheckeados);
                        createCards(eventosCheckeados);
                        if (eventosCheckeados.length === 0) {
                            containerCards.innerHTML = "<h3>No hay resultados</h3>"
                        }
                    }
                } else {
                    if (tarjetasBuscadas.length !== 0) {
                        checkboxCheckeados = checkboxCheckeados.filter(categoria => categoria !== event.target.value);
                        console.log(checkboxCheckeados);
                        if (checkboxCheckeados.length !== 0) {
                            eventosCheckeados = tarjetasBuscadas.filter(evento => checkboxCheckeados.includes(evento.category));
                            containerCards.innerHTML = "";
                            console.log(eventosCheckeados);
                            createCards(eventosCheckeados);
                            if (eventosCheckeados.length === 0) {
                                containerCards.innerHTML = "<h3>No hay resultados</h3>"
                            }
                        } else {
                            containerCards.innerHTML = "";
                            createCards(tarjetasBuscadas);
                            if (eventosCheckeados.length === 0) {
                                containerCards.innerHTML = "<h3>No hay resultados</h3>"
                            }
                        }
                    } else {
                        checkboxCheckeados = checkboxCheckeados.filter(categoria => categoria !== event.target.value);
                        console.log(checkboxCheckeados);
                        if (checkboxCheckeados.length !== 0) {
                            eventosCheckeados = data.events.filter(evento => checkboxCheckeados.includes(evento.category));
                            containerCards.innerHTML = "";
                            console.log(eventosCheckeados);
                            createCards(eventosCheckeados);
                            if (eventosCheckeados.length === 0) {
                                containerCards.innerHTML = "<h3>No hay resultados</h3>"
                            }
                        } else {
                            containerCards.innerHTML = "";
                            createCards(data.events);
                            if (eventosCheckeados.length === 0) {
                                containerCards.innerHTML = "<h3>No hay resultados</h3>"
                            }
                        }
                    }
                }
            });
        });
    }

    filtrarCheckbox();

    let search = document.getElementById("search");

    let tarjetasBuscadas = [];
    console.log(tarjetasBuscadas);

    function filtrarTexto(tarjetas, texto) {
        tarjetasBuscadas = tarjetas.filter(tarjeta => tarjeta.name.toLowerCase().includes(texto) || tarjeta.description.toLowerCase().includes(texto));
        console.log(tarjetasBuscadas);
        return tarjetasBuscadas
    }

    search.addEventListener("keyup", (event) => {
        if (eventosCheckeados.length !== 0) {
            let texto = event.target.value.toLowerCase();
            let tarjetasBuscadas = filtrarTexto(eventosCheckeados, texto);
            containerCards.innerHTML = "";
            createCards(tarjetasBuscadas);
            if (tarjetasBuscadas.length === 0) {
                containerCards.innerHTML = "<h3>No hay resultados</h3>"
            }
        } else {
            let texto = event.target.value.toLowerCase();
            let tarjetasBuscadas = filtrarTexto(data.events, texto);
            containerCards.innerHTML = "";
            createCards(tarjetasBuscadas);
            if (tarjetasBuscadas.length === 0) {
                containerCards.innerHTML = "<h3>No hay resultados</h3>"
            }
        }
    });
})