import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { loginRequest, loginSuccess, loginFailure } from '../../redux/userSlice/userSlice';
import '../loginPage/loginPage.css';

const API_BASE_URL = import.meta.env.VITE_APP_API_URL;

const RegisterPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Obtenemos estado de Redux (aunque 'error' y 'loading' pueden ser comunes)
    const { loading } = useSelector((state) => state.user);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !password || !confirmPassword) {
            toast.error("Todos los campos son obligatorios.");
            return;
        }
        if (password.length < 8) {
            toast.error("La contraseña debe tener al menos 8 caracteres.");
            return;
        }
        if (password !== confirmPassword) {
            toast.error("Las contraseñas no coinciden.");
            return;
        }
        dispatch(loginRequest());
        try {
            const endpoint = `${API_BASE_URL}/api/users/register`;
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });
            const data = await response.json();
            const responseData = data.data || data;
            const successStatus = "Exito al crear el usuario";
            if (response.ok && responseData.status === successStatus) {
                const user = responseData.user;
                dispatch(loginSuccess({ token: null, user: user }));
                toast.success(`¡Registro exitoso! Bienvenido/a `);
                navigate('/login');
            } else {
                const errorMessage = data.message || data.error || responseData.status || "Error al intentar registrar el usuario.";
                dispatch(loginFailure(errorMessage));
                toast.error(errorMessage);
            }
        } catch (e) {
            console.error("Error de conexión:", e);
            dispatch(loginFailure("Error de conexión con el servidor."));
            toast.error("No se pudo conectar al servicio de registro.");
        }
    };
    return (
        <div className="login-page-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h1 className="login-title">Crear Cuenta</h1>
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
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirmar Contraseña</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        disabled={loading}
                    />
                </div>
                <button
                    type="submit"
                    className="login-btn"
                    disabled={loading}
                >
                    {loading ? 'Registrando...' : 'Registrarme'}
                </button>
                <p className="register-link-text">
                    ¿Ya tienes cuenta? <Link to="/login" className="register-link">Inicia Sesión aquí</Link>
                </p>
            </form>
        </div>
    );
};

export default RegisterPage;