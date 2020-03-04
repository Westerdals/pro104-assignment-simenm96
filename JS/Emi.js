var memberList = JSON.parse(localStorage.getItem("memberList")) || [];
var taskList = JSON.parse(localStorage.getItem("taskList")) || [];
var assignedList = JSON.parse(window.localStorage.getItem("assignedList")) || [];

//velger HTML element
var dropDownMenu = document.querySelector("[Name='dropDown-menu']");
var defaultValue = document.querySelector("select option").value
var memberOutput = document.getElementById("member-output");
var taskOutput = document.getElementById("task-output");

for (var i = 0; i < memberList.length; i++){
    var optionTag = document.createElement("option");
    optionTag.innerHTML = memberList[i];
    dropDownMenu.appendChild(optionTag);
    var newElement = document.createElement("div");
    newElement.innerHTML= `<li>${memberList[i]}</li>`;
    memberOutput.appendChild(newElement);
}

for (var i = 0; i < assignedList.length; i++){
    var newElement = document.createElement("div");
    newElement.innerHTML = `
    <li>${assignedList[i].task}</li>
    <li>${assignedList[i].member}</li>
`;
    taskOutput.appendChild(newElement);
}