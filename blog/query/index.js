const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {};

// Service to get all the data in the system (posts and comments)
app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/events", (req, res) => {
  // Event Properties
  const { type, data } = req.body;

  if (type === "PostCreated") {
    const { id, title } = data;

    posts[id] = { id, title, comments: [] };
  }

  if (type === "CommentCreated") {
    const { id, content, postId, status } = data;

    const post = posts[postId];
    post.comments.push({ id, content, status });
  }

  console.log(posts);
  res.send({});
});

app.listen(4002, () => {
  console.log("Listening on port 4002");
});
