document.addEventListener('scroll', colorNav);
document.addEventListener('DOMContentLoaded', transicionEntreSections);

const paises = [
    {
        nombre: "Argentina",
        capital: "Buenos Aires",
        idioma: "Español",
        poblacion: 45000000,
        moneda: "Peso argentino"
    },
    {
        nombre: "Brasil",
        capital: "Brasilia",
        idioma: "Portugués",
        poblacion: 213000000,
        moneda: "Real brasileño"
    },
    {
        nombre: "Chile",
        capital: "Santiago",
        idioma: "Español",
        poblacion: 19100000,
        moneda: "Peso chileno"
    },
    {
        nombre: "México",
        capital: "Ciudad de México",
        idioma: "Español",
        poblacion: 128000000,
        moneda: "Peso mexicano"
    }
];

const parquesDisney = [
    {
        nombre: "Magic Kingdom",
        ubicacion: "Orlando, Florida, EE. UU.",
        atraccionesDestacadas: ["Space Mountain", "Pirates of the Caribbean", "Haunted Mansion"],
        añoApertura: 1971
    },
    {
        nombre: "Disneyland",
        ubicacion: "Anaheim, California, EE. UU.",
        atraccionesDestacadas: ["Pirates of the Caribbean", "Splash Mountain", "Indiana Jones Adventure"],
        añoApertura: 1955
    },
    {
        nombre: "Disney's Animal Kingdom",
        ubicacion: "Orlando, Florida, EE. UU.",
        atraccionesDestacadas: ["Expedition Everest", "Avatar Flight of Passage", "Kilimanjaro Safaris"],
        añoApertura: 1998
    },
    {
        nombre: "Epcot",
        ubicacion: "Orlando, Florida, EE. UU.",
        atraccionesDestacadas: ["Test Track", "Soarin'", "Spaceship Earth"],
        añoApertura: 1982
    }
];

const transportesOrlando = [
    { nombre: 'Autobús', tarifa: '$2.00 por viaje' },
    { nombre: 'Tren SunRail', tarifa: '$2.00 - $5.00 según la distancia' },
    { nombre: 'Tranvía I-RIDE Trolley', tarifa: '$2.00 - $5.00 por día' },
    { nombre: 'Taxi', tarifa: 'Varía según la distancia y el servicio' },
    { nombre: 'Uber/Lyft', tarifa: 'Varía según la distancia y la demanda' }
    // Puedes agregar más opciones de transporte según sea necesario
];


