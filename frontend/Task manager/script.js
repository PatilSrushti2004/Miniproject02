// Simulating fetching user data from database
const userData = {
    username: "JohnDoe",
    email: "john.doe@example.com"
  };
  
  document.getElementById("username").innerText = userData.username;
  document.getElementById("email").innerText = userData.email;
  
  // Add Task Logic
  function addTask(category) {
    const task = prompt("Enter your task:");
    if (task) {
      const list = document.getElementById(`${category}-tasks`);
      const listItem = document.createElement("li");
      listItem.className = "list-group-item";
  
      // Task text
      const taskText = document.createElement("span");
      taskText.innerText = task;
  
      // Task buttons (edit, delete)
      const buttonsDiv = document.createElement("div");
      buttonsDiv.className = "task-buttons";
  
      // Edit Button
      const editBtn = document.createElement("i");
      editBtn.className = "bi bi-pencil-square";
      editBtn.onclick = () => {
        const newTask = prompt("Edit your task:", taskText.innerText);
        if (newTask) {
          taskText.innerText = newTask;
        }
      };
  
      // Delete Button
      const deleteBtn = document.createElement("i");
      deleteBtn.className = "bi bi-trash";
      deleteBtn.onclick = () => {
        listItem.remove();
      };
  
      // Append buttons
      buttonsDiv.appendChild(editBtn);
      buttonsDiv.appendChild(deleteBtn);
  
      // Append to list item
      listItem.appendChild(taskText);
      listItem.appendChild(buttonsDiv);
  
      // Append to list
      list.appendChild(listItem);
    }
  }
  