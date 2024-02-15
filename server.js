const express = require("express");
const app = express();
const PORT = process.env.PORT || 3002;

const exampleItems = [
  {
    id: 1,
    name: "Item 1",
    urlVideo: "project1",
    posterImg: "project1thumb",
  },
  {
    id: 2,
    name: "Item 2",
    urlVideo: "project2",
    posterImg: "project2thumb",
  },
  {
    id: 3,
    name: "Item 3",
    urlVideo: "project3",
    posterImg: "project3thumb",
  },
  {
    id: 4,
    name: "Item 1",
    urlVideo: "project1",
    posterImg: "project1thumb",
  },
  {
    id: 5,
    name: "Item 2",
    urlVideo: "project2",
    posterImg: "project2thumb",
  },
  {
    id: 6,
    name: "Item 3",
    urlVideo: "project3",
    posterImg: "project3thumb",
  },
];

app.get("/api/projects", (req, res) => {
  res.json(exampleItems);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
