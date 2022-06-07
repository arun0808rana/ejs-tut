// tut-ref: https://github.com/iamshaunjp/node-crash-course/tree/lesson-7
const express = require("express");
const app = express();
const port = 5000;

// registering  view engine
app.set("view engine", "ejs");

// pointing towards the view engine directory, by default it is set to 'views'
// app.set('views','my_custom_directory');

app.get("/", (req, res) => {
  const blogs = [
    {
      title: "Yoshi finds eggs",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "Mario finds stars",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "How to defeat bowser",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
  ];

  // renders index.ejs file on the browser
  //   sending a var call title to index.ejs
  res.render("index", { title: "Home", blogs });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/blogs/create", (req, res) => {
  // again create is the name of create.ejs file
  res.render("create", { title: "Create" });
});

app.use((req, res) => {
  // the 404 inside string is the name of 404.ejs
  //   notice render fn is also available by status() function's return value
  res.status(404).render("404");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
