'use strict';

// let request;
// if (window.XMLHttpRequest) {
//     request = new XMLHttpRequest();
// }
// else {
//     request = new ActiveXObject("Microsoft.XMLHTTP");
// }

// open(method, URL, [async, user, password])

let request;
if (window.XMLHttpRequest) {
    request = new XMLHttpRequest();
}
else {
    request = new ActiveXObject("Microsoft.XMLHTTP");
}
request.open("GET", "text.txt");

request.onreadystatechange = function() {
    console.log("readyState = " + request.readyState);
    if (request.readyState === 4) {alert(request.response);}
}
request.send()