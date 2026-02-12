document.getElementById("formPQR")?.addEventListener("submit", function(e){
    e.preventDefault();

    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries());

    // Generar ID automático tipo NR/CUN
    const idGenerado = "NR" + Date.now();

    data.id = idGenerado;
    data.fecha = new Date().toLocaleString();

    // Guardar en localStorage
    localStorage.setItem("resumenPQR", JSON.stringify(data));

    // Redirigir a resumen
    window.location.href = "resumen.html";
});
