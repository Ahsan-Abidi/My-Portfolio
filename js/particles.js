const particlesContainer =
document.getElementById("particles-js");

if (particlesContainer) {

    tsParticles.load("particles-js", {
        particles: {
            number: {
                value: 60
            },

            color: {
                value: "#38bdf8"
            },

            links: {
                enable: true,
                color: "#38bdf8",
                distance: 150
            },

            move: {
                enable: true,
                speed: 1
            },

            size: {
                value: 2
            }
        }
    });

}