// const btn = document.querySelector('.btn');
// const newtask = document.querySelector('.newtask');
// const taskList = document.querySelector('.tasklist');

// function addToTaskList(data) {
//     console.log(data)
//     taskList.innerHTML = '';
//     data.forEach(d => {
//         let li = document.createElement('li');
//         li.innerHTML = `
//         <span>${d}</span>
//         <div class="btnGroup">
//             <button class="upBtn">↑</button>
//             <button class="downBtn">↓</button>
//             <button class="deleteBtn">❌</button>
//         </div>
//         `
//         li.classList.add('item');
//         taskList.appendChild(li);
//     })
// }

// btn.addEventListener('click', async (ev) => {
//     ev.preventDefault();
//     try {
//         let taskName = newtask.value;
//         const { data } = await axios.post('/addtask', {
//             name: taskName
//         });
//         addToTaskList(data);
//         newtask.value = '';
//         /*
//         <span>Cricket</span>
//         <div class="btnGroup">
//             <button class="upBtn">↑</button>
//             <button class="downBtn">↓</button>
//             <button class="deleteBtn">❌</button>
//         </div>
//         */

//     } catch (err) {
//         alert(`Unable to add current task, ${err.message}`)
//     }
// })

// taskList.addEventListener('click',async (ev)=>{
//     let item = ev.target;
//     if(item.classList.contains('upBtn')){
//         let taskName = item.parentElement.previousElementSibling.innerText;
//         console.log(taskName);
//         let {data} = await axios.get(`/increase?name=${taskName}`);
//         addToTaskList(data);
//     }
//     else if(item.classList.contains('downBtn')){
//         let taskName = item.parentElement.previousElementSibling.innerText;
//         console.log(taskName);
//         let {data} = await axios.get(`/decrease?name=${taskName}`);
//         addToTaskList(data);
//     }
//     else if(item.classList.contains('deleteBtn')){
//         let taskName = item.parentElement.previousElementSibling.innerText;
//         console.log(taskName);
//         let {data} = await axios.get(`/deletetask?name=${taskName}`);
//         addToTaskList(data);
//     }
// })

// async function bootTodo(){
//     try{
//         let {data} = await axios.get('/gettasks');
//         addToTaskList(data);
//     }catch(err){
//         alert(`Unable to add current task, ${err.message}`)
//     }
// }

// bootTodo();

// <!-- -------------------------------------Practice------------------------------------------------ -->

const btn = document.querySelector(".Submitbtn");
const tasklist = document.querySelector(".tasklist");
const newtask = document.querySelector(".newtask");

function addToTaskList(data) {
  console.log(data);
  tasklist.innerHTML = "";
  data.forEach((element) => {
    let li = document.createElement("li");
    li.innerHTML = ` <span>${element}</span>
        <div>
          <button type="button" class="inc btn btn-secondary">Up</button>
          <button type="button" class="dec btn btn-secondary">Down </button>
          <button type="button" class="del btn btn-secondary">Delete </button>
        </div>`;
    li.classList.add("item");
    tasklist.appendChild(li);
  });
}

btn.addEventListener("click", async (e) => {
  e.preventDefault();
  try {
    let task = newtask.value;
    const { data } = await axios.post("/addtask", {
      name: task,
    });
    addToTaskList(data);
    newtask.value = "";
  } catch (error) {
    alert(`Unable to add curr task ${error.message}`);
  }
});

tasklist.addEventListener("click", async (e) => {
  let item = e.target;
  if (item.classList.contains("inc")) {
    let taskname = item.parentElement.previousElementSibling.innerText;
    console.log(taskname);
    let { data } = await axios.get(`/increase?name=${taskname}`);
    addToTaskList(data);
  } else if (item.classList.contains("dec")) {
    let taskname = item.parentElement.previousElementSibling.innerText;
    console.log(taskname);
    let { data } = await axios.get(`/decrease?name=${taskname}`);
    addToTaskList(data);
  } else if (item.classList.contains("del")) {
    let taskname = item.parentElement.previousElementSibling.innerText;
    console.log(taskname);
    let { data } = await axios.get(`/deletetask?name=${taskname}`);
    addToTaskList(data);
  }
});

async function bootTodo() {
  try {
    let { data } = await axios.get("/gettask");
    addToTaskList(data);
  } catch (err) {
    alert(`Unable to add current task, ${err.message}`);
  }
}

newtask.addEventListener("keypress", async (e) => {
  if (e.key === "Enter") {
    e.preventDefault();

    try {
      let task = newtask.value;
      const { data } = await axios.post("/addtask", {
        name: task,
      });

      addToTaskList(data);
      newtask.value = "";
    } catch (error) {
      alert(`Unable to add curr task ${error.message}`);
    }
  }
});





bootTodo();
