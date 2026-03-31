function agregarTarea() {
    let input = document.getElementById("tareaInput");
    let texto = input.value;

    if (texto == "") return;

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