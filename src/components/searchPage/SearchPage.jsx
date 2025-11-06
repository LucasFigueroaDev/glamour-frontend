import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDebounce } from '../../hooks/debounce/useDebounce.js';
import './searchPage.css';

const API_BASE_URL = import.meta.env.VITE_APP_API_URL;
const DEBOUNCE_DELAY = 500; // 0.5 segundos de espera
const SearchPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const debouncedSearchTerm = useDebounce(searchTerm, DEBOUNCE_DELAY);
    useEffect(() => {
        const fetchSearchResults = async () => {
            // No buscar si el término está vacío
            if (debouncedSearchTerm.trim() === '') {
                setResults([]);
                return;
            }
            setLoading(true);
            setError(null);
            try {
                const query = encodeURIComponent(debouncedSearchTerm);
                const endpoint = `${API_BASE_URL}/api/products/search?q=${query}`;
                const response = await fetch(endpoint);
                if (!response.ok) { throw new Error(`Error ${response.status}: Fallo al buscar productos.`); }
                const responseData = await response.json();
                setResults(responseData.data.payload || []);
            } catch (e) {
                console.error("Error en la búsqueda:", e);
                setError("Error al realizar la búsqueda.");
            } finally {
                setLoading(false);
            }
        };

        fetchSearchResults();
    }, [debouncedSearchTerm]); // solo se ejecuta cuando el término 'debounced' cambia

    // Manejador del input
    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div className="search-page-container">
            <h1 className="search-title">Buscar Productos</h1>
            <input
                type="text"
                placeholder="Escribe para buscar..."
                value={searchTerm}
                onChange={handleInputChange}
                className="search-input"
            />

            {loading && <p className="search-status-message">Buscando...</p>}
            {error && <p className="search-status-error">Error: {error}</p>}

            <div className="search-results-list">
                {(!loading && results.length > 0) && (
                    <p className="results-count">Se encontraron {results.length} resultados.</p>
                )}
                {(!loading && searchTerm.trim() !== '' && results.length === 0) && (
                    <p className="search-status-message">No se encontraron productos para "{searchTerm}".</p>
                )}

                {results.map(product => (
                    <div key={product._id} className="search-result-item">
                        <img
                            src={product.thumbnail || '/placeholder.jpg'}
                            alt={product.title}
                            className="result-item-image"
                        />
                        <div className="result-item-info">
                            <Link to={`/producto/${product._id}`} className="result-item-title">
                                {product.title}
                            </Link>
                            <p className="result-item-price">${product.price.toFixed(2)}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchPage;