const peliculaaccion = [
    {
        id: "rascacielos",
        titulo: "Rascacielos (2018)",
        imagen: "https://m.media-amazon.com/images/M/MV5BMWY4MDc0ZmUtNzdiMi00YzhiLTliNDMtMTlmMmFlZDU1ZjQwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        curiosidad: "💡 Curiosidad: La película utilizó una enorme combinación de sets reales y efectos digitales para recrear el gigantesco edificio donde ocurre toda la acción.",
        trailer: "https://www.youtube.com/embed/R6vuwZl5Pec?si=P6CEoWPrdG71ygl7"
    },

    {
        id: "smith",
        titulo: "Sr. y Sra. Smith (2005)",
        imagen: "https://m.media-amazon.com/images/M/MV5BMTUxMzcxNzQzOF5BMl5BanBnXkFtZTcwMzQxNjUyMw@@._V1_.jpg",
        curiosidad: "💡 Curiosidad: La película mezcla comedia romántica con acción, algo poco común en su momento, lo que la convirtió en un éxito al atraer tanto a fans del romance como del cine de acción.",
        trailer: "https://www.youtube.com/embed/CZ0B22z22pI?si=Qoo2aQ535tmc6DW1"
    },
    {
        id: "sanandres",
        titulo: "Terremoto: La Falla de San Andrés (2015)",
        imagen: "https://m.media-amazon.com/images/M/MV5BNWJiNDZiZjEtYzM4Zi00MTA1LWI5MTktODlmZWYwODAwMjcwXkEyXkFqcGc@._V1_.jpg",
        curiosidad: "💡 Curiosidad: Para lograr los efectos del terremoto, se combinaron escenarios reales con enormes sets que se destruían físicamente, junto con CGI, creando escenas de desastres mucho más impactantes.",
        trailer: "https://www.youtube.com/embed/c2vupbrgySk?si=9u72apdx0vW3sVE8"
    },

    {
        id: "deathrace1",
        titulo: "Death Race (2008)",
        imagen: "https://m.media-amazon.com/images/M/MV5BYTkzYWY5ZjYtOGI3My00OWE0LTkwOTMtZjVkMWJjZjhjODg0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        curiosidad: "💡 Curiosidad: Muchos de los autos usados en la película fueron construidos realmente con armaduras y armas funcionales para que las escenas de choque se vieran más reales.",
        trailer: "https://www.youtube.com/embed/GsaTb2O31rQ?si=RHNgVvLPGJZvKxvV"
    },
    {
        id: "deathrace2",
        titulo: "Death Race 2 (2010)",
        imagen: "https://m.media-amazon.com/images/M/MV5BZTliOWJiY2YtYmIyMC00MWQzLTgyMzMtYjMwZGY5MGIxMGI1XkEyXkFqcGc@._V1_.jpg",
        curiosidad: "💡 Curiosidad: Aunque salió después de la película de 2008, en realidad funciona como precuela y muestra el origen del famoso corredor Frankenstein.",
        trailer: "https://www.youtube.com/embed/e9L88V0yh1U?si=jNhOS51zBvIg0M64"
    },

    {
        id: "ff1",
        titulo: "Rápidos y Furiosos (2001)",
        imagen: "https://m.media-amazon.com/images/M/MV5BZDU0Yjk5MTctZDI3OS00YmM4LWIxOTMtYTU2NjYyYzdkMWJlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        curiosidad: "💡 Curiosidad: La película se inspiró en un artículo real sobre carreras callejeras ilegales publicado en una revista, lo que ayudó a construir un mundo más auténtico alrededor de este fenómeno.",
        trailer: "https://www.youtube.com/embed/-oJHZre7XZY?si=0VSLbqUWVVZRLW-d"
    },

    {
        id: "ff2",
        titulo: "2 Fast 2 Furious (2003)",
        imagen: "https://images.justwatch.com/poster/300636230/s718/2-fast-2-furious.jpg",
        curiosidad: "💡 Curiosidad: Fue la única película principal de la saga sin Vin Diesel hasta ese momento, centrando toda la historia en Brian O'Conner.",
        trailer: "https://www.youtube.com/embed/8gf7FEmBDDA?si=Vv-Pie8xog4cFu1t"
    },

    {
        id: "ff4",
        titulo: "Rápidos y Furiosos 4 (2009)",
        imagen: "https://m.media-amazon.com/images/M/MV5BZDQzMTEzYzktNjhjNC00N2IwLWIzN2ItMGQ1MjBkNGNhY2VmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        curiosidad: "💡 Curiosidad: Esta entrega marcó el regreso del elenco original, retomando la historia principal de la saga y dejando de lado el enfoque más independiente que habían tenido las películas anteriores.",
        trailer: "https://www.youtube.com/embed/_ixlOH9EzL4?si=Sag8fgyc9Lmdnyv5"
    },
    {
        id: "ff5",
        titulo: "Rápidos y Furiosos 5 (2011)",
        imagen: "https://m.media-amazon.com/images/M/MV5BMTUxNTk5MTE0OF5BMl5BanBnXkFtZTcwMjA2NzY3NA@@._V1_.jpg",
        curiosidad: "💡 Curiosidad: La famosa escena del robo de la caja fuerte fue filmada con una caja real arrastrada por autos en algunas tomas, combinada con efectos visuales para aumentar el impacto.",
        trailer: "https://www.youtube.com/embed/ndth_OIyfJw?si=RFbaEU31zqYUPK2B"
    },

    {
        id: "ff6",
        titulo: "Rápidos y Furiosos 6 (2013)",
        imagen: "https://m.media-amazon.com/images/M/MV5BMTM3NTg2NDQzOF5BMl5BanBnXkFtZTcwNjc2NzQzOQ@@._V1_FMjpg_UX1000_.jpg",
        curiosidad: "💡 Curiosidad: La pista de aterrizaje del final se volvió un meme porque parece interminable durante toda la persecución del avión.",
        trailer: "https://www.youtube.com/embed/yY6JUPCgDxU?si=Sr-x0zRIMw2x4QtI"
    },

    {
        id: "ff7",
        titulo: "Rápidos y Furiosos 7 (2015)",
        imagen: "https://es.web.img3.acsta.net/pictures/15/02/09/15/57/551764.jpg",
        curiosidad: "💡 Curiosidad: Tras la muerte de Paul Walker, sus hermanos ayudaron a completar sus escenas junto con efectos digitales, permitiendo terminar la película y darle un cierre emotivo a su personaje.",
        trailer: "https://www.youtube.com/embed/tX0MGnC41nk?si=IyC3byGaDKQikrQY"
    },

    {
        id: "ff8",
        titulo: "Rápidos y Furiosos 8 (2017)",
        imagen: "https://m.media-amazon.com/images/M/MV5BNDVlNmZkMjAtNGUwNy00MGYzLWJiNjYtZDdhZDRlMjNkMGZhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        curiosidad: "💡 Curiosidad: Varias escenas de persecución fueron filmadas en Islandia usando autos reales sobre hielo y nieve extrema.",
        trailer: "https://www.youtube.com/embed/K9ApecASdpA?si=fOhtRk7whOqPgKjQ"
    },
    {
        id: "ff9",
        titulo: "Rápidos y Furiosos 9 (2021)",
        imagen: "https://m.media-amazon.com/images/M/MV5BNWEwNWExNWUtODI1OC00NzYzLTk4ZTctYmY4ZTBjMWQzMjMwXkEyXkFqcGc@._V1_.jpg",
        curiosidad: "💡 Curiosidad: Esta fue la película donde la saga finalmente llegó al espacio, algo que durante años había sido un meme entre los fans.",
        trailer: "https://www.youtube.com/embed/3YNwcdVkpZQ?si=cdEEnv_t1zXslV5F"
    },

    {
        id: "ff10",
        titulo: "Rápidos y Furiosos 10 (2023)",
        imagen: "https://www.universalpictures.com.ar/tl_files/content/movies/fastx/poster/01.jpg",
        curiosidad: "💡 Curiosidad: La décima entrega lleva las escenas de acción a un nivel extremo, combinando efectos prácticos con CGI para crear secuencias cada vez más exageradas y espectaculares.",
        trailer: "https://www.youtube.com/embed/KOQy0AwA7k8?si=WJ_Tmw3C08zWejPo"
    }
]
const peliculasTerror = [
    {
        id: "sinister",
        titulo: "Sinister",
        imagen: "https://m.media-amazon.com/images/M/MV5BMjI5MTg1Njg0Ml5BMl5BanBnXkFtZTcwNzg2Mjc4Nw@@._V1_.jpg",
        curiosidad: "💡 Curiosidad: Muchas de las grabaciones perturbadoras que aparecen en la película fueron creadas antes del rodaje y el director las usaba para meterse en ambiente mientras escribía el guion… lo que explica por qué se sienten tan reales e incómodas.",
        trailer: "https://www.youtube.com/embed/_kbQAJR9YWQ?si=AuHR3umL74qvxKjL"
    },

    {
        id: "sinister2",
        titulo: "Sinister 2",
        imagen: "https://m.media-amazon.com/images/M/MV5BMjM3MTQ5NjA0OV5BMl5BanBnXkFtZTgwMzg2OTYyNTE@._V1_.jpg",
        curiosidad: "💡 Curiosidad: La secuela intentó expandir la mitología de Bughuul mostrando más sobre cómo manipulaba a los niños antes de los asesinatos.",
        trailer: "https://www.youtube.com/embed/4L64vpYNcEM?si=x8C2CHQWBA4PjdGg"
    },
    {
        id: "gonjiam",
        titulo: "Gonjiam: Hospital Abandonado",
        imagen: "https://m.media-amazon.com/images/M/MV5BOWI1Yjk5ZWEtZjcyNS00NmZkLWFkNzUtMDA5YmNhODA1ZDVhXkEyXkFqcGc@._V1_.jpg",
        curiosidad: "💡 Curiosidad: El hospital en el que se inspira la película fue considerado uno de los lugares más embrujados de Corea del Sur. Durante años circularon historias de desapariciones y fenómenos paranormales, lo que llevó a su cierre definitivo.",
        trailer: "https://www.youtube.com/embed/p9V-rbw3QGY?si=Zlbm6cG6rH4KIxBV"
    },

    {
        id: "wer",
        titulo: "Wer (Inhumano)",
        imagen: "https://static.wikia.nocookie.net/doblaje/images/7/74/Wer-poster.jpg/revision/latest?cb=20150124171900&path-prefix=es",
        curiosidad: "💡 Curiosidad: La película mezcla el mito clásico del hombre lobo con un enfoque mucho más realista y violento, intentando hacerlo sentir como un caso médico en vez de sobrenatural.",
        trailer: "https://www.youtube.com/embed/DEBt92Ij81s?si=pgSuWyTjzmlAe_W1"
    },
    {
        id: "exorcista",
        titulo: "El Exorcista (1973)",
        imagen: "https://m.media-amazon.com/images/M/MV5BZDcyZjIzZmYtZGQ5OS00ODc2LTkzN2EtNjlmMjI2NWMxYzljXkEyXkFqcGc@._V1_.jpg",
        curiosidad: "💡 Curiosidad: Durante el rodaje ocurrieron varios incidentes extraños, incluyendo incendios en el set y lesiones del elenco. Muchos creen que la película estaba “maldita”, lo que aumentó aún más su fama como una de las más aterradoras de la historia.",
        trailer: "https://www.youtube.com/embed/qa7j1g_xLkA?si=yUjQzhbu85XfqrO7"
    },

    {
        id: "profecia",
        titulo: "La Profecía (1976)",
        imagen: "https://pics.filmaffinity.com/the_omen-934470335-large.jpg",
        curiosidad: "💡 Curiosidad: Varias personas relacionadas con la película sufrieron accidentes reales durante la producción, alimentando la leyenda de que el rodaje estaba maldito.",
        trailer: "https://www.youtube.com/embed/4ABEi5PQsnQ?si=EotqdSd2Cea0lRzu"
    },
    {
        id: "hillhouse",
        titulo: "La Maldición de Hill House (1999)",
        imagen: "https://m.media-amazon.com/images/S/pv-target-images/338a5e2aa3df6e2624562ff87d64aa6518d09f3e44f7a77ab5e3061c4c40ea0e.jpg",
        curiosidad: "💡 Curiosidad: El director quiso que la casa fuera prácticamente un personaje más, por eso muchas puertas, paredes y decoraciones fueron diseñadas para parecer “vivas” y generar incomodidad constante en el espectador.",
        trailer: "https://www.youtube.com/embed/Q6Nn5l_13W8?si=UsWIfaucdz79J875"
    },

    {
        id: "rosemary",
        titulo: "El bebé de Rosemary (1968)",
        imagen: "https://m.media-amazon.com/images/M/MV5BMDYwOTMyY2MtZmYxOC00OGJmLWFhNTAtYmE3NjY4OTIwOGFmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        curiosidad: "💡 Curiosidad: La película fue tan perturbadora para la época que muchas personas abandonaban las salas durante las proyecciones por la tensión psicológica que generaba.",
        trailer: "https://www.youtube.com/embed/dBSbmNNm84Y?si=cT5e2Dsxat96qjh2"
    },
    {
        id: "conjuro1",
        titulo: "El Conjuro (2013)",
        imagen: "https://m.media-amazon.com/images/M/MV5BYWQyNTQwNTAtZDE2Yy00NjlhLWE4N2YtYjBkYTM4ZmM3ZDk0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        curiosidad: "💡 Curiosidad: Durante el rodaje, la actriz que interpretaba a Carolyn Perron aseguró haber encontrado moretones inexplicables en su cuerpo, similares a los que sufría la persona real en la que se basa la historia.",
        trailer: "https://www.youtube.com/embed/_zU1gLWGnpg?si=69uKwrg86vtSuNBG"
    },

    {
        id: "conjuro2",
        titulo: "El Conjuro 2 (2016)",
        imagen: "https://m.media-amazon.com/images/M/MV5BMzM2OTE4ZWUtMzNiNy00MzhmLWE0YmMtZGE3ZTg2ZmUwODUzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        curiosidad: "💡 Curiosidad: La película está basada en el famoso caso Enfield en Inglaterra, uno de los casos paranormales más documentados de la historia. Incluso hay grabaciones reales de las supuestas voces que salían de la casa.",
        trailer: "https://www.youtube.com/embed/cuDBjj_Gs0M?si=77vF5H4LmSIBOa5e"
    },

    {
        id: "conjuro3",
        titulo: "El Conjuro 3 (2021)",
        imagen: "https://m.media-amazon.com/images/M/MV5BNThkYWE3OGItNzAyNC00N2U4LThjY2QtMGQwYjZhYTI1MzMwXkEyXkFqcGc@._V1_.jpg",
        curiosidad: "💡 Curiosidad: Esta fue la primera película principal de la saga que dejó de centrarse en una casa embrujada y pasó a investigar un caso relacionado con cultos y posesiones demoníacas.",
        trailer: "https://www.youtube.com/embed/S8nlMJfE6pc?si=y8aCjsvvuth8aXkM"
    },

    {
        id: "conjuro4",
        titulo: "El Conjuro 4",
        imagen: "https://m.media-amazon.com/images/M/MV5BMWQyMzU1YWItYzczYy00MGZiLTg1ZTUtY2QwMWViNGQxNmJhXkEyXkFqcGc@._V1_.jpg",
        curiosidad: "💡 Curiosidad: La cuarta entrega promete cerrar la historia principal de Ed y Lorraine Warren dentro del universo cinematográfico de El Conjuro.",
        trailer: "https://www.youtube.com/embed/bMgfsdYoEEo?si=FvQFe6Z7wNA_DZc8"
    },
    {
        id: "annabelle1",
        titulo: "Annabelle (2014)",
        imagen: "https://m.media-amazon.com/images/M/MV5BNjkyMDU5ZWQtZDhkOC00ZWFjLWIyM2MtZWFhMDUzNjdlNzU2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        curiosidad: "💡 Curiosidad: La muñeca Annabelle existe en la vida real, pero no es como en la película. Es una muñeca tipo Raggedy Ann y está guardada en una vitrina del museo oculto de los Warren, supuestamente para contener su energía.",
        trailer: "https://www.youtube.com/embed/8kmLHwKH31M?si=5tRSYcOFrXlqJGSX"
    },

    {
        id: "annabelle2",
        titulo: "Annabelle: Creation (2017)",
        imagen: "https://es.web.img2.acsta.net/pictures/17/10/02/09/53/5292732.jpg",
        curiosidad: "💡 Curiosidad: Muchos fans consideran esta película la mejor de la trilogía porque profundiza en el origen de la muñeca y tiene un tono mucho más oscuro y aterrador.",
        trailer: "https://www.youtube.com/embed/z8JQFAavU6M?si=CkozCAebh9BSaoKq"
    },

    {
        id: "annabelle3",
        titulo: "Annabelle 3: Vuelve a casa (2019)",
        imagen: "https://es.web.img3.acsta.net/pictures/19/05/20/17/32/1377822.jpg",
        curiosidad: "💡 Curiosidad: La película expande el universo de objetos malditos de los Warren, mostrando varias reliquias embrujadas que luego inspiraron futuros proyectos del universo Conjuro.",
        trailer: "https://www.youtube.com/embed/KUnKWjeQA9A?si=Uwzz6OazSon4626I"
    },
    {
        id: "monja1",
        titulo: "La Monja (2018)",
        imagen: "https://es.web.img2.acsta.net/pictures/18/08/14/15/35/4396669.jpg",
        curiosidad: "💡 Curiosidad: El demonio Valak aparece originalmente en El Conjuro 2, pero su diseño como monja no estaba en el guion inicial. Fue una idea agregada después porque resultaba mucho más perturbadora visualmente.",
        trailer: "https://www.youtube.com/embed/IKA9H68sgXo?si=18UiV6hlpyvYDcln"
    },
    {
        id: "monja2",
        titulo: "La Monja 2 (2023)",
        imagen: "https://image.tmdb.org/t/p/original/hbP1KNvyNX8av2sVsOix1za9T4C.jpg",
        curiosidad: "💡 Curiosidad: La película expande aún más la historia de Valak y conecta diferentes películas del universo El Conjuro, mostrando cómo el demonio sigue actuando décadas después de los eventos de la primera entrega.",
        trailer: "https://www.youtube.com/embed/Em7wEqLzDnE?si=HmcKLe0I0pwd4zOk"
    },

    {
        id: "df2",
        titulo: "Destino Final 2 (2003)",
        imagen: "https://m.media-amazon.com/images/M/MV5BMzEzMmZiZDgtY2IxNC00ZmNjLTljYzMtZjhjZTRhM2IwN2Y5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        curiosidad: "💡 Curiosidad: La escena inicial del accidente en la autopista generó tanto impacto que muchas personas desarrollaron miedo real a manejar detrás de camiones con troncos, convirtiéndose en una de las escenas más recordadas del cine de terror.",
        trailer: "https://www.youtube.com/embed/7vZqVooni2o?si=qe_tzLj2YrdR-fua"
    },

    {
        id: "df6",
        titulo: "Destino Final 6 (2025)",
        imagen: "https://m.media-amazon.com/images/M/MV5BMTlmNDRiZjgtNmYxNi00NTc3LWFlNzEtNzE0ZGQ1ODdlMDQ5XkEyXkFqcGc@._V1_.jpg",
        curiosidad: "💡 Curiosidad: La nueva entrega vuelve a jugar con accidentes encadenados extremadamente detallados, manteniendo el sello clásico de la saga donde pequeñas decisiones terminan provocando muertes imposibles.",
        trailer: "https://www.youtube.com/embed/8FudANSsWNQ?si=qoOxBAEWW0JR-15H"
    },
    {
        id: "camino",
        titulo: "Camino Sangriento (2003)",
        imagen: "https://m.media-amazon.com/images/M/MV5BNmVjZDk4NmUtMTMwYS00YmRiLWFiNWQtMzIxNjFjZWQ5Njc5XkEyXkFqcGc@._V1_.jpg",
        curiosidad: "💡 Curiosidad: La película se inspira en la leyenda de Sawney Bean, un supuesto clan caníbal de Escocia del siglo XVI. Aunque la historia no está confirmada, se volvió una de las más famosas del folklore europeo.",
        trailer: "https://www.youtube.com/embed/D7DkA-sG98k?si=e27wwLsJ3B4dj8R0"
    },
    {
        id: "cera",
        titulo: "La Casa de Cera (2005)",
        imagen: "https://m.media-amazon.com/images/M/MV5BYzdjMDE0YjktZmM5Yi00M2Y1LTlmOWQtNTRiMzRhM2NhZTk1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        curiosidad: "💡 Curiosidad: Para el final de la película se construyó una casa de cera gigante que realmente fue derretida y destruida durante el rodaje, usando fuego y efectos prácticos en lugar de depender completamente de CGI",
        trailer: "https://www.youtube.com/embed/9KCy8sGODKo?si=DwBCBb8IodN1QqB9"
    },

    {
        id: "janedoe",
        titulo: "La Autopsia de Jane Doe (2016)",
        imagen: "https://m.media-amazon.com/images/M/MV5BMjA2MTEzMzkzM15BMl5BanBnXkFtZTgwMjM2MTM5MDI@._V1_.jpg",
        curiosidad: "💡 Curiosidad: El cuerpo de Jane Doe casi no parpadea en toda la película porque la actriz fue entrenada para mantenerse completamente inmóvil durante largos periodos, lo que hace que las escenas resulten mucho más inquietantes.",
        trailer: "https://www.youtube.com/embed/od9VTbZ__uc?si=YDgWH_JHPv036y7Y"
    },

    {
        id: "saw1",
        titulo: "Saw (2004)",
        imagen: "https://m.media-amazon.com/images/M/MV5BZTE5MzFlMTktMzBkOC00ZjMxLThmOTAtOGU3ZGEwZGRlNDdjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        curiosidad: "💡 Curiosidad: La primera película se filmó en solo 18 días con un presupuesto muy bajo. El actor que interpreta a Jigsaw pasaba horas sin moverse en el suelo para mantener la escena realista.",
        trailer: "https://www.youtube.com/embed/S-1QgOMQ-ls?si=H8ogYOwYzj4aQOnJ"
    },

    {
        id: "saw2",
        titulo: "Saw II (2005)",
        imagen: "https://m.media-amazon.com/images/M/MV5BZGVlNjk3MmItZmUzNy00MzcyLWIzOTktZjllYWU5MDAyMjM1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        curiosidad: "💡 Curiosidad: Muchas de las trampas de Saw II fueron construidas físicamente para que los actores reaccionaran de manera más realista. La famosa piscina de agujas utilizó miles de jeringas reales con puntas especiales para evitar accidentes.",
        trailer: "https://www.youtube.com/embed/Lq2AzZB6DUE?si=tdUEtRi_MKDRuT-c"
    },
    {
        id: "saw3",
        titulo: "Saw III (2006)",
        imagen: "https://www.movieposters.com/cdn/shop/products/7e20754bf94f4508858faed3d704ada2_46cefb1f-5a6e-4be3-b25e-cb580d4bfa49_1024x1024.jpg?v=1762971403",
        curiosidad: "💡 Curiosidad: Saw III fue considerada la película más sangrienta de la saga hasta ese momento. El maquillaje y los efectos prácticos llevaron horas de trabajo diario para lograr las escenas más brutales.",
        trailer: "https://www.youtube.com/embed/nRRC8RRC7fY?si=yuTb_8qqbdcscMlq"
    },

    {
        id: "saw4",
        titulo: "Saw IV (2007)",
        imagen: "https://m.media-amazon.com/images/M/MV5BNjc0NjUyNzg3MF5BMl5BanBnXkFtZTYwODMxOTM3._V1_FMjpg_UX1000_.jpg",
        curiosidad: "💡 Curiosidad: Saw IV se filmó al mismo tiempo que Saw III, lo que permitió que ambas películas encajaran perfectamente en la historia y mantuvieran la continuidad de los eventos sin errores.",
        trailer: "https://www.youtube.com/embed/-A3g2cOnjTI?si=1gJlPOrOJH0Hw4ni"
    },

    {
        id: "saw5",
        titulo: "Saw V (2008)",
        imagen: "https://pics.filmaffinity.com/saw_v_saw_5-726521092-large.jpg",
        curiosidad: "💡 Curiosidad: Saw V profundiza más en la idea de que las víctimas podrían sobrevivir si trabajaran juntas, algo que Jigsaw siempre repetía pero que casi nadie entendía hasta esta entrega.",
        trailer: "https://www.youtube.com/embed/88pB8m-ZxrM?si=o5cpZOr0GVljfOgK"
    },

    {
        id: "saw6",
        titulo: "Saw VI (2009)",
        imagen: "https://es.web.img3.acsta.net/medias/nmedia/18/72/19/23/20084287.jpg",
        curiosidad: "💡 Curiosidad: Saw VI es una de las entregas más críticas de la saga, ya que utiliza sus trampas para reflejar problemas reales como el sistema de salud y las decisiones sobre quién merece vivir o morir.",
        trailer: "https://www.youtube.com/embed/-zFvxEAdakE?si=_g4NFbnyOeNMtxqQ"
    },
    {
        id: "saw7",
        titulo: "Saw 3D (2010)",
        imagen: "https://es.web.img3.acsta.net/medias/nmedia/18/82/74/47/19634612.jpg",
        curiosidad: "💡 Curiosidad: Aunque parecía que la historia de Jigsaw había terminado, esta entrega revive el misterio con una nueva serie de juegos que imitan su estilo, manteniendo la duda sobre si alguien continúa su legado.",
        trailer: "https://www.youtube.com/embed/wemGRv2mWH4?si=WFHw3IZQ31a9DGXa"
    },

    {
        id: "saw8",
        titulo: "Jigsaw (2017)",
        imagen: "https://www.mubis.es/media/articles/16987/190349/trailer-oficial-de-saw-viii-y-poster-final-original.jpg",
        curiosidad: "💡 Curiosidad: Jigsaw marcó el regreso de la saga después de siete años sin películas principales, intentando modernizar las trampas y el estilo visual para una nueva generación de espectadores.",
        trailer: "https://www.youtube.com/embed/OOrvirIVk8o?si=61EV_04zesrUzTYy"
    },

    {
        id: "saw9",
        titulo: "Spiral (2021)",
        imagen: "https://m.media-amazon.com/images/I/61gGa-rZjrL._AC_UF894,1000_QL80_.jpg",
        curiosidad: "💡 Curiosidad: Spiral fue impulsada por una idea original del actor Chris Rock, quien era fan de Saw y quiso darle a la franquicia un enfoque más policial y detectivesco.",
        trailer: "https://www.youtube.com/embed/gzy6ORqE9IY?si=RAA1jfLWMMYNgkZL"
    },

    {
        id: "saw10",
        titulo: "Saw X (2023)",
        imagen: "https://i.etsystatic.com/41716657/r/il/dd672a/5472278206/il_570xN.5472278206_hvxy.jpg",
        curiosidad: "💡 Curiosidad: Saw X se sitúa cronológicamente entre la primera y la segunda película, mostrando más en profundidad la historia de John Kramer y sus motivaciones, algo que los fans venían esperando desde hace años.",
        trailer: "https://www.youtube.com/embed/FpIaW9TPx8I?si=Gcu7QIEn6O7mRg3r"
    },
    {
        id: "martyrs",
        titulo: "Martyrs (2008)",
        imagen: "https://m.media-amazon.com/images/M/MV5BN2Q5MWQ0OWYtMTUzMC00ZmU3LWEyNDAtZjg1NjE2ZjVkM2I3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        curiosidad: "💡 Curiosidad: La película fue tan extrema psicológicamente que muchos espectadores abandonaron la sala en festivales. Su director quiso explorar hasta dónde puede llegar el sufrimiento humano, lo que la convirtió en una de las películas más perturbadoras del género.",
        trailer: "https://www.youtube.com/embed/F8RDYD6VhpI?si=NPY5lk7j8RvO1wRp"
    },

    {
        id: "caso39",
        titulo: "Caso 39",
        imagen: "https://m.media-amazon.com/images/M/MV5BNTA4NDUyOTE5NV5BMl5BanBnXkFtZTcwOTQ3NzY3Mw@@._V1_.jpg",
        curiosidad: "",
        trailer: "https://www.youtube.com/embed/Cd9t9yHK7Mw?si=xc4KsIyT_a7lUDde"
    },

    {
        id: "ritual",
        titulo: "El Ritual (2017)",
        imagen: "https://es.web.img3.acsta.net/c_310_420/pictures/17/08/14/17/42/070596.jpg",
        curiosidad: "💡 Curiosidad: La criatura de la película está inspirada en la mitología nórdica, específicamente en un ser asociado al dios Loki. Su diseño fue pensado para ser extraño e imposible de identificar completamente, aumentando la sensación de incomodidad.",
        trailer: "https://www.youtube.com/embed/Jp5iEK41bxc?si=-QaoujsG9a5sNX7R"
    },

    {
        id: "ghostland",
        titulo: "Ghostland (2018)",
        imagen: "https://m.media-amazon.com/images/M/MV5BOWI2NWZmYjktNWM1MC00MjE2LTkzOTAtYWU2MDE2MmYwYWQ5XkEyXkFqcGc@._V1_.jpg",
        curiosidad: "",
        trailer: "https://www.youtube.com/embed/ni_DF8waeDE?si=jdGgCTCmYoq-tFJ8"
    },
    







]
const peliculasThriller = [
    {
        id: "redeye",
        titulo: "Vuelo Nocturno (2005)",
        imagen: "https://www.filmico.tv/wp-content/uploads/2024/07/07-3.jpg",
        curiosidad: "💡 Curiosidad: Wes Craven, famoso por dirigir películas de terror como Scream y Pesadilla, quiso demostrar con esta película que también podía crear tensión sin depender del horror sobrenatural.",
        trailer: "https://www.youtube.com/embed/GoXQZyNpeIk?si=TASt0U73bQNTrvOb"
    },
    {
        id: "poseidon",
        titulo: "Poseidón (2006)",
        imagen: "https://static.wikia.nocookie.net/doblaje/images/9/94/Poseidon-693x990.jpg/revision/latest?cb=20131231095739&path-prefix=es",
        curiosidad: "💡 Curiosidad: Para recrear el barco dado vuelta, se construyeron enormes sets que podían inclinarse y llenarse de agua, permitiendo a los actores moverse en escenarios reales y hacer las escenas mucho más intensas.",
        trailer: "https://www.youtube.com/embed/PLcLUEE2pyY?si=7wHQ3N7tXroKr0x0"
    },
    {
        id: "mariposa",
        titulo: "El Efecto Mariposa (2004)",
        imagen: "https://pics.filmaffinity.com/El_efecto_mariposa-370563071-large.jpg",
        curiosidad: "💡 Curiosidad: La película tiene varios finales distintos dependiendo de la versión que veas, incluyendo uno mucho más oscuro que el estrenado en cines.",
        trailer: "https://www.youtube.com/embed/9sAU7RkGHAk?si=pvicp0-1px2gttUW"
    },
    {
        id: "imageofyou",
        titulo: "The Image of You (2024)",
        imagen: "https://m.media-amazon.com/images/S/pv-target-images/f81da99c83e5b4223e4d607af9cfc6b69f7baf5d42ebbdcd7e293e4887a8ef23.jpg",
        curiosidad: "💡 Curiosidad: La historia está basada en una novela bestseller y juega con la idea de que incluso entre gemelos idénticos puede haber secretos y manipulaciones peligrosas.",
        trailer: "https://www.youtube.com/embed/eqqapM_Ce4w?si=QrAJFbMa8GOvDVTJ"
    },
    {
        id: "housenextdoor",
        titulo: "The House Next Door (2002)",
        imagen: "https://m.media-amazon.com/images/M/MV5BMTk2OWM0MTYtODkzYi00ZWZhLThkNjYtOTA1ZGM4YzVhZGI4XkEyXkFqcGc@._V1_QL75_UY281_CR2,0,190,281_.jpg",
        curiosidad: "💡 Curiosidad: La película juega constantemente con la paranoia y el misterio, utilizando escenarios cotidianos para generar tensión sin depender de grandes efectos.",
        trailer: "https://www.youtube.com/embed/5QWz2mN7vA0?si=DW7IWnWJwI27jgzU"
    },

    {
        id: "flightplan",
        titulo: "Plan de Vuelo (2005)",
        imagen: "https://m.media-amazon.com/images/M/MV5BMGQyZmQ1OGItYWNkNi00YzU4LWJmZjktNTQyZjNlOGNmNWJlXkEyXkFqcGc@._V1_.jpg",
        curiosidad: "💡 Curiosidad: Para la película se construyó un avión completo en estudio, permitiendo filmar escenas desde ángulos imposibles y dar una sensación más realista de encierro y desorientación.",
        trailer: "https://www.youtube.com/embed/uspPRaCMb4o?si=6kqeBKmsTXsN7GVa"
    },
    {
        id: "factory",
        titulo: "The Factory (2012)",
        imagen: "https://m.media-amazon.com/images/M/MV5BYzlkY2QyOGMtMzc0YS00Mjg1LThlMWItZWY5NmE0ZTM5MmZiXkEyXkFqcGc@._V1_.jpg",
        curiosidad: "💡 Curiosidad: La película estuvo terminada varios años antes de su estreno oficial debido a problemas de distribución.",
        trailer: "https://www.youtube.com/embed/P3fRyFX5IAk?si=sno5ySPX6J0Tn_sp"
    },

    {
        id: "cabina10",
        titulo: "La mujer en la cabina 10",
        imagen: "https://pics.filmaffinity.com/the_woman_in_cabin_10-329449064-mmed.jpg",
        curiosidad: "💡 Curiosidad: La historia está basada en una novela de misterio muy popular y juega constantemente con la duda de si lo que ve la protagonista es real o producto de su propia percepción.",
        trailer: "https://www.youtube.com/embed/y6AE7hkgd04?si=rkXdiRJ6RDPSMcet"
    }
]

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
function mostrarPeliculasAccion() {

    const contenedor = document.getElementById("contenedor-accion");

    peliculaaccion.forEach(peli => {

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

mostrarPeliculasAccion();
function mostrarPeliculasThriller() {

    const contenedor = document.getElementById("contenedor-thriller");

    peliculasThriller.forEach(peli => {

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

mostrarPeliculasThriller();
function mostrarPeliculasTerror() {

    const contenedor = document.getElementById("contenedor-terror");

    peliculasTerror.forEach(peli => {

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

mostrarPeliculasTerror();