const datosJson='[{ "id": "1", "valor": "texto1"},{ "id": "3", "valor": "texto2"}]';

  try {
    const datos=JSON.parse(datosJson);
    console.log(datos);
  } catch(error) {
    console.log('Falla porque las claves valor no está entre comillas')
  }

  const datosJson2=`[
    { "id": 1, "valor": "texto1"},
    { "id": 3, "valor": "texto2"},
    { "id": 5, "valor": "texto1"}
  ]`;
  //transformamos a objeto
  const d=JSON.parse(datosJson2);
  console.log(d);

  