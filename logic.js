let localData = JSON.parse(localStorage.getItem('todos'))
let data = localData? [...localData] : [];

const createTodoItem = ({id, title, date, completed}) => {
    let titleLabel = document.createElement('label')
        titleLabel.innerHTML = title
        let dateLabel = document.createElement('label')
        dateLabel.innerHTML = date

        let inputCheckBox = document.createElement('input')
        inputCheckBox.type = 'checkbox'
        inputCheckBox.id = id
        inputCheckBox.checked = completed
        inputCheckBox.addEventListener('change', onDoneHandler)

        let deleteBtn = document.createElement('button')
        deleteBtn.id = id
        deleteBtn.className = 'deleteBtn'
        deleteBtn.innerHTML = 'delete'
        deleteBtn.addEventListener('click', onDeleteHandler)

        let todoItem = document.createElement('li')
        todoItem.className = completed ? 'done' : ''

        todoList.append(todoItem)
        todoItem.append(titleLabel)
        todoItem.append(dateLabel)
        todoItem.append(inputCheckBox)
        todoItem.append(deleteBtn)
}



const renderTodos = () => {
    todoList.innerHTML = ''
    data.map((item) => {
        createTodoItem(item)
    })
}

let lastId = localData && localData.length && localData[localData.length-1].id+1
console.log(lastId)
let counter =localData ? lastId : 0;

function addTodoHandler() {
    // let title = inputTitle.value
    if(inputTitle.value !== "") {
        data.push({
            id: counter++,
            title: inputTitle.value,
            date: inputDate.value,
            completed: false,
        });
        localStorage.setItem('todos', JSON.stringify(data))
        renderTodos();
    } else {
        alert('WRITE!')
    }
    inputTitle.value = ''
}


function onDeleteHandler(event) {
    let currentID = Number(event.target.id)
    let filteredTodo = data.filter((el)=> el.id !== currentID)
    data = filteredTodo;
    localStorage.setItem('todos', JSON.stringify(data))
    renderTodos()
    // event.target.parentElement.remove()
}

function  onDoneHandler(event) {
    let checkedId = Number(event.target.id)
    let modifiedTodo = data.map((el)=> {
        if (el.id === checkedId) {
            el.completed = !el.completed
        }
        return el
    })

    data = modifiedTodo;
    localStorage.setItem('todos', JSON.stringify(data))
    console.log(data);
    renderTodos();
    //if (event.target.checked) {
    //    event.target.parentElement.classList.add('done')
   // }else {event.target.parentElement.classList.remove('done')

   // }
}

renderTodos()
addBtn.addEventListener('click', addTodoHandler)