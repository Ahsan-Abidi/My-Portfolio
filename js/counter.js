const counters = document.querySelectorAll(".stat-card h3");

counters.forEach(counter => {

    const target =
        parseInt(counter.getAttribute("data-target")) || 100;

    let count = 0;

    const update = () => {

        count += target / 50;

        if (count < target) {

            counter.innerText =
                Math.ceil(count);

            requestAnimationFrame(update);

        } else {

            counter.innerText =
                target + "+";
        }
    };

    update();
});