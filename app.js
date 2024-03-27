// const path = require('path');
// const express = require('express');
// const app = express();
// const PORT = 3000;

// app.use(express.urlencoded({extended:true}));
// app.use(express.json());
// app.use(express.static(path.join(__dirname,'public')));

// // let todo = ["Dancing","Singing","Cricket","Chess"];
// let todo = [];
// // '/gettasks', GET
// app.get('/gettasks',(req,res)=>{
//     res.send(todo);
// })

// // '/addtask', POST, {name}
// app.post('/addtask',(req,res)=>{
//     const {name} = req.body;
//     todo.push(name);
//     res.send(todo);
// })
// // '/deletetask', GET, {name}
// app.get('/deletetask',(req,res)=>{
//     const {name} = req.query;
//     todo = todo.filter(d=>{
//         if(name == d) return false;
//         return true;
//     });
//     res.send(todo);
// })
// // '/increase', GET, {name}
// app.get('/increase',(req,res)=>{
//     const {name} = req.query;
//     let indx = todo.indexOf(name);
//     if(indx <= 0 || indx == todo.length) return res.send(todo);
//     let temp = todo[indx];
//     todo[indx] = todo[indx-1];
//     todo[indx-1] = temp;
//     res.send(todo);
// })
// // '/decrease', GET, {name}
// app.get('/decrease',(req,res)=>{
//     const {name} = req.query;
//     let indx = todo.indexOf(name);
//     if(indx == -1 || indx >= todo.length-1) return res.send(todo);
//     let temp = todo[indx];
//     todo[indx] = todo[indx+1];
//     todo[indx+1] = temp;
//     res.send(todo);
// })

// app.listen(PORT,()=>{
//     console.log(`http://localhost:`+PORT);
// });

//---------------------------------Practice------------------------------------------------------

const path = require("path");
const express = require("express");
const app = express();
const port = 4444;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

// let todo = ["node", "js", "html", "css"];
let todo=[]

app.listen(port, () => {
  console.log(`port is ${port}`);
});

app.get("/gettask", (req, res) => {
  res.send(todo);
});

app.post("/addtask", (req, res) => {
  const { name } = req.body;
  todo.push(name);
  res.send(todo);
});

app.get("/deletetask", (req, res) => {
    const {name}= req.query
    todo= todo.filter((d)=>{
        if(name == d) return false;
        return true;
    })
    res.send(todo)
});


app.get('/increase',(req,res)=>{
    const {name}= req.query
    let indx= todo.indexOf(name)
    if(indx <=0 ) {return res.send(todo)}

    let temp= todo[indx]
    todo[indx]=todo[indx-1];
    todo[indx-1]=temp;
    res.send(todo)
})

app.get('/decrease',(req,res)=>{
    const {name}= req.query 
    let indx= todo.indexOf(name);
    if(indx >= todo.length-1) return res.send(todo)

    let temp= todo[indx]
    todo[indx]=todo[indx+1];
    todo[indx+1]=temp;
    res.send(todo)
})