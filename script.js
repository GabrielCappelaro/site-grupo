
document.addEventListener("DOMContentLoaded", function () {

    const botao = document.getElementById("botao");
    const fotoContainer = document.getElementById("fotoContainer");
    const explosion = document.getElementById("explosion");
    const particles = document.getElementById("particles");

    let fotoVisivel = false;
    let temporizadorExplosao;

    botao.addEventListener("click", function () {

        // Se a foto já estiver visível, recarrega a página
        if (fotoVisivel) {
            window.location.reload();
            return;
        }

        // Mostra a foto
        fotoVisivel = true;
        fotoContainer.hidden = false;

        botao.textContent = "ESCONDER FOTO";

        // Reinicia os efeitos
        clearTimeout(temporizadorExplosao);
        explosion.classList.remove("ativa");
        document.body.classList.remove("tremendo");
        particles.innerHTML = "";

        void fotoContainer.offsetWidth;

        explosion.classList.add("ativa");
        document.body.classList.add("tremendo");

        const cores = [
            "#ffffff",
            "#ffcc00",
            "#ff6600",
            "#ff3300",
            "#ff9900"
        ];

        for (let i = 0; i < 55; i++) {
            const particula = document.createElement("span");
            particula.classList.add("particle");

            const angulo = Math.random() * Math.PI * 2;
            const distancia = 150 + Math.random() * 500;

            const x = Math.cos(angulo) * distancia;
            const y = Math.sin(angulo) * distancia;
            const tamanho = 3 + Math.random() * 9;

            const cor = cores[
                Math.floor(Math.random() * cores.length)
            ];

            particula.style.setProperty("--x", `${x}px`);
            particula.style.setProperty("--y", `${y}px`);
            particula.style.setProperty("--size", `${tamanho}px`);
            particula.style.setProperty("--color", cor);

            particles.appendChild(particula);
        }

        temporizadorExplosao = setTimeout(function () {
            explosion.classList.remove("ativa");
            document.body.classList.remove("tremendo");
        }, 1300);

    });

});