document.addEventListener('DOMContentLoaded', function () {
    const tablaTransporte = document.getElementById('tabla-transporte');

    const transportesOrlando = [
        { nombre: 'Autobús', tarifa: '$2.00 por viaje' },
        { nombre: 'Tren SunRail', tarifa: '$2.00 - $5.00 según la distancia' },
        { nombre: 'Tranvía I-RIDE Trolley', tarifa: '$2.00 - $5.00 por día' },
        { nombre: 'Taxi', tarifa: 'Varía según la distancia y el servicio' },
        { nombre: 'Uber/Lyft', tarifa: 'Varía según la distancia y la demanda' }
        // Puedes agregar más opciones de transporte según sea necesario
    ];

    // Iterar sobre la lista de transportes y agregar filas a la tabla
    transportesOrlando.forEach(function (transporte) {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${transporte.nombre}</td>
            <td>${transporte.tarifa}</td>
        `;
        tablaTransporte.appendChild(fila);
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const listaParques = document.getElementById("lista-parques");

    parquesDisney.forEach(function (parque) {
        const itemLista = document.createElement("li");
        itemLista.innerHTML = `
            <strong>${parque.nombre}</strong> - Ubicación: ${parque.ubicacion}<br>
            Año de Apertura: ${parque.añoApertura}<br>
            Atracciones Destacadas: ${parque.atraccionesDestacadas.join(", ")}
        `;
        listaParques.appendChild(itemLista);
    });
});



// Obtener el elemento select del formulario
const selectPais = document.getElementById('pais');

// Iterar sobre la lista de países y crear una opción para cada uno
paises.forEach(function (pais) {
    // Crear una nueva opción
    const opcion = document.createElement('option');
    // Establecer el valor y el texto de la opción
    opcion.value = pais.nombre;
    opcion.textContent = pais.nombre;
    // Agregar la opción al select
    selectPais.appendChild(opcion);
});


function colorNav() {
    var parquesSection = document.getElementById('parques');
    var transporteSection = document.getElementById('transporte');
    var navbar = document.getElementById('nav-bar');
    var navAs = document.querySelectorAll('.nav-a'); // Utiliza querySelectorAll para seleccionar todos los elementos con la clase .nav-a

    // Calcula la posición de las secciones "Parques" y "Transporte" respecto a la parte superior de la ventana del navegador
    var parquesPosicion = parquesSection.getBoundingClientRect().top;
    var transportePosicion = transporteSection.getBoundingClientRect().top;

    // Si la sección "Parques" o "Transporte" está en la parte superior de la ventana, cambia el color del nav y del texto
    if (parquesPosicion <= 0 || transportePosicion <= 0) {
        navbar.style.backgroundColor = '#fff';
        // Cambia el color del texto de todos los enlaces del menú de navegación
        navAs.forEach(function (navA) {
            navA.style.color = '#333';
        });
    } else {
        navbar.style.backgroundColor = '#333'; // Color original del nav
        // Cambia el color del texto de todos los enlaces del menú de navegación
        navAs.forEach(function (navA) {
            navA.style.color = '#fff';
        });
    }
}



function transicionEntreSections() {
    var enlacesNav = document.querySelectorAll('nav-a');

    enlacesNav.forEach(function (enlace) {
        enlace.addEventListener('click', function (evento) {
            evento.preventDefault(); // Previene el comportamiento predeterminado del enlace

            var destino = this.getAttribute('href'); // Obtiene el atributo href del enlace
            var seccionDestino = document.querySelector(destino); // Encuentra la sección de destino en base al href

            if (seccionDestino) {
                // Scroll suave hacia la sección de destino
                window.scrollTo({
                    top: seccionDestino.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

document.getElementById('form-contacto').addEventListener('submit', function (event) {
    event.preventDefault();

    var nombre = document.getElementById('nombre').value.trim();
    var email = document.getElementById('email').value.trim();
    var telefono = document.getElementById('telefono').value.trim();
    var genero = document.querySelector('input[name="genero"]:checked');
    var pais = document.getElementById('pais').value;
    var preferencia1 = document.getElementById('preferencia1').checked;
    var preferencia2 = document.getElementById('preferencia2').checked;
    var preferencia3 = document.getElementById('preferencia3').checked;
    var imagen = document.getElementById('imagen').value.trim();

    // Resetear errores
    document.querySelectorAll('.error').forEach(function (span) {
        span.textContent = '';
    });

    var isValid = true;

    if (nombre === '') {
        document.getElementById('errorNombre').textContent = 'Por favor, ingresa tu nombre.';
        isValid = false;
    }

    if (email === '') {
        document.getElementById('errorEmail').textContent = 'Por favor, ingresa tu email.';
        isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById('errorEmail').textContent = 'Por favor, ingresa un email válido.';
        isValid = false;
    }

    if (telefono === '') {
        document.getElementById('errorTelefono').textContent = 'Por favor, ingresa tu teléfono.';
        isValid = false;
    } else if (!/^\d{10}$/.test(telefono)) {
        document.getElementById('errorTelefono').textContent = 'Por favor, ingresa un teléfono válido de 10 dígitos.';
        isValid = false;
    }

    if (!genero) {
        document.getElementById('errorGenero').textContent = 'Por favor, selecciona tu género.';
        isValid = false;
    }

    if (pais === '') {
        document.getElementById('errorPais').textContent = 'Por favor, selecciona tu país.';
        isValid = false;
    }

    if (!preferencia1 && !preferencia2 && !preferencia3) {
        document.getElementById('errorPreferencias').textContent = 'Por favor, selecciona al menos una preferencia.';
        isValid = false;
    }

    if (imagen === '') {
        document.getElementById('errorImagen').textContent = 'Por favor, selecciona una imagen.';
        isValid = false;
    }

    if (isValid) {
        // Aquí puedes enviar el formulario
        console.log('Formulario válido. Enviando...');
    }
});
