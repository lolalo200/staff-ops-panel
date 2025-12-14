// ==============================
//  Gestión de Roles y Permisos
// ==============================

// Verifica el rol del usuario y controla acceso a páginas
function verificarAcceso(rolesPermitidos) {
    const usuario = JSON.parse(localStorage.getItem("usuarioActual"));

    if (!usuario || !usuario.rol) {
        alert("No has iniciado sesión.");
        window.location.href = "index.html";
        return;
    }

    if (!rolesPermitidos.includes(usuario.rol)) {
        alert("No tienes permiso para entrar aquí.");
        window.location.href = "dashboard.html";
    }
}

// Mostrar rol y usuario en las páginas
function mostrarInfoUsuario() {
    const usuario = JSON.parse(localStorage.getItem("usuarioActual"));

    if (usuario) {
        const nombreElem = document.getElementById("nombreUsuario");
        const rolElem = document.getElementById("rolUsuario");

        if (nombreElem) nombreElem.textContent = usuario.usuario;
        if (rolElem) rolElem.textContent = usuario.rol.toUpperCase();
    }
}

// Cerrar sesión
function cerrarSesion() {
    localStorage.removeItem("usuarioActual");
    window.location.href = "index.html";
}
