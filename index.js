
/*
var maVariable = 5 // Number
var maVariable = 'djsfdsf'; // String
var maVariable = {}; // Object
var maVariable = []; // Array
*/

var todos = [];

//todos.push({name: 'first todo'});
//todos.push({name: 'seconde todo'});

console.log(todos);



document.addEventListener("DOMContentLoaded", contentLoaded);

function contentLoaded() {
    console.log('Charge');

    document.title = 'Todolist';


    

    function addTodo() {
        var textValue = document.querySelector('.js-todo-text').value;

        todos.push({name: textValue});

        displayTodos();
    }
    document.querySelector('.js-add').addEventListener('click', addTodo);




    var todoList = document.querySelector('.js-todos');
    function displayTodos() {


            todoList.innerHTML = ""


            todos.forEach(function(item) {
            var div = document.createElement('div');
            div.innerHTML = item.name;
            var input = document.createElement("input");
            input.type = "checkbox"
            div.append(input);
            

            
            todoList.append(div);
       });
    }



    /*
    for (var index = 0; index <= 1; index++) {
        console.log('index', index);
    
        document.querySelector('.js-checkbox-' + index).addEventListener('change', checkboxChange(index));
    }

    function checkboxChange(index) {
        console.log(index);
        if(this.checked) {
            document.querySelector(".js-bg-" + index).style.backgroundColor =  "green";
        } else {
            document.querySelector(".js-bg-" + index).style.backgroundColor =  "";
        }
    }*/
}

//Javascript Vanilla
