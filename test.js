const a = {
    "url": "/content/filatelia/language-masters/es/rincon-correos/filatelia/productos/sellos/espana/1997/150-aniv-facultad-veterinaria-de-cordoba",
    "plaintext": {
      "rteText": "<p> Coincidiendo con el nuevo Plan de Estudios de Veterinaria, recientemente homologado por la Unión Europea, la filatelia española ha querido conmemorar de forma especial el 150 aniversario de la creación de la Facultad de Veterinaria en la ciudad de Córdoba. El sello reproduce el edificio de estilo neomudéjar que, desde los inicios de la década de los cuarenta hasta la actualidad, ha sido el centro de estudios de Veterinaria y que pasará a ser sede del rectorado de la Universidad de Córdoba. El nuevo emplazamiento de la Facultad en el Campus de Rabanales cuenta con una extensión de 260 hectáreas regadas por el canal principal del río Guadalmellato y, a diferencia de otras universidades europeas, además de los estudios sobre sanidad animal, incluye los de producción animal, Economía, Bromatología y Tecnología de los alimentos, así como un master especializado en Equinotecnia.Hasta hace 20 años la Facultad cordobesa era una de las cuatro únicas Facultades de Veterinaria existentes en España. Hoy celebra su larga tradición con interesantes proyectos y convenios de cooperación con universidades de todo el mundo.</p>"
    },
    "bannercards": {
      "subtitle": "150 ANIV. FACULTAD VETERINARIA DE CÓRDOBA",
      "releaseDate": "Fecha de emisión: 14/11/1997",
      "impresion": "Procedimiento de Impresión: Calcografía",
      "papel": "Papel: Estucado, engomado, fosforescente",
      "size": "Tamaño del sello: 40,9 x 28,8 mm (horizontal)",
      "efecto": "Efectos en pliego: 50 efectos",
      "tirada": "Tirada: 2.500.000",
      "additionalDetails": [
        { "additionalDetail": "Valor postal de los sellos: 21 pesetas" },
        { "additionalDetail": "Dentado: 13 3/4" }
      ],
      "images": [
        {
          "image": "/content/dam/filatelia/imagenes/sellos/espana/1997/150-aniv-facultad-veterinaria-de-cordoba.jpg",
          "alt": "11119971"
        }
      ]
    }
  };

  console.log(a['bannercards']['additionalDetails']);

  a.bannercards.additionalDetails.forEach((detail, index) => {
    if ( detail.additionalDetail.includes('Valor postal')) console.log('OK', index);
  });
  