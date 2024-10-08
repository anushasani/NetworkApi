import express from "express";
import bodyParser from "body-parser";

const app = express();

app.all("/", (req, res) => {
  console.log("req", req);
  console.log("res", res);
  res.send("I am up!");
});

app.use(bodyParser.json());
const toDo = [
  {
    id: "1",
    task: "Task1",
    completed: false,
  },
  {
    id: "2",
    task: "Task2",
    completed: true,
  },
];

//Read
app.get("/toDo", (req, res) => {
  res.json(toDo);
});

//Create
app.post("/toDo", (req, res) => {
  const newToDo = req.body;
  toDo.push(newToDo);
  res.json({
    message: "new  Todo is Added",
  });
});
//Update
app.put("/toDo/:id", (req, res) => {
  const newToDobody = req.body;

  const toDoIndex = toDo.findIndex((td) => td.id === req.params.id);

  if (toDoIndex !== -1) {
    toDo[toDoIndex] = {
      id: req.params.id,
      ...newToDobody,
    };
  }

  res.json({
    message: "ToDO Updated Successfully",
  });
});

app.delete("/toDo/:id", (req, res) => {
  const toDoParamId = req.params.id;
  const toDoIndex = toDo.findIndex((td) => td.id === toDoParamId);

  if (toDoIndex !== -1) {
    toDo.splice(toDoIndex, 1);
  }

  res.json({
    message: "ToDO Deleted Successfully",
  });
});

const PORT = "5111";
app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
