
function mostrarFoto() {

    // Seleciona os elementos
    const fotoContainer = document.getElementById("fotoContainer");
    const explosion = document.getElementById("explosion");
    const particles = document.getElementById("particles");

    // Reinicia os efeitos
    explosion.classList.remove("ativa");
    fotoContainer.classList.remove("aparecendo");
    document.body.classList.remove("tremendo");

    // Limpa partículas anteriores
    particles.innerHTML = "";

    // Reinicia as animações
    void explosion.offsetWidth;

    // Mostra a foto
    fotoContainer.classList.add("aparecendo");

    // Ativa a explosão
    explosion.classList.add("ativa");

    // Faz a tela tremer
    document.body.classList.add("tremendo");

    // Cores das partículas
    const cores = [
        "#ffffff",
        "#ffcc00",
        "#ff6600",
        "#ff3300",
        "#ff9900"
    ];

    // Cria 55 partículas
    for (let i = 0; i < 55; i++) {

        const particula = document.createElement("span");

        particula.classList.add("particle");

        // Direção aleatória
        const angulo = Math.random() * Math.PI * 2;

        // Distância da explosão
        const distancia = 150 + Math.random() * 500;

        // Calcula a trajetória
        const x = Math.cos(angulo) * distancia;
        const y = Math.sin(angulo) * distancia;

        // Tamanho aleatório
        const tamanho = 3 + Math.random() * 9;

        // Cor aleatória
        const cor = cores[
            Math.floor(Math.random() * cores.length)
        ];

        // Define as propriedades
        particula.style.setProperty("--x", `${x}px`);
        particula.style.setProperty("--y", `${y}px`);
        particula.style.setProperty("--size", `${tamanho}px`);
        particula.style.setProperty("--color", cor);

        // Adiciona a partícula à tela
        particles.appendChild(particula);
    }

    // Remove os efeitos após a explosão
    setTimeout(() => {
        explosion.classList.remove("ativa");
        document.body.classList.remove("tremendo");
    }, 1300);

}
