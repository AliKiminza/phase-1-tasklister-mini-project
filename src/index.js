document.addEventListener("DOMContentLoaded", () => {
  const newButton= document.querySelector('.button')
  newButton.addEventListener('click',(e) => {e.preventDefault();})

  
  function task(){
    const newInput = document.querySelector('#new-task-description')
    const textInput = newInput.value
    const ul = document.querySelector('ul')
    const li = document.createElement('li')
    ul.append(li)
    li.innerText= textInput
    console.log(textInput)
  }
  newButton.addEventListener('click',task);
});
