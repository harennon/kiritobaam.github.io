window.onload = init;
var x = "";

function init() {
    var submitButton = document.getElementById("post");
    submitButton.onclick = submit;
}

var submit = function() {
    var name = document.getElementById("name").value;
    var message = document.getElementById("message").value;
    document.getElementById("comments").innerHTML = x +
        "<h1 class = 'name'>" + name + "</h1><p class='mes'>" + message + "</p><br>";
    x += "<h1 class = 'name'>" + name + "</h1><p class='mes'>" + message + "</p><br>";
}
