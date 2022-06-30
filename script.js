const panel = document.querySelectorAll('.panel');

function widenUp() {
    this.classList.toggle('open');
}

function bringText(e) {
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
}

panel.forEach(panels => panels.addEventListener('click', widenUp))
panel.forEach(panels => panels.addEventListener('transitionend', bringText))