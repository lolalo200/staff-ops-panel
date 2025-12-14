// =====================================
// Firebase – Configuración y Base de Datos (MODULAR v9+)
// =====================================

import { initializeApp } from "firebase/app";
import {
    getDatabase,
    ref,
    push,
    set,
    get,
    update,
    remove
} from "firebase/database";

// 👉 Reemplaza estos valores CON LOS TUYOS reales
const firebaseConfig = {
    apiKey: "AIzaSyCt2BKa_cLsMQWOCbkvRnqPM5a_EMmDxBA",
    authDomain: "staff-ops-panel.firebaseapp.com",
    projectId: "staff-ops-panel",
    storageBucket: "staff-ops-panel.firebasestorage.app",
    messagingSenderId: "540603726894",
    appId: "1:540603726894:web:10b3ae26a46702c7bdb3bf",
    databaseURL: "https://staff-ops-panel-default-rtdb.firebaseio.com"
};

// Inicializar App
const app = initializeApp(firebaseConfig);

// Inicializar Base de Datos
export const db = getDatabase(app);

// =====================================
// FUNCIONES UNIVERSALES
// =====================================

// Guardar un registro
export function guardarRegistro(ruta, datos) {
    const nuevo = push(ref(db, ruta));
    return set(nuevo, {
        ...datos,
        timestamp: Date.now()
    });
}

// Obtener registros
export async function obtenerRegistros(ruta) {
    const snapshot = await get(ref(db, ruta));
    return snapshot.exists() ? snapshot.val() : {};
}

// Actualizar registro
export function actualizarRegistro(ruta, id, datos) {
    return update(ref(db, `${ruta}/${id}`), datos);
}

// Eliminar registro
export function eliminarRegistro(ruta, id) {
    return remove(ref(db, `${ruta}/${id}`));
}

// =====================================
// SISTEMA DE LOGS
// =====================================

export function logAccion(usuario, accion, detalle = "") {
    const nuevoLog = push(ref(db, "logs"));
    return set(nuevoLog, {
        usuario,
        accion,
        detalle,
        fecha: new Date().toLocaleString(),
        timestamp: Date.now()
    });
}
