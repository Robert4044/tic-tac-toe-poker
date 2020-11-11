const idInput = document.getElementById('idInput');

const colorInput = document.getElementById('colorInput');

const btn = document.getElementById('btn');

btn.addEventListener('click', setCard);

function setCard(e) {
    const card = document.getElementById(idInput.value);

    card.style.color = colorInput.value;
}

const resetBtn = document.getElementById('reset');
resetBtn.addEventListener('click', reset);
function reset() {
    const cardReset = document.getElementById(idInput.value);
    cardReset.style.color = '';
}
