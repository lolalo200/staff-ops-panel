// ==============================
// Firebase – Configuración y Base de Datos
// ==============================

// 👉 Reemplaza estas keys con las de TU proyecto Firebase
const firebaseConfig = {
    apiKey: "TU_API_KEY",
    authDomain: "TU_AUTH_DOMAIN",
    databaseURL: "TU_DATABASE_URL",
    projectId: "TU_PROJECT_ID",
    storageBucket: "TU_STORAGE_BUCKET",
    messagingSenderId: "TU_SENDER_ID",
    appId: "TU_APP_ID"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

// Inicializar Base de Datos
const db = firebase.database();

// ==============================
// FUNCIONES UNIVERSALES
// ==============================

// Guardar un registro en una colección
export function guardarRegistro(ruta, datos) {
    const nuevo = db.ref(ruta).push();
    return nuevo.set({
        ...datos,
        timestamp: Date.now()
    });
}

// Obtener todos los registros de una colección
export async function obtenerRegistros(ruta) {
    const snapshot = await db.ref(ruta).once("value");
    return snapshot.val() || {};
}

// Actualizar un registro
export function actualizarRegistro(ruta, id, datos) {
    return db.ref(`${ruta}/${id}`).update(datos);
}

// Eliminar un registro
export function eliminarRegistro(ruta, id) {
    return db.ref(`${ruta}/${id}`).remove();
}

// ==============================
// SISTEMA DE LOGS
// ==============================

export function logAccion(usuario, accion, detalle = "") {
    const log = {
        usuario,
        accion,
        detalle,
        fecha: new Date().toLocaleString(),
        timestamp: Date.now()
    };

    db.ref("logs").push(log);
}
