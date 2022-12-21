'use strict';

// let request;
// if(window.XMLHttpRequest){
// request = new XMLHttpRequest();
// }
// else{
// request = new ActiveXObject("Microsoft.XMLHTTP");
// }
// request.open("GET", "person.json");
// request.responseType = "json";
// request.onreadystatechange = function(){
// if(request.readyState ===
// 4 && request.status === 200){
// let person = request.response;
// console.log(person);
// }
// }
// request.send();

let request;
if(window.XMLHttpRequest)
    request = new XMLHttpRequest();
else
    request = new ActiveXObject("Microsoft.XMLHTTP");

request.open("GET","http://api.openweathermap.org/data/2.5/weather?q=Kiev&units=metric&APPID=b03a2cfad336d11bd9140ffd92074504");
request.onload = function(){
    if(request.status === 200)
        alert(request.response);
        console.log(request.response)
}
request.send();