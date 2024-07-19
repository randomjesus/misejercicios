
const paises = ['Espana', 'Francia', 'Italia', 'Alemania', 'Irlanda']
const minViajeros = 1;
const maxViajeros = 4;
const numMinDias = 5;
const numMaxDias = 10;

function organizarViaje(pais, viajeros, nDias) {
    //verificar si el pa'is est'a en la lista
    // en un paso
//   if (!paises.map(pais=>pais.toUpperCase()).includes(pais.toUpperCase())) {
//     throw new Error(`El país ${pais} no está en la lista de países`)
//   }
  // en varios paso
  const paisesMayusculas = paises.map(pais => pais.toUpperCase());
  const paisesBuscadoMayusculas = pais.toUpperCase();
  if (!paisesBuscadoMayusculas.includes(paisesBuscadoMayusculas)){
    throw new Error(`El país ${pais} no está en la lista de países`)
  }

  // verificar si el n de viajeros est'a entre el 1 y 4
  if (viajeros < minViajeros || viajeros > maxViajeros){
    throw new Error(`El número de viajeros debe estar entre el 1 y el 4`);
  }

  // verificar si el n de d'ias entre 5 y 10
  if (nDias < numMinDias || nDias > numMaxDias){
    throw new Error(`El número de días estar entre 5 y 10`)
  }
  // todas las condiciones se cumplen 
  return `Se ha reservado un viaje a ${pais} de ${nDias} días para ${viajeros} personas`
}

try {
    const resultado = organizarViaje('Francia', 5, 2);
    console.log(resultado);
    // console.log(organizarViaje('Francia', 5, 7));
    // console.log(organizarViaje('Portugal', 1, 6));
} catch (e){
    console.error(e.message)
}
