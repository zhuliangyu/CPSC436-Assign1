function clearInput() {
    document.getElementById("messageInput").value = "";
}


(function readJson() {
    let JSON_string = '{"msg":["asd0","asd1","asd2","asd3"]}';

    let obj = JSON.parse(JSON_string);
    let listMsgs = obj.msg;
    listMsgs.map(ele => {
        let node = document.createElement("LI");                 // Create a <li> node
        node.className = "list-group-item list-group-item-info";
        let textnode = document.createTextNode(ele);         // Create a text node
        node.appendChild(textnode);                              // Append the text to <li>


        document.getElementById("msg-wall").appendChild(node);

    });


})();

function pushNewMessage() {
    let node = document.createElement("LI");                 // Create a <li> node
    node.className = "list-group-item list-group-item-info";
    let text = document.getElementById("messageInput").value;         // get message from input
    let textnode = document.createTextNode(text);         // Create a text node
    node.appendChild(textnode);                              // Append the text to <li>
    document.getElementById("msg-wall").appendChild(node);
}

function clearAllMsg() {
    var x = document.getElementById("msg-wall");

    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}