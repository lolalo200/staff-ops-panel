// ------------------------------
// Manejo básico de navegación
// ------------------------------
document.addEventListener("DOMContentLoaded", () => {
    const navButtons = document.querySelectorAll("[data-nav]");
    navButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const target = btn.getAttribute("data-nav");
            window.location.href = target + ".html";
        });
    });
});

// ------------------------------
// Inicio de sesión simple (usuario + contraseña)
// * Conectarás esto a Firebase después *
// ------------------------------
function loginUser() {
    const user = document.getElementById("userInput").value.trim();
    const pass = document.getElementById("passwordInput").value.trim();

    if (!user || !pass) {
        alert("Por favor ingresa usuario y contraseña.");
        return;
    }

    // Temporal — esto lo vas a reemplazar con Firebase Auth
    const tempUsers = {
        "admin": "1234",
        "moderador": "abcd",
        "staff": "0000"
    };

    if (tempUsers[user] && tempUsers[user] === pass) {
        localStorage.setItem("panelUser", user);
        window.location.href = "dashboard.html";
    } else {
        alert("Credenciales incorrectas.");
    }
}

// ------------------------------
// Cerrar sesión
// ------------------------------
function logout() {
    localStorage.removeItem("panelUser");
    window.location.href = "index.html";
}

// ------------------------------
// Verificación al cargar páginas internas
// ------------------------------
function checkLogin() {
    const user = localStorage.getItem("panelUser");
    if (!user) {
        window.location.href = "index.html";
    }
}

// Llamarlo en cada página interna:
try {
    checkLogin();
} catch (err) {}
