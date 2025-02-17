import React, { useState } from 'react';
import './Api.css';
import { getStockData } from '/src/servicios/apiServicio';

const Api = ({ isDarkMode, toggleDarkMode }) => {
    const [symbol, setSymbol] = useState('');
    const [lastSymbol, setLastSymbol] = useState('');
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [filter, setFilter] = useState('todo');
    const [selectedButton, setSelectedButton] = useState('todo'); // Estado para el botón seleccionado

    const fetchStockData = async () => {
        if (!symbol.trim()) {
            setError('Por favor, ingresa un símbolo válido.');
            return;
        }

        setIsLoading(true);
        setError(null);
        setData(null);

        try {
            const result = await getStockData(symbol);
            setData(result);
            setLastSymbol(symbol);
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
        setSelectedButton(newFilter); // Actualizar el botón seleccionado
    };

    const renderFilteredData = () => {
        if (!data) return null;

        const filters = {
            diaria: (
                <div className="box">
                    <h3>Diaria</h3>
                    <p><strong>Precio:</strong> ${data['05. price']}</p>
                    <p><strong>Cambio:</strong> {data['09. change']} ({data['10. change percent']})</p>
                </div>
            ),
            semana: (
                <div className="box">
                    <h3>Semana</h3>
                    <p><strong>Precio:</strong> ${(data['05. price'] * 7).toFixed(2)}</p>
                    <p><strong>Cambio:</strong> {(data['09. change'] * 7).toFixed(2)}%</p>
                </div>
            ),
            mensual: (
                <div className="box">
                    <h3>Mensual</h3>
                    <p><strong>Precio:</strong> ${(data['05. price'] * 30).toFixed(2)}</p>
                    <p><strong>Cambio:</strong> {(data['09. change'] * 30).toFixed(2)}%</p>
                </div>
            ),
            anual: (
                <div className="box">
                    <h3>Anual</h3>
                    <p><strong>Precio:</strong> ${(data['05. price'] * 365).toFixed(2)}</p>
                    <p><strong>Cambio:</strong> {(data['09. change'] * 365).toFixed(2)}%</p>
                </div>
            ),
            todo: (
                <>
                    <div className="box">
                        <h3>Diaria</h3>
                        <p><strong>Precio:</strong> ${data['05. price']}</p>
                        <p><strong>Cambio:</strong> {data['09. change']} ({data['10. change percent']})</p>
                    </div>
                    <div className="box">
                        <h3>Semana</h3>
                        <p><strong>Precio:</strong> ${(data['05. price'] * 7).toFixed(2)}</p>
                        <p><strong>Cambio:</strong> {(data['09. change'] * 7).toFixed(2)}%</p>
                    </div>
                    <div className="box">
                        <h3>Mensual</h3>
                        <p><strong>Precio:</strong> ${(data['05. price'] * 30).toFixed(2)}</p>
                        <p><strong>Cambio:</strong> {(data['09. change'] * 30).toFixed(2)}%</p>
                    </div>
                    <div className="box">
                        <h3>Anual</h3>
                        <p><strong>Precio:</strong> ${(data['05. price'] * 365).toFixed(2)}</p>
                        <p><strong>Cambio:</strong> {(data['09. change'] * 365).toFixed(2)}%</p>
                    </div>
                </>
            ),
        };

        return filters[filter] || null;
    };

    return (
        <div className={`Api ${isDarkMode ? 'dark-mode' : ''}`}>
            <main>
                <h1>Alpha Vantage Stock App</h1>
                <p>Busca información financiera en tiempo real</p>

                {/* Botones de filtro */}
                <div className="filters">
                    {['diaria', 'semana', 'mensual', 'anual', 'todo'].map((btn) => (
                        <button
                            key={btn}
                            onClick={() => handleFilterChange(btn)}
                            className={selectedButton === btn ? 'selected' : ''}
                        >
                            {btn.charAt(0).toUpperCase() + btn.slice(1)}
                        </button>
                    ))}
                </div>

                {/* Input y botón de búsqueda */}
                <div className="search-section">
                    <input
                        type="text"
                        placeholder="Ingresa el ticker (e.g., IBM)"
                        value={symbol}
                        onChange={(e) => setSymbol(e.target.value)}
                    />
                    <button onClick={fetchStockData}>Buscar</button>
                </div>

                {/* Indicador de carga */}
                {isLoading && <p className="loading">Cargando datos...</p>}

                {/* Mostrar error si ocurre */}
                {error && <p className="error">{error}</p>}

                {/* Mostrar los datos filtrados */}
                {data && (
                    <>
                        <h2>Datos de la acción: {lastSymbol.toUpperCase()}</h2>
                        <div className="results">{renderFilteredData()}</div>
                    </>
                )}
            </main>

            <footer>
                <p>© 2025 Alpha Vantage Stock App. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
};

export default Api;
