import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './categoryShop.css';
const url = import.meta.env.VITE_APP_API_URL;
const CategoryShop = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch(`${url}/api/categories`);
                if (!response.ok) { throw new Error(`HTTP error! status: ${response.status}`); }
                const responseData = await response.json();
                const categoriesResponse = responseData.data.payload;
                setCategories(categoriesResponse);
            } catch (e) {
                console.error('Error al obtener las categorías:', e);
                setError("No se pudieron cargar las categorías. Por favor, inténtelo más tarde.");
            } finally {
                setLoading(false);
            }
        };

        fetchCategories();
    }, []);

    if (loading) {
        return (
            <section className="category-shop-section">
                <h2 className="category-shop-title">Categorias</h2>
                <div className="category-shop-container">Cargando categorías... </div>
            </section>
        );
    }
    if (error) {
        return (
            <section className="category-shop-section">
                <h2 className="category-shop-title">Categorias</h2>
                <div className="category-shop-container error">{error}</div>
            </section>
        );
    }
    return (
        <section className="category-shop-section">
            <h2 className="category-shop-title">Categorias</h2>
            <div className="category-grid">
                {categories.map((category) => (
                    <Link key={category._id} to={`/categoria/${category.name}/${category._id}`} className="category-card">
                            <div
                                className="category-image"
                                style={{ backgroundImage: `url(${category.image})` }}
                            >
                                <div className="category-info">
                                    <h3 className="category-name">{category.name}</h3>
                                    <p className="category-subtitle">{category.description}</p>
                                </div>
                            </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default CategoryShop;