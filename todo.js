// 🔥 CARGAR TAREAS AL INICIAR
window.onload = function () {
    let tareas = JSON.parse(localStorage.getItem("tareas")) || [];

    tareas.forEach(tarea => {
        crearTarea(tarea.texto, tarea.completada);
    });
};

// 🔥 AGREGAR TAREA
function agregarTarea() {
    let input = document.getElementById("tareaInput");
    let texto = input.value;

    if (texto === "") return;

    crearTarea(texto, false);
    guardarTareas();

    input.value = "";
}

// 🔥 CREAR TAREA
function crearTarea(texto, completada) {
    let li = document.createElement("li");
    li.textContent = texto;

    if (completada) {
        li.style.textDecoration = "line-through";
    }

    // Marcar como completada
    li.onclick = function () {
        li.style.textDecoration =
            li.style.textDecoration === "line-through" ? "none" : "line-through";
        guardarTareas();
    };

    // Botón eliminar
    let btn = document.createElement("button");
    btn.textContent = "X";

    btn.onclick = function (e) {
        e.stopPropagation();
        li.remove();
        guardarTareas();
    };

    li.appendChild(btn);

    document.getElementById("lista").appendChild(li);
}

// 🔥 GUARDAR TAREAS
function guardarTareas() {
    let lista = document.querySelectorAll("#lista li");

    let tareas = [];

    lista.forEach(li => {
        tareas.push({
            texto: li.firstChild.textContent,
            completada: li.style.textDecoration === "line-through"
        });
    });

    localStorage.setItem("tareas", JSON.stringify(tareas));
}