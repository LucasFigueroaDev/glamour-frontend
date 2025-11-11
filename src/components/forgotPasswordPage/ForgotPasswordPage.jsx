import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import './forgotPasswordPage.css';

const API_BASE_URL = import.meta.env.VITE_APP_API_URL;

const ForgotPasswordPage = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email) {
            toast.error("Por favor, ingresa tu dirección de email.");
            return;
        }

        setLoading(true);

        try {
            // Asumiendo que tu backend tiene esta ruta para solicitar el restablecimiento
            const endpoint = `${API_BASE_URL}/api/users/reset-password`;

            const response = await fetch(endpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (response.ok && data.status === 'success') {
                // Mensaje clave: ¡Decirle al usuario que revise su email!
                toast.success(
                    "¡Enlace de restablecimiento enviado! Por favor, revisa tu bandeja de entrada y spam.",
                    { duration: 6000 }
                );
                setEmail(''); // Limpiar el campo
            } else {
                // Errores comunes: Email no encontrado, error del servidor.
                const errorMessage = data.message || "Error al solicitar el restablecimiento. Verifica el email.";
                toast.error(errorMessage);
            }

        } catch (e) {
            console.error("Error de conexión:", e);
            toast.error("No se pudo conectar al servidor.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="forgot-password-page-container">
            <form className="forgot-password-form" onSubmit={handleSubmit}>
                <h1 className="form-title">¿Olvidaste tu Contraseña?</h1>
                <p className="form-description">
                    Ingresa tu email y te enviaremos un enlace para que puedas restablecer tu contraseña.
                </p>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        disabled={loading}
                    />
                </div>

                <button
                    type="submit"
                    className="submit-btn"
                    disabled={loading}
                >
                    {loading ? 'Enviando...' : 'Enviar Enlace de Restablecimiento'}
                </button>

                <p className="back-to-login">
                    <Link to="/login">← Volver al inicio de sesión</Link>
                </p>
            </form>
        </div>
    );
};

export default ForgotPasswordPage;