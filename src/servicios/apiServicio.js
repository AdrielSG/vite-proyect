import axios from 'axios';

const API_KEY = 'VVBPHE2WGLGE4AYK';

export const getStockData = async (symbol) => {
    if (!symbol.trim()) {
        throw new Error('El símbolo no puede estar vacío.');
    }

    const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`;

    try {
        const { data } = await axios.get(url);

        // Validar si la clave 'Global Quote' existe en la respuesta
        if (data['Global Quote'] && Object.keys(data['Global Quote']).length > 0) {
            return data['Global Quote'];
        }

        // Manejar límite de llamadas a la API
        if (data.Note) {
            throw new Error('Se ha alcanzado el límite de llamadas a la API. Intenta más tarde.');
        }

        // Si no hay datos para el símbolo proporcionado
        throw new Error('No se encontraron datos para el símbolo proporcionado.');

    } catch (error) {
        // Capturar errores de red o problemas con la API
        throw new Error(error.response?.data?.Note || 'Error al conectarse a la API.');
    }
};

