var ul = document.getElementById("list");
var taskInput = document.getElementById("taskInput");


// this function inserts task in the to-do list
function insertList() {
    var li = document.createElement("li");

    // creating and appending text node in "li"
    var liText = document.createTextNode(taskInput.value + "  ");
    li.appendChild(liText);

    // creating and appending edit node in "li"
    var editBtn = document.createElement("button");
    var editBtnTxt = document.createTextNode("Edit");
    editBtn.appendChild(editBtnTxt);
    editBtn.type = "button";
    editBtn.className = "btn btn-outline-dark";
    editBtn.setAttribute("onclick", "editItem(this)");
    li.appendChild(editBtn);

    // creating and appending text node in "li"
    var delBtn = document.createElement("button");
    var delBtnTxt = document.createTextNode("Delete");
    delBtn.appendChild(delBtnTxt);
    delBtn.type = "button";
    delBtn.className = "btn btn-outline-dark";
    delBtn.setAttribute("onclick", "delItem(this)");
    li.appendChild(delBtn);

    // creating and appending date in li
    var lineBreak = document.createElement("br");
    li.appendChild(lineBreak)

    var date = new Date();
    var para = document.createElement("p");
    var dateText = document.createTextNode("Listed on " + date);
    para.appendChild(dateText)
    li.appendChild(para);

    ul.appendChild(li);
    taskInput.value = "";
}
function clearList() {
    ul.innerHTML = "";
}
function editItem(e) {
    var editTask = e.parentNode;
    var val = editTask.firstChild.nodeValue;
    
    // epmtying li
    editTask.innerHTML = "";

    // creating and appending input field in li
    var input = document.createElement("input");
    input.type = "text";
    input.value = val;
    input.id = "edit-input"
    editTask.appendChild(input);

    // creating and appending update in li
    var updateBtn = document.createElement("button");
    var updateBtnTxt = document.createTextNode("Update");
    updateBtn.appendChild(updateBtnTxt);
    updateBtn.type = "button";
    updateBtn.className = "btn btn-outline-dark";
    updateBtn.setAttribute("onclick", "updateItem(this)");
    editTask.appendChild(updateBtn);
}
function delItem(e) {
    e.parentNode.remove();
}

function updateItem(e){
    var editTask = e.parentNode;
    var val = e.parentNode.firstChild.value;
    
    // epmtying li
    editTask.innerHTML = "";

    // creating and appending text node in "li"
    var liText = document.createTextNode(val+" ");
    editTask.appendChild(liText);

    // creating and appending edit node in "li"
    var editBtn = document.createElement("button");
    var editBtnTxt = document.createTextNode("Edit");
    editBtn.appendChild(editBtnTxt);
    editBtn.type = "button";
    editBtn.className = "btn btn-outline-dark";
    editBtn.setAttribute("onclick", "editItem(this)");
    editTask.appendChild(editBtn);

    // creating and appending text node in "li"
    var delBtn = document.createElement("button");
    var delBtnTxt = document.createTextNode("Delete");
    delBtn.appendChild(delBtnTxt);
    delBtn.type = "button";
    delBtn.className = "btn btn-outline-dark";
    delBtn.setAttribute("onclick", "delItem(this)");
    editTask.appendChild(delBtn);

    // creating and appending date in li
    var lineBreak = document.createElement("br");
    editTask.appendChild(lineBreak)

    var date = new Date();
    var para = document.createElement("p");
    var dateText = document.createTextNode("Updated on " + date);
    para.appendChild(dateText)
    editTask.appendChild(para);
}