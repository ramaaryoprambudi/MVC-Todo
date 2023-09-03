
const command = process.argv[2];
const params = process.argv.slice(3);
const { json } = require('stream/consumers');
const TodoController = require('./controller/TodoController')

switch (command) {
    case "show" :
        //  console.log("command show");
        // const fs = require('fs');
        // const data = fs.readFileSync('./data.json', 'utf8');
        // const final = JSON.parse(data);
        // final.forEach((result)=>{
        //     console.log(result);
        // })
        TodoController.show();
        break
    case "add" :
        //  console.log("command add");
        TodoController.add(params);
        break
    case "update" :
        //  console.log("command update");
        TodoController.update(params);
        break    
    case "delete" :
        //  console.log("command delete");
        TodoController.delete(params);
        break
    default:
        // console.log("unknown command !");
        TodoController.message("unknown command !");
}