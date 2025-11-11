import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { loginRequest, loginSuccess, loginFailure,  } from '../../redux/userSlice/userSlice.js';
import './loginPage.css';

const API_BASE_URL = import.meta.env.VITE_APP_API_URL;

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, error } = useSelector((state) => state.user);
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            toast.error("Por favor, ingresa email y contraseña.");
            return;
        }
        dispatch(loginRequest()); 
        try {
            const endpoint = `${API_BASE_URL}/api/users/login`;
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });
            const data = await response.json();
            if (response.ok && data.status === 'success') {
                const { token, user } = data.payload;
                dispatch(loginSuccess({ token, user }));
                toast.success(`¡Bienvenido, ${user.firstName || user.email}!`);
                navigate('/'); 
            } else {
                const errorMessage = data.error || data.message || "Credenciales inválidas.";
                dispatch(loginFailure(errorMessage));
                toast.error(errorMessage);
            }
        } catch (e) {
            console.error("Error de conexión:", e);
            dispatch(loginFailure("Error de conexión con el servidor."));
            toast.error("No se pudo conectar al servicio de autenticación.");
        }
    };
    return (
        <div className="login-page-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h1 className="login-title">Iniciar Sesión</h1>
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
                <div className="form-group">
                    <label htmlFor="password">Contraseña</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        disabled={loading}
                    />
                </div>
                <button
                    type="submit"
                    className="login-btn"
                    disabled={loading}
                >
                    {loading ? 'Cargando...' : 'Entrar'}
                </button>
                <p className="register-link-text">
                    ¿No tienes cuenta? <Link to="/register" className="register-link">Regístrate aquí</Link>
                </p>
                <p className="forgot-password-link-text">
                    <Link to="/forgot-password" className="forgot-password-link">¿Olvidaste tu contraseña?</Link>
                </p>
            </form>
        </div>
    );
};

export default LoginPage;