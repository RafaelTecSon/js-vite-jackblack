/**
 * Esta funcion permite extraer el numero de una carta
 * @param {String} carta Recibe un parametro tipo String
 * @returns {number} Retorna un valor entero
 */
export const valorCarta = (carta) => {
    if(carta === "")
        throw new Error('El parametro carta esta vacio');


    const valor = carta.substring(0, carta.length - 1);
    return (isNaN(valor)) ?
        (valor === 'A') ? 11 : 10
        : valor * 1;
}