document.addEventListener("DOMContentLoaded", function () {
    console.log("Contenido del DOM cargado");

    const textarea = document.getElementById("origen");
    textarea.value = '<p>Este contenido <strong>está listo</strong><br>para ser editado y pasarlo abajo.</p>';

    textarea.addEventListener("input", function () {
        const inputs = document.querySelectorAll("input");
        const button = document.querySelector("button");

        inputs.forEach((input) => {
            input.disabled = false;
        });

        button.disabled = false;
    });

    document.getElementById("btn-reemplazar").addEventListener("click", function () {
        const destino = document.getElementById("destino");
        destino.innerHTML = textarea.value;
    });

    document.querySelectorAll(".btn-agregar").forEach(function (btn) {
        btn.addEventListener("click", function () {
            const destino = document.getElementById("destino");
            const veces = btn.value.includes("n veces") ? prompt("Ingrese la cantidad de veces:") : parseInt(btn.value.split(" ")[1]) || 1;
            for (let i = 0; i < veces; i++) {
                destino.innerHTML += textarea.value;
            }
        });
    });

    document.querySelectorAll(".btn-vaciar, .btn-convertir-a-mayusculas, button").forEach(function (btn) {
        btn.addEventListener("click", function () {
            const destino = document.getElementById("destino");
            if (btn.classList.contains("btn-vaciar")) {
                destino.innerHTML = "";
            } else if (btn.classList.contains("btn-convertir-a-mayusculas")) {
                destino.innerHTML = destino.innerHTML.toUpperCase();
            } else {
                destino.innerHTML = destino.innerHTML.toLowerCase();
            }
        });
    });

    const liElements = document.getElementsByTagName("li");
    for (let i = 0; i < liElements.length; i++) {
        liElements[i].innerHTML = "[Ok] " + liElements[i].innerHTML;
    }

    document.querySelectorAll("input, button").forEach((element) => {
        element.disabled = false;
    });
});