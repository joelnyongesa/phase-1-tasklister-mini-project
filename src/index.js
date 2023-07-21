document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form")
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    addtask();
    form.reset()
  })
});

// Add a task
function addtask(todo){
  let newTask = document.querySelector("#new-task-description").value
  let li = document.createElement('li')
  li.append(newTask);
  let btn = document.createElement('button');
  btn.textContent = ' x '
  btn.addEventListener('click', handleDelete)
  li.appendChild(btn)
  document.querySelector('#tasks').appendChild(li)
}


// Handling delete
function handleDelete(e){
  console.log(e.target.parentNode.remove())
}