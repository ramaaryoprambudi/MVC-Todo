const Todo =require('../model/Todo.js');
const TodoView=require('../view/TodoView');

class TodoController{
    static add(todo){
    // console.log("controller add");
    Todo.add(todo);
    }
    static show(){
    // console.log("Controller Show");
    let todos = Todo.show();
    TodoView.show(todos);
    }
    static update(todo){
        Todo.update(todo);
    }
    static delete(todo){
        Todo.delete(todo);
    }
    static message(msg){
        TodoView.message(msg);
        }
}

module.exports = TodoController;