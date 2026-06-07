const typingEl = document.getElementById("typing");

if (typingEl) {
    const text = "Syed Mohammed Ahsan Abidi";
    let i = 0;

    function type() {
        if (i < text.length) {
            typingEl.textContent += text[i++];
            setTimeout(type, 40);
        }
    }

    typingEl.textContent = "";
    type();
}