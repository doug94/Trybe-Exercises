const btnClick = document.getElementById('btn-click');
const span = document.getElementById('contador');
btnClick.addEventListener('click', () => {
    span.innerText = parseInt(span.innerHTML) + 1;
})