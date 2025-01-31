'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {

// Insertar datos en la tabla Users
    await queryInterface.bulkInsert('Products', [

   {
    "productId": "p1",
    "name": "Call of Duty",
    "description": "Call of Duty es la franquicia de juegos de disparo en primera persona conocida en todo el mundo por brindar el mejor entretenimiento a los jugadores durante décadas.",
    "image": "/images/avatars/kipa.jpg",
    "category": "Play Station",
    "price": 52092.33,
    createdAt: new Date(),
    updatedAt: new Date()

  },
  {
    "productId": "p2",
    "name": "Assassins Cred",
    "description": "Assassins Creed es un videojuego de aventura de acción y de sigilo en la que el jugador sobre todo asume el papel de Altaïr, experimentado por el protagonista Desmond Miles. El objetivo principal del juego es llevar a cabo una serie de asesinatos ordenados por Al Mualim, el líder de los asesinos.",
    "image": "/images/avatars/polloCorazon.jpg",
    "category": "Play Station",
    "price": 71249.8,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    "productId": "p3",
    "name": "God of War",
    "description": "Un nuevo y audaz comienzo. Kratos vuelve a ser padre. Como mentor y protector de Atreus, un hijo determinado a ganarse el respeto de su padre, se ve obligado a contener la ira que durante tanto tiempo lo ha caracterizado mientras recorre un mundo lleno de peligros junto a su muchacho.",
    "image": "/images/avatars/pretzel.jpg",
    "category": "xbox",
    "price": 28035.74,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    "productId": "p4",
    "name": "Horizont Zero Daw",
    "description": "En un mundo exuberante y postapocalíptico en el que la naturaleza se ha adueñado de las ruinas de una civilización olvidada, los restos de la humanidad viven en tribus de cazadores recolectores. Las máquinas, criaturas mecánicas de origen desconocido, les han arrebatado el dominio de las tierras salvajes.",
    "image": "/images/avatars/pretzel.jpg",
    "category": "Play Station",
    "price": 17601.57,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    "productId": "p5",
    "name": "Last Of Us",
    "description": "En una civilización devastada, donde los infectados y los empedernidos sobrevivientes proliferan, Joel, un protagonista cansado, es contratado para rescatar de contrabando a una niña de 14 años llamada Ellie de una zona de cuarentena militar.",
    "image": "/images/avatars/kipa.jpg",
    "category": "Play Station",
    "price": 36578.18,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    "productId": "p6",
    "name": "Resident Evil 4",
    "description": "Resident Evil 4 es un juego de terror y supervivencia en el que los jugadores deben sobrevivir a situaciones de miedo extremo. Si bien estos puntos de horror aparecen por todo el juego, se equilibran con los elementos de acción, creando una experiencia de juego impresionantemente variada.",
    "image": "/images/avatars/pletzale.jpg",
    "category": "Play Station",
    "price": 31617.91,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    "productId": "p7",
    "name": "Battlefield V",
    "description": "Vive el mayor conflicto de la historia con Battlefield V. La serie regresa a sus orígenes con una recreación jamás vista de la 2.ª Guerra Mundial. Disfruta el multijugador masivo con tu escuadrón en el enorme modo Grandes operaciones y el cooperativo Armas combinadas o enfrenta las Historias de guerra para un jugador. Disfruta el Battlefield más completo e inmersivo hasta la fecha en ubicaciones épicas y sorprendentes por todo el mundo. Incluye Tormenta de fuego, el Battle Royale reimaginado para Battlefield.",
    "image": "/images/avatars/kipa.jpg",
    "category": "Play Station",
    "price": 15463.35,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    "productId": "p8",
    "name": "Mortal Kombat 11",
    "description": "Un nuevo capítulo de esta veterana serie de videojuegos de lucha que llega con las mayores opciones de personalización vistas en la serie hasta la fecha. El nuevo motor gráfico usado en este Mortal Kombat XI permite mostrar peleas más espectaculares, con un nuevo sistema de cámaras que muestra al detalle los momentos más emocionantes de la lucha.Presentando una lista de luchadores nuevos y clásicos, Mortal Kombat 11 mejora una saga épica de más de 25 años de historia.",
    "image": "/images/avatars/pretzel.jpg",
    "category": "xbox",
    "price": 79606.05,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    "productId": "n1",
    "name": "Mario y Sonic en los Juegos Olimpicos",
    "description": "¡Únete a Mario, Sonic y sus amigos en Mario & Sonic en los Juegos Olímpicos: Tokyo 2020 para Nintendo Switch, su mayor aventura hasta la fecha! Prepárate para Tokyo 2020 en solitario o compite contra tus amigos en deportes inéditos: skateboarding, kárate, surf y escalada deportiva, así como en una amplia selección de deportes y juegos clásicos en 2D.",
    "image": "/images/avatars/polloCorazon.jpg",
    "category": "Nintendo",
    "price": 22230.48,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    "productId": "n2",
    "name": "Octopat Traveler",
    "description": "Ocho viajeros. Ocho aventuras. Ocho personajes jugables en un nuevo mundo de Square Enix. Explora la historia y las habilidades de los viajeros, dentro y fuera de la batalla. ¿Explorarás tus horizontes como un mercader o perseguirás al traidor como un guerrero? ¿Dónde irás? ¿A quién te unirás? Solo tú podrás escoger tu camino.",
    "image": "/images/avatars/pretzel.jpg",
    "category": "Nintendo",
    "price": 12860.5,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    "productId": "n3",
    "name": "metus",
    "description": "sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet",
    "image": "/images/avatars/tostada.jpg",
    "category": "accesories",
    "price": 14694.55,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    "productId": "n4",
    "name": "semper est",
    "description": "ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie",
    "image": "/images/avatars/jala.jpg",
    "category": "accesories",
    "price": 29963.8,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    "productId": "n5",
    "name": "dictumst morbi",
    "description": "eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus",
    "image": "/images/avatars/pretzel.jpg",
    "category": "accesories",
    "price": 75598.91,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    "productId": "n6",
    "name": "magnis",
    "description": "nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in",
    "image": "/images/avatars/pretzel.jpg",
    "category": "xbox",
    "price": 65477.99,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    "productId": "n7",
    "name": "ante vivamus",
    "description": "vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue",
    "image": "/images/avatars/tostada.jpg",
    "category": "play station",
    "price": 8754.82,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    "productId": "n8",
    "name": "felis fusce",
    "description": "nunc rhoncus dui vel sem sed sagittis nam congue risus",
    "image": "/images/avatars/pretzel.jpg",
    "category": "play station",
    "price": 35054.21,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    "productId": "x1",
    "name": "eget elit",
    "description": "amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac",
    "image": "/images/avatars/pretzel.jpg",
    "category": "xbox",
    "price": 16964.61,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    "productId": "x2",
    "name": "iaculis",
    "description": "vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at",
    "image": "/images/avatars/kipa.jpg",
    "category": "play station",
    "price": 19191.02,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    "productId": "x3",
    "name": "lobortis sapien",
    "description": "vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat",
    "image": "/images/avatars/jala.jpg",
    "category": "play station",
    "price": 46404.99,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    "productId": "x4",
    "name": "sit",
    "description": "duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse",
    "image": "/images/avatars/tostada.jpg",
    "category": "accesories",
    "price": 72179.86,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    "productId": "x5",
    "name": "rhoncus aliquam",
    "description": "nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo",
    "image": "/images/avatars/tostada.jpg",
    "category": "accesories",
    "price": 20776.74,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    "productId": "x6",
    "name": "vestibulum",
    "description": "molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in",
    "image": "/images/avatars/kipa.jpg",
    "category": "accesories",
    "price": 20483.09,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    "productId": "x7",
    "name": "amet sapien",
    "description": "donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue",
    "image": "/images/avatars/pletzale.jpg",
    "category": "xbox",
    "price": 49684.52,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    "productId": "x8",
    "name": "quisque",
    "description": "amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac",
    "image": "/images/avatars/tostada.jpg",
    "category": "nintendo",
    "price": 65807.11,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    "productId": "a1",
    "name": "eget",
    "description": "eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem",
    "image": "/images/avatars/tostada.jpg",
    "category": "accesories",
    "price": 14351.08,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    "productId": "a2",
    "name": "mauris eget",
    "description": "turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at",
    "image": "/images/avatars/pletzale.jpg",
    "category": "play station",
    "price": 63293.79,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    "productId": "a3",
    "name": "quisque",
    "description": "nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus",
    "image": "/images/avatars/tostada.jpg",
    "category": "accesories",
    "price": 65136.22,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    "productId": "a4",
    "name": "neque aenean",
    "description": "mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla",
    "image": "/images/avatars/pretzel.jpg",
    "category": "accesories",
    "price": 44350.98,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    "productId": "a5",
    "name": "ipsum primis",
    "description": "etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida",
    "image": "/images/avatars/kipa.jpg",
    "category": "nintendo",
    "price": 14844.45,
    createdAt: new Date(),
    updatedAt: new Date()

  },
  {
    "productId": "a6",
    "name": "in consequat",
    "description": "justo sollicitudin ut suscipit a feugiat et eros vestibulum ac",
    "image": "/images/avatars/tostada.jpg",
    "category": "accesories",
    "price": 20477.68,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    "productId": "a7",
    "name": "id",
    "description": "orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis",
    "image": "/images/avatars/pletzale.jpg",
    "category": "xbox",
    "price": 28654.37,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    "productId": "a8",
    "name": "ante",
    "description": "quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu",
    "image": "/images/avatars/kipa.jpg",
    "category": "xbox",
    "price": 62051.26,
    createdAt: new Date(),
    updatedAt: new Date()
  }

    ], {});
  },

  down: async (queryInterface, Sequelize) => {  
    await queryInterface.bulkDelete('Products', null, {});
    
  }
};
