 // creating mainContainer

 let mainContainer = document.createElement('main');
 mainContainer.className = 'mainContainer';
 document.body.prepend(mainContainer);
 
 // creating project title
 
 let projectTitle = document.createElement('h1');
 projectTitle.className = 'projectTitle';
 projectTitle.innerHTML = "APOSTLE";
 mainContainer.append(projectTitle);
 
 // creating mainBlock for the future todo
 
 let mainBlock = document.createElement('div');
 mainBlock.className = 'mainBlock';
 mainContainer.append(mainBlock);
 
 // creating container for the inputs and button
 
 let firstDiv = document.createElement('div');
 firstDiv.className = 'firstDiv';
 mainBlock.append(firstDiv);
 
 //ffgs   
 
 let todoList = document.createElement('ul');
 todoList.className = 'todoList';
 mainBlock.append(todoList);
 
 // creating input for the title
 
 let inputTitle = document.createElement('input');
 inputTitle.className = 'inputTitle';
 inputTitle.type = 'text';
 inputTitle.setAttribute('placeholder', 'Will do .....');
 firstDiv.append(inputTitle);
 
 // creating input for the date
 
 let inputDate = document.createElement('input');
 inputDate.className = 'inputDate';
 inputDate.type = 'date';
 firstDiv.append(inputDate);
 
 // creating add button
 let addBtn = document.createElement('button');
 addBtn.className = 'addBtn';
 addBtn.innerHTML = "GOAL";
 firstDiv.append(addBtn);