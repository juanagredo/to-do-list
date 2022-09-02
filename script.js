  
  const tasks = [
    { text: "Ir a la U", done: false },
    { text: "museop", done: false },
    { text: "hacer las lecturas", done: false },
    { text: "hacer la compra", done: false },
    { text: "si", done: false },
    { text: "llorar en casa para no hacerlo en la u", done: false }
  ];
 
    
  const allTasksHtml = document.getElementById("all");

  const pendingHtml = document.getElementById("pending");

  const completedHtml = document.getElementById("completed");
  

  function createTasks() {
    allTasksHtml.innerHTML = "";
    pendingHtml.innerHTML = "";
    completedHtml.innerHTML = "";

  
    tasks.forEach((task) => {
      const elem = document.createElement("li");
      elem.textContent = task.text;
      elem.className = task.done ? "checked" : "unchecked";
      elem.addEventListener("click", () => toggleCompletedTask(task));
  

      const cloneElem = elem.cloneNode(true);
      cloneElem.addEventListener("click", () => toggleCompletedTask(task));
      

      allTasksHtml.append(elem);
      
      if (task.done) {
        completedHtml.append(cloneElem);
      } else {
        pendingHtml.append(cloneElem);
      }
    });
  }
  
  createTasks();

   function toggleCompletedTask(task) {
      task.done = !task.done;
      createTasks();
  }