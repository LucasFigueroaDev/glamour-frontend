// import.meta.env.PROD es 'true' cuando se ejecuta npm run build (producción).
if (import.meta.env.PROD) {
    const noop = () => { };

    // Deshabilitar console.log y console.warn en la versión de producción.
    console.log = noop;
    console.error = noop;
    console.warn = noop;

} else {
    // Modo de desarrollo: la consola funciona normalmente.
    console.log("Aplicación en Modo Desarrollo.");
}