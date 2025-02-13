const queryString = window.location.search;
const UrlParams = new URLSearchParams(queryString);

let ans = UrlParams.get("ans")
let req = UrlParams.get("req")
req = req.split(' ').join('%20')

// let linkText = "https://toupisme.netlify.app/toupisme.html?ans='" + ans + "'&req='" + req + "'"
let linkText = "./toupisme.html?ans='" + ans + "'&req='" + req + "'"
let link = document.getElementById('link')
// link.innerText = "Here is your link : " + linkText
link.setAttribute('href', linkText)
