// import express from "express";

// const app = express();

// app.all("/", (req, res) => {
//   console.log("req", req);
//   console.log("res", res);
//   res.send("I am up!");
// });

// const PORT = "5111";
// app.listen(PORT, () => {
//   console.log(`Server is running at port ${PORT}`);
// });

import express from "express";
const app = express();

app.all("/", (req, res) => {
  console.log("req", req);
  console.log("res", res);
  res.send("i am app");
});

const PORT = "12345";

app.listen(PORT, () => {
  console.log(`Server is running at Port ${PORT}`);
});
