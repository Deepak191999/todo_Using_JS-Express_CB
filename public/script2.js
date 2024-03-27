const btn= document.querySelector('#add')
const newtask=  document.querySelector('input')


function addTask(data)
{
    let task= document.querySelector('#taskList')
    
}

btn.addEventListener('click',async (e)=>{
    e.preventDefault()
    try {
        let taskName= newtask.value;
        const {data}= await axios.post('/addtask', {name: taskName})

        let li = document.createElement("li");
            li.innerHTML = `<div class="taskText">${newtask.value}
              </div>
               <div>
               <button class='up'>⬆️</button> 
               <button class='down'>⬇️</button>
               <button class='delete'>❌</button>
              </div>`;
            taskList.appendChild(li);
            newtask.value = "";
        console.log(data)
    } catch (error) {
        alert(`unable to get data ${error.message}`)
    }
})