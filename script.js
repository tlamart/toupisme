
const queryString = window.location.search;
const UrlParams = new URLSearchParams(queryString);
let preq = document.getElementById('request')
const reqcontent = UrlParams.get("req")
preq.innerText = reqcontent
let panswer = document.getElementById('answer')
const anscontent = UrlParams.get("ans")
panswer.innerText = anscontent
