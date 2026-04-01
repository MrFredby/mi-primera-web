// 🌗 DARK MODE
const toggle = document.getElementById("theme-toggle");

if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");
}

toggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    localStorage.setItem(
        "theme",
        document.body.classList.contains("light-mode") ? "light" : "dark"
    );
});

// ⬆️ BOTÓN TOP
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
    topBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// 🧭 NAV ACTIVO
const secciones = document.querySelectorAll("section");
const links = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let current = "";

    secciones.forEach(sec => {
        const top = sec.offsetTop - 120;
        if (scrollY >= top) {
            current = sec.getAttribute("id");
        }
    });

    links.forEach(link => {
        link.classList.remove("activo");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("activo");
        }
    });
});