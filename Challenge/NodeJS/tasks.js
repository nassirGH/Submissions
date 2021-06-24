

const fs = require('fs');

let database;
let listOfTasks = [];



/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
    process.stdin.resume();
    process.stdin.setEncoding('utf8');
    process.stdin.on('data', onDataReceived);
    if(process.argv[2] !== undefined){
        database = process.argv[2];
        writeToFile();
    }else{
        database = './database.json';
    }
    console.log(`Welcome to ${name}'s application!`)
    console.log("--------------------")
  }
  
   
  //const listOfTasks = [{checked:false,task:'football'},{checked:false,task:'basketball'}];

  function writeToFile(){
    fs.writeFile('./database.json',JSON.stringify(listOfTasks),(error)=>{
        if(error) 
        throw error;
    });
}


function readFromDatabase(){
    try{
        let contents = fs.readFileSync(database, 'utf8');
        listOfTasks = JSON.parse(contents);
    }catch(error){
        console.log(error);
    }
}




let contents = fs.readFileSync('./database.json', 'utf8');
let listOfTaskswehave = JSON.parse(contents);


  /**
   * Decides what to do depending on the data that was received
   * This function receives the input sent by the user.
   * 
   * For example, if the user entered 
   * ```
   * node tasks.js batata
   * ```
   * 
   * The text received would be "batata"
   * This function  then directs to other functions
   * 
   * @param  {string} text data typed by the user
   * @returns {void}
   */
  function onDataReceived(text) {
    text=text.trim();
    const textArray = text.split(" ");
    if (text === 'quit' || text === 'exit') {
      quit();
    }
    else if(textArray[0] === 'hello'){
      hello(textArray);
    }else if(text === 'help'){
        help();
    }else if(text === 'list'){
        readFromDatabase();
        list();
    }else if(textArray[0] === 'add'){
                if (textArray[1] === undefined) 
                    console.error("you need to add a task please !");
          else 
          add(textArray);
          writeToFile();
    }
    else if( textArray[0] === 'remove'){
        remove(textArray);
        writeToFile();
      }
      else if(textArray[0] === 'edit'){
        if (textArray[1] === undefined){
            console.error("you hadn't enter a text to edit");
            return;
        }
        edit(textArray);
        writeToFile();
      }else if(textArray[0] === 'check'){
        if(textArray[1] === undefined){
          console.error("you didn't enter a number");
        }else{
          check(textArray);
          writeToFile();
        }
        }else if(textArray[0] === 'uncheck'){
            if(textArray[1] === undefined){
                console.error("you didn't enter a number");
        }else{
          uncheck(textArray);
          writeToFile();
        }
    }
        else{
             unknownCommand(text);
            
    }
  }
  
  
  /**
   * prints "unknown command"
   * This function is supposed to run when all other commands have failed
   *
   * @param  {string} c the text received
   * @returns {void}
   */
  function unknownCommand(c){
    console.log('unknown command: "'+c.trim()+'"')
  }
  
  
  /**
   * Says hello
   *
   * @returns {void}
   */
  function hello(text){
    if(text.length === 2)
    console.log('hello ' + text[1]+"!");
    else {
        console.log("hello!");
    }
}

/**
 *  lists the available commands and what they do
 * 
 * @returns {void}
 */
function help(){
    console.log('available commands: \n hello @argument (says hello @argument! or hello!) \n quit or exit (exits the app) \n add @argument(adds @argument to the list) \n remove (removes last element of list or give number to remove element) \n list (lists the todos in the list) \n check@argument: it checks the task in todolist \n uncheck: it uncheck the task in the to dolist depending on the number of the task in the list ,incase doesnt exit error');
  }

  function list(){
    for (let i = 0 ; i<listOfTasks.length ; i++){
      if(listOfTasks[i].checked){
          console.log(`${i+1}: [✓] ${listOfTasks[i].task}`);
      }else{
          console.log(`${i+1}: [ ] ${listOfTasks[i].task}`);
      }
    }
  }
  
  

  
  function add(textArray){
    textArray.shift();
    listOfTasks.push({checked:false,task:textArray.join(" ")});
  }

  function remove(text){
    if (text[1] === undefined){
      listOfTasks.pop();
    }else{
      let listItemNumber = parseInt(text[1]);
      if(listOfTasks[listItemNumber-1] === undefined){
        console.error("there is no task with this number");
      }else{
        listOfTasks.splice(listItemNumber-1,1);
      }
    }
  }


  function check(text){
    if(listOfTasks[text[1]-1] === undefined){
        console.error("their is no task with this number");
    }else{
        listOfTasks[text[1]-1].checked = true;
    }
}

function uncheck(text){
    if(listOfTasks[text[1]-1] === undefined){
        console.error("their is no task with this number");
    }else{
        listOfTasks[text[1]-1].checked = false;
    }
}

  function edit(textArray){
    let number = parseInt(textArray[1]);
    if(Number.isInteger(number)){
        if(listOfTasks[number-1] === undefined){
            console.error("there is no task with this number");
        }else{
            textArray.shift();
            textArray.shift();
            listOfTasks[number-1] = {checked:false,task:textArray.join(" ")};
        }
    }else{
        listOfTasks.pop();
        add(textArray);
    }
}



  /**
   * Exits the application
   *
   * @returns {void}
   */
  function quit(){
    console.log('Quitting now, goodbye!')
    process.exit();
  }
  
  // The following line starts the application
  startApp("Nassir Ghraizi")
  