
function renderMemberList(){
   
const memberList =JSON.parse(window.localStorage.getItem("memberList")) || [];
const memberListEl = document.getElementById("memberList");
const memberDropEl = document.getElementById("select-member")
 memberListEl.innerHTML = "";
 memberDropEl.innerHTML = "";


for (const member of memberList) {
    const memberEl = document.createElement("div");

    const name = member;
    memberEl.innerText = member.name;
    memberListEl.appendChild(memberEl);

}
var selectMember = document.getElementById("select-member"); 
      
var options =JSON.parse(window.localStorage.getItem("memberList")) || [];

for(var i = 0; i < options.length; i++) {
    var opt = options[i];

    var el = document.createElement("option");
    el.text = opt.name;
    
    selectMember.add(el);
}

}

function renderTaskList(){
const taskList =JSON.parse(window.localStorage.getItem("taskList")) || [];
const taskListEl = document.getElementById("taskList");
const taskDropEl = document.getElementById("select-task")
taskListEl.innerHTML = "";
taskDropEl.innerHTML = "";

for (const task of taskList) {
    const taskEl = document.createElement("div");
    const {name2} = task;
    taskEl.innerHTML = name2;
    taskListEl.appendChild(taskEl);
    
}
var selectTask = document.getElementById("select-task");       
var taskOptions = JSON.parse(window.localStorage.getItem("taskList")) || [];

for(var i2 = 0; i2 < taskOptions.length; i2++) {
    var opt2 = taskOptions[i2];

    var el2 = document.createElement("option");
    el2.text = opt2.name2;
    el2.value = opt2.value;
    
    selectTask.add(el2);
}
}

function renderToDoList(){
const toDoList =JSON.parse(window.localStorage.getItem("toDoList")) || [];
const toDoListEl = document.getElementById("toDoList");
toDoListEl.innerHTML = "";

for (const toDo of toDoList) {
    const toDoEl = document.createElement("div");
    const {member, task} = toDo;
    toDoEl.innerText = member + ":  "  + task; 
    toDoListEl.appendChild(toDoEl);
 }
}

 function createNewMember(event) {
        event.preventDefault();
        const name = document.querySelector("[name='name']").value; 
        const member = {name};
        const memberList =JSON.parse(window.localStorage.getItem("memberList")) || [];
        memberList.push(member);
        window.localStorage.setItem("memberList", JSON.stringify(memberList));
        renderMemberList();
      
        event.target.reset();
    }
 



 function createNewTask(event) {
        event.preventDefault();

        const name2 = document.querySelector("[name='task']").value;
        
       const task = {name2};
      
const taskList =JSON.parse(window.localStorage.getItem("taskList")) || [];
        taskList.push(task);
        window.localStorage.setItem("taskList", JSON.stringify(taskList));
        renderTaskList();

        event.target.reset();
    }
 




    function handleSubmit(event) {
        event.preventDefault();
        var selectMember = document.getElementById("select-member"); 
        var selectTask = document.getElementById("select-task");    

        var member = selectMember.options[selectMember.selectedIndex].value;
        var task = selectTask.options[selectTask.selectedIndex].innerHTML;
       
        const toDo = {
            member, task,}
        
         const toDoList =JSON.parse(window.localStorage.getItem("toDoList")) || [];
         toDoList.push(toDo);
                
        window.localStorage.setItem("toDoList", JSON.stringify(toDoList));
         
         renderToDoList();
         

        
    }
renderMemberList();
renderTaskList();
renderToDoList();

window.addEventListener("storage", function(event){
  if (event.key === "memberList") {
    renderMemberList();
  }
});

window.addEventListener("storage", function(event){
  if (event.key === "taskList") {
    renderTaskList();
  }
});

