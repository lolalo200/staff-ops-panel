// -----------------------------
// Manejo del Login
// -----------------------------

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();

      // Validación simple (tú luego la conectas con Firebase)
      if (username === "" || password === "") {
        alert("Por favor llena todos los campos.");
        return;
      }

      // Guardar usuario en sessionStorage
      sessionStorage.setItem("loggedUser", username);

      // Ir al dashboard
      window.location.href = "dashboard.html";
    });
  }

  // -----------------------------
  // Botón cerrar sesión
  // -----------------------------
  const logoutBtn = document.getElementById("logoutBtn");

  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      sessionStorage.removeItem("loggedUser");
      window.location.href = "index.html";
    });
  }

  // -----------------------------
  // Protección de páginas internas
  // -----------------------------
  const protectedPages = ["dashboard.html", "admin.html", "registros.html", "apelaciones.html"];

  if (protectedPages.some(page => window.location.href.includes(page))) {
    const user = sessionStorage.getItem("loggedUser");

    if (!user) {
      window.location.href = "index.html";
    }
  }
});
