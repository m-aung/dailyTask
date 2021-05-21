// DOM minipulation

const addTask = (task, priority) => {
    // post new task


}


document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#buttons').addEventListener('submit', (e) => {
    e.preventDefault();
    alert(e.target.value)
  })
})