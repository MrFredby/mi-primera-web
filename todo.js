window.onload = function() {
    let tareas = JSON.parse(this.localStorage.getItem("tareas")) || "[]";
    
    tareas.forEach(tarea => {
        crearTarea(tarea.texto, tarea.completada);
    });
    };

function agregarTarea() {
    let input = document.getElementById("tareaInput");
    let texto = input.value;

    if (texto == "") return;

    crearTarea(texto, false);
    guardarTarea();

    let li = document.createElement("li");
    li.textContent = texto;

    li.onclick = function() {
        li.style.textDecoration = "line-through";
    };

    let btnEliminar = document.createElement("button");
    btnEliminar.textContent = "X";

    btnEliminar.onclick = function() {
        li.remove();
    };

    li.appendChild(btnEliminar);
    document.getElementById("lista").appendChild(li);
    input.value = "";
}
function crearTarea(texto, completada) {
    let li = document.createElement("li");
    li.textContent = texto;

    if (completada) {
        li.style.textDecoration = "line-through";
    }

    li.onclick = function() {
        li.style.textDecoration =
            li.style.textDecoration === "line-through" ? "none" : "line-through";
        guardarTareas();
    };

    let btn = document.createElement("button");
    btn.textContent = "X";

    btn.onclick = function(e) {
        e.stopPropagation();
        li.remove();
        guardarTareas();
    };

    li.appendChild(btn);

    document.getElementById("lista").appendChild(li);
}
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