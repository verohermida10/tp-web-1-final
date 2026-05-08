let contadores = {
    terror: {
        df2: 0,
        sinister: 0,
        gonjiam: 0,
        wer: 0,
        sinister2: 0,
        martyrs: 0,
        caso39: 0,
        ritual: 0,
        ghostland: 0,
        elbeberosemary: 0,
        exorcista: 0,
        profecia: 0,
        hillhouse: 0,
        rosemary: 0,
        conjuro1: 0,
        conjuro2: 0,
        conjuro3: 0,
        conjuro4: 0,
        annabelle1: 0,
        annabelle2: 0,
        annabelle3: 0,
        monja1: 0,
        monja2: 0,
        saw1: 0,
        saw2: 0,
        saw3: 0,
        saw4: 0,
        saw5: 0,
        saw6: 0,
        saw7: 0,
        saw8: 0,
        saw9: 0,
        saw10: 0,
        df6: 0,
        janedoe: 0,
        losotros: 0,
        cera: 0,
        camino: 0,
    },

    thriller: {
        redeye: 0,
        poseidon: 0,
        mariposa: 0,
        imageofyou: 0,
        housenextdoor: 0,
        flightplan: 0,
        factory: 0,
        cabina10: 0
    },

    accion: {
        rascacielos: 0,
        smith: 0,
        sanandres: 0,
        ff1: 0,
        ff2: 0,
        ff3: 0,
        ff4: 0,
        ff5: 0,
        ff6: 0,
        ff7: 0,
        ff8: 0,
        ff9: 0,
        ff10: 0,
        deathrace1: 0,
        deathrace2: 0
    },

    deporte: {
        boca: 0,
        f1: 0,
        alex: 0,
        rocky4: 0,
        cr7: 0,
        messi: 0
    }
};


function like(peli) {

    let categoria;

    if (contadores.terror[peli] !== undefined) {
        categoria = "terror";
    } else if (contadores.thriller[peli] !== undefined) {
        categoria = "thriller";
    } else if (contadores.accion[peli] !== undefined) {
        categoria = "accion";
    } else if (contadores.deporte[peli] !== undefined) {
        categoria = "deporte";
    }

    contadores[categoria][peli]++;
    document.getElementById(peli).innerText =
        "Likes: " + contadores[categoria][peli];
}



// 
function rate(elemento, valor) {

    let contenedor = elemento.parentElement;
    let estrellas = contenedor.querySelectorAll("span");

    estrellas.forEach((star, index) => {
        if (index < valor) {
            star.style.backgroundColor = "gold";
        } else {
            star.style.backgroundColor = "gray";
        }
    });
}
function extraerPeliculasTerror() {

    const peliculas = [];
    const contenedor = document.querySelectorAll(".pelicula");

    contenedor.forEach(peli => {

        const titulo = peli.querySelector("h3")?.innerText;
        const imagen = peli.querySelector("img")?.src;
        const trailer = peli.querySelector("iframe")?.src;
        const id = peli.querySelector("p")?.id;

        peliculas.push({
            id,
            titulo,
            imagen,
            trailer
        });
    });

    console.log(peliculas); // 🔥 ACÁ TENÉS TODO
}
extraerPeliculasTerror();



const peliculasTerror = [
    {
        id: "sinister",
        titulo: "Sinister",
        imagen: "https://m.media-amazon.com/images/M/MV5BMjI5MTg1Njg0Ml5BMl5BanBnXkFtZTcwNzg2Mjc4Nw@@._V1_.jpg",
        trailer: "https://www.youtube.com/embed/_kbQAJR9YWQ"
    },
    {
        id: "sinister2",
        titulo: "Sinister 2",
        imagen: "https://m.media-amazon.com/images/M/MV5BMjM3MTQ5NjA0OV5BMl5BanBnXkFtZTgwMzg2OTYyNTE@._V1_.jpg",
        trailer: "https://www.youtube.com/embed/4L64vpYNcEM"
    }
     
   
];

/* const contenedor = document.getElementById("contenedor-terror");

contenedor.innerHTML = ""; */
/* 
peliculasTerror.forEach(peli => {
    contenedor.innerHTML += `
        <div class="pelicula">
            <img src="${peli.imagen}">
            <h3>${peli.titulo}</h3>

            <button onclick="like('${peli.id}')">❤️ Me gusta</button>
            <p id="${peli.id}">Likes: 0</p>

            <div class="estrellas">
                <span onclick="rate(this,1)">★</span>
                <span onclick="rate(this,2)">★</span>
                <span onclick="rate(this,3)">★</span>
                <span onclick="rate(this,4)">★</span>
                <span onclick="rate(this,5)">★</span>
            </div>

            <iframe class="pelicula-avance" src="${peli.trailer}" allowfullscreen></iframe>
        </div>
        `;
}); */
/* function agregarEstrellas() {

    const peliculas = document.querySelectorAll(".pelicula");

    peliculas.forEach(peli => {

        const estrellas = document.createElement("div");
        estrellas.classList.add("estrellas");

        for (let i = 1; i <= 5; i++) {

            estrellas.innerHTML += `
                <span onclick="rate(this, ${i})">⭐</span>
            `;
        }

        peli.appendChild(estrellas);
    });
}

window.onload = agregarEstrellas;
 */