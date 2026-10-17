const btns = document.querySelectorAll('button');

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        if ("link" in btn.dataset && btn.dataset.link != "") {
            window.open(btn.dataset.link, "_blank");
        }
    });
});