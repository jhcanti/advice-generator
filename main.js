const url = 'https://api.adviceslip.com/advice';
const icon = document.querySelector('.icon');
const adviceId = document.querySelector('#adviceId');
const quote = document.querySelector('#quote');

const showAdviceId = id => {
    adviceId.innerHTML = `Advice #${id}`;
}

const showAdviceQuote = advice => {
    quote.innerHTML = `"${advice}"`;
}

const getAdvice = async () => {
    const response = await fetch(url);
    const advice = await response.json();
    showAdviceId(advice.slip.id);
    showAdviceQuote(advice.slip.advice);
}

const addIconListener = () => {
    icon.onclick = () => getAdvice();
}

window.onload = () => {
    addIconListener();
    getAdvice();
}