function clearInput() {
    document.getElementById("messageInput").value = "";
}

var n = 0;
let JSON_string = '{"msg":["asd0","asd1","asd2","asd3"]}';

(function readJson() {

    let obj = JSON.parse(JSON_string);
    let listMsgs = obj.msg;
    listMsgs.map(ele => {
        // Create a <li> node
        let node = document.createElement("li");

        node.className = "list-group-item list-group-item-info";
        let textnode = document.createTextNode(ele);         // Create a text node
        node.appendChild(textnode);                              // Append the text to <li>

        let button = document.createElement("button");
        button.innerHTML = "Delete";
        button.id = n;
        button.onclick = function () {
            // alert(button.id);
            document.getElementById("msg-wall").removeChild(node);

        };

        node.appendChild(button);

        // list num
        n++;

        document.getElementById("msg-wall").appendChild(node);

    });


})();

function pushNewMessage() {
    // li_node.className = "list-group-item list-group-item-info";
    let text = document.getElementById("messageInput").value;         // get message from input
    let textnode = document.createTextNode(text);         // Create a text li_node

    let li_node = document.createElement("LI");                 // Create a <li> li_node
    li_node.appendChild(textnode);                              // Append the text to <li>

    let button = document.createElement("button");
    button.innerHTML = "Delete";
    button.id = n;
    button.onclick = function () {
        // alert(button.id);
        document.getElementById("msg-wall").removeChild(li_node);

    };
    n++;
    li_node.appendChild(button);                              // Append the text to <li>


    document.getElementById("msg-wall").appendChild(li_node);
    document.getElementById("messageInput").value = '';
}

function clearAllMsg() {
    let ul_node = document.getElementById("msg-wall");

    ul_node.innerText = '';
    alert("Are you sure DELETE all messages?")

}