
const UrlParams = new URLSearchParams(window.location.search);

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function question() {
    let preq = document.getElementById('request');
    await sleep(3000);
    preq.classList.add("rounded-md", "bg-pink-400", "p-5", "mb-5");
    preq.innerText = UrlParams.get("req");
}

async function answer() {
    let panswer = document.getElementById('answer');
    await sleep(6000);
    panswer.classList.add("rounded-md", "bg-pink-500", "p-5");
    panswer.innerText = UrlParams.get("ans");
}

question();
answer();