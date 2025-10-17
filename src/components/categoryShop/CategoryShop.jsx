import React, { useState, useEffect } from 'react';
import './categoryShop.css';

const CategoryShop = () => {
    // Estado para guardar las categorías (inicialmente un array vacío)
    const [categories, setCategories] = useState([]);
    // Estado para manejar el estado de carga
    const [loading, setLoading] = useState(true);
    // Estado para manejar errores de la API
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/categories/');

                if (!response.ok) {
                    // Si la respuesta HTTP no es exitosa
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const responseData = await response.json();
                const categoriesResponse = responseData.data.payload;                
                setCategories(categoriesResponse);
            } catch (e) {
                // Maneja errores de red o errores lanzados arriba
                console.error("Error fetching categories:", e);
                // Usa el mensaje de error para el usuario
                setError("No se pudieron cargar las categorías. Por favor, inténtelo más tarde.");
            } finally {
                // Se ejecuta al finalizar, ya sea con éxito o con error
                setLoading(false);
            }
        };

        fetchCategories();
    }, []); // El array vacío asegura que se ejecute solo al montar

    // 1. Muestra el estado de carga
    if (loading) {
        return (
            <section className="category-shop-section">
                <h2 className="category-shop-title">Shop by Category</h2>
                <div className="category-shop-container">Cargando categorías... 🛍️</div>
            </section>
        );
    }

    // 2. Muestra el estado de error
    if (error) {
        return (
            <section className="category-shop-section">
                <h2 className="category-shop-title">Shop by Category</h2>
                <div className="category-shop-container error">{error}</div>
            </section>
        );
    }

    // 3. Muestra las categorías si la petición fue exitosa
    return (
        <section className="category-shop-section">
            <h2 className="category-shop-title">Shop by Category</h2>
            <div className="category-grid">
                {categories.map((category) => (
                    // Asegúrate de que tus objetos de categoría tienen 'id', 'name', 'subtitle', 'imageUrl'
                    <div key={category.id} className="category-card">
                        <div
                            className="category-image"
                            // Usamos la URL que viene de la API para el fondo de la tarjeta
                            style={{ backgroundImage: `url(${category.image})` }}
                        >
                            <div className="category-info">
                                <h3 className="category-name">{category.name}</h3>
                                <p className="category-subtitle">{category.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CategoryShop;