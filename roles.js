// ==============================
// Gestión de Roles y Permisos
// ==============================

// Constantes de roles
export const ROLES = {
  ADMIN: "admin",
  STAFF: "staff",
  VIEWER: "viewer"
};

// Permisos disponibles por cada rol
export const PERMISOS = {
  admin: {
    dashboard: true,
    registros: true,
    apelaciones: true,
    adminPanel: true
  },
  staff: {
    dashboard: true,
    registros: true,
    apelaciones: true,
    adminPanel: false
  },
  viewer: {
    dashboard: true,
    registros: false,
    apelaciones: false,
    adminPanel: false
  }
};

// Revisa si un rol tiene permiso para una sección
export function tienePermiso(rol, seccion) {
  if (!PERMISOS[rol]) return false;
  return PERMISOS[rol][seccion] || false;
}

// Verifica acceso a una página
export function verificarAcceso(rolesPermitidos) {
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

// Mostrar info del usuario
export function mostrarInfoUsuario() {
  const usuario = JSON.parse(localStorage.getItem("usuarioActual"));

  if (usuario) {
    const nombreElem = document.getElementById("nombreUsuario");
    const rolElem = document.getElementById("rolUsuario");

    if (nombreElem) nombreElem.textContent = usuario.usuario;
    if (rolElem) rolElem.textContent = usuario.rol.toUpperCase();
  }
}

// Cerrar sesión
export function cerrarSesion() {
  localStorage.removeItem("usuarioActual");
  window.location.href = "index.html";
}
