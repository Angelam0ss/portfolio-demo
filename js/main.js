document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.materialboxed');
    var options;
    var instances = M.Materialbox.init(elems, options);
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, options);
});

//Initializing modals
var modalOptions = {
    opacity: 0.8,
    preventScrolling: false
};
var modals = document.querySelectorAll('.modal');
var instances = M.Modal.init(modals, modalOptions);

  //Integer
let variableNumber = 2;

//String
let color = "red";

//Change anything to red background
function changeColor(elementId) {
    document.getElementById(elementId).style.backgroundColor = color;
}

//Create a new button button
function createButton() {
    let newButton = document.createElement('a');
    newButton.className = "btn";
    newButton.innerHTML = "<b>New Button!</b>";
    newButton.onclick = function() {
        createButton();
    }
    document.getElementById("hero").style.color = “#ff0000”;
}




function toggleDark() {
    document.body.classList.toggle('dark');
}