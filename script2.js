const peliculaaccion= {
    
}

const peliculasDeporte = [
    {
        id: "boca",
        titulo: "Boca Juniors 3D (2015)",
        imagen: "https://images.justwatch.com/poster/306427008/s718/boca-juniors-3d-la-pelicula.jpg",
        curiosidad: "💡 Curiosidad: La película fue una de las primeras producciones deportivas argentinas filmadas en formato 3D, buscando que los hinchas sintieran la experiencia de estar dentro de La Bombonera.",
        trailer: "https://www.youtube.com/embed/wB5uZhGPMoc?si=Y43pn7OwGd5iLNE9"
    },
    {
        id: "rocky4",
        titulo: "Rocky IV (1985)",
        imagen: "https://artofethanpro.com/cdn/shop/files/FAB43569-7147-4D4C-9B5A-C3C55A74EF52.jpg?v=1702259109",
        curiosidad: "💡 Curiosidad: Durante el rodaje, Sylvester Stallone pidió que las escenas de pelea fueran lo más reales posible, y terminó recibiendo golpes verdaderos que lo llevaron incluso a ser hospitalizado por varios días.",
        trailer: "https://www.youtube.com/embed/mIE5HYkzvV0?si=EtTOEQigy6rG4zYS"
    },

    {
        id: "f1",
        titulo: "F1 (2025)",
        imagen: "https://www.aceprensa.com/wp-content/uploads/2025/06/f1-la-pelicula-818x1024.jpg",
        curiosidad: "💡 Curiosidad: La película fue filmada durante fines de semana reales de Grandes Premios de Fórmula 1, utilizando autos adaptados que rodaban en pistas reales.",
        trailer: "https://www.youtube.com/embed/CT2_P2DZBR0"
    },
    {
        id: "alex",
        titulo: "Alex & Me (2018)",
        imagen: "https://m.media-amazon.com/images/M/MV5BYTdiYWY4ZjItNWM3YS00NTdmLTg2YTAtMzJmMWZkZmMzYzcwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        curiosidad: "💡 Curiosidad: La película mezcla deporte y fantasía, mostrando a Alex Morgan como una versión imaginaria de sí misma que guía a la protagonista para recuperar la confianza.",
        trailer: "https://www.youtube.com/embed/Wz0SMgLinMU?si=SV5DEHlP-rV6_k69"
    },
    {
    id: "cr7",
    titulo: "Ronaldo (2015)",
    imagen: "https://m.media-amazon.com/images/M/MV5BNzMyMTM1MjQxNF5BMl5BanBnXkFtZTgwMjY4NTE5NjE@._V1_.jpg",
    curiosidad: "💡 Curiosidad: El documental muestra el lado más íntimo de Cristiano Ronaldo, incluyendo su rutina diaria, su relación con su hijo y momentos dentro de su casa que rara vez se ven públicamente.",
    trailer: "https://www.youtube.com/embed/1YvTuS4hC7I?si=Ne8tNhxQ0QZDNJPA"
},

{
    id: "messi",
    titulo: "Messi (2014)",
    imagen: "https://m.media-amazon.com/images/M/MV5BNmRmOGE3MzktN2NhMC00ZWYyLWI3YTctZjE0OTIzZmUyMWQyXkEyXkFqcGc@._V1_.jpg",
    curiosidad: "💡 Curiosidad: La película combina entrevistas reales con recreaciones de la infancia de Lionel Messi, mostrando cómo fue su crecimiento en Rosario y los desafíos que enfrentó antes de llegar al fútbol profesional.",
    trailer: "https://www.youtube.com/embed/JBd-XicaLBU?si=WkyNcHG86IWc_1qQ"
}
];


function mostrarPeliculasDeporte() {

    const contenedor = document.getElementById("contenedor-deporte");

    peliculasDeporte.forEach(peli => {

        contenedor.innerHTML += `
        
        <div class="pelicula">

            <img src="${peli.imagen}">

            <h3>${peli.titulo}</h3>

            <button onclick="like('${peli.id}')">
                ❤️ Me gusta
            </button>

            <p id="${peli.id}">Likes: 0</p>

            <div class="estrellas">
                <span onclick="rate(this,1)">⭐</span>
                <span onclick="rate(this,2)">⭐</span>
                <span onclick="rate(this,3)">⭐</span>
                <span onclick="rate(this,4)">⭐</span>
                <span onclick="rate(this,5)">⭐</span>
            </div>

            <p class="curiosidad">
                ${peli.curiosidad}
            </p>

            <iframe 
                class="pelicula-avance"
                src="${peli.trailer}"
                allowfullscreen>
            </iframe>

        </div>
        `;
    });
}

mostrarPeliculasDeporte();