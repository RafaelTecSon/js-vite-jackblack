/**
 * Esta funcion elimina una posicion de un array y devuelve el valor que elimino
 * @param {Array<String>} deck ejemplo: [valor1, valor2, valor3, etc]
 * @returns {String} Regresa un String
 */
export const pedirCarta = (deck) => {
    if (!deck || deck.length === 0)
        throw new Error('deck esta vacio o no se paso un valor')

    if (deck.length === 0) {
        throw 'No hay cartas en el deck';
    }

    return deck.pop();
}