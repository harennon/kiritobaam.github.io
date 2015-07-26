window.onload = init;


function init() {
    var addButton = document.getElementById("addButton");
    addButton.onclick = addItem;
    var removeButton = document.getElementById("removeButton");
    removeButton.onclick = removeItem;
    var clearButton = document.getElementById("clearButton");
    clearButton.onclick = clearItem;

    for (var note_text in localStorage) {
        addItemToDOM(note_text, localStorage[note_text]);
    }

    window.addEventListener("storage", "storageChanged", false);
}


var addItem = function(e) {
    var key = document.getElementById("key").value;

    var value = document.getElementById("value").value;
    localStorage.setItem(key, value);
    addItemToDOM(key, value);
}

var addItemToDOM = function(key, value) {
    var items = document.getElementById("items");
    var item = document.createElement("li");
    item.setAttribute("id", key);
    var span = document.createElement("span");
    span.setAttribute("class", "note");
    span.innerHTML = key + "   :   " + value;
    item.appendChild(span);
    items.appendChild(item);

}


var removeItem = function(e) {
    var key = document.getElementById("key").value;
    var value = document.getElementById("value").value;
    localStorage.removeItem(key);
    removeItemFromDOM(key);
}

var removeItemFromDOM = function(key) {
    var item = document.getElementById(key);
    item.parentNode.removeChild(item);
}


var clearItem = function(e) {
    localStorage.clear();
    var itemList = document.getElementById("items");
    while (itemList.firstChild) {
        itemList.removeChild(itemList.firstChild);
    }
    //var items = items.childNodes;
}
