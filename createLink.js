const queryString = window.location.search;
const UrlParams = new URLSearchParams(queryString);

let linkText = "https://tlamart.github.io/toupisme/toupisme.html?ans=" + UrlParams.get("ans") + "&req=" + UrlParams.get("req")
let link = document.getElementById('link')
link.innerText = "Here is your link : " + linkText