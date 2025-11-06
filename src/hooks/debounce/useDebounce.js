import { useState, useEffect } from 'react';
/**
 * Hook para retrasar la actualización de un valor.
 * Útil para reducir la frecuencia de llamadas a la API (ej. en búsquedas).
 * @param {any} value - El valor a retrasar (ej. el texto del input).
 * @param {number} delay - El tiempo de espera en milisegundos (ej. 500).
 * @returns {any} El valor retrasado.
 */
export function useDebounce(value, delay) {
    // Estado para almacenar el valor 'debounced'
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        // Establece un temporizador (timeout) que actualizará el valor después del 'delay'
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        // Limpieza: si el valor de entrada (value) o el 'delay' cambian
        // antes de que el temporizador se complete, el temporizador anterior
        // se cancela y se inicia uno nuevo.
        return () => {
            clearTimeout(handler);
        };
    }, 
    [value, delay] // Se vuelve a ejecutar cuando 'value' o 'delay' cambian
    );

    return debouncedValue;
}