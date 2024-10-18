const express = require("express");
const app = express();
const cors = require("cors");
const users_data = require("../server/JSON_DATA/users.json");
const whishlist_data = require("../server/JSON_DATA/whishlist.json");
const watchlater_data = require("../server/JSON_DATA/watchlater.json");
app.use(cors());
app.use(express.json());
//////////////////////////////////////////////////////////////
//////////////////////////////get part
//////////////////////////////////////////////////////////////
app.get("/users", (_req, res) => {
  res.json(users_data.users);
});
///////////////////////////////////////////////////////////////////////////////////////////
app.get("/whishlist/:Id", (req, res) => {
  const UserId = +req.params.Id;
  if (whishlist_data.whishlist.length === 0) {
    res.json({ movies: null });
  } else {
    const item = whishlist_data.whishlist.find((items) => items.id === UserId);
    if (item) {
      res.json(item);
    } else {
      res.status(404).json({ message: "user not found" });
    }
  }
});
////////////////////////////////////////////////////////////////
app.get("/watchlater/:Id", (req, res) => {
  const UserId = +req.params.Id;
  if (watchlater_data.watchlater.length === 0) {
    res.json({ movies: null });
  } else {
    const item = watchlater_data.watchlater.find(
      (items) => items.id === UserId
    );
    if (item) {
      res.json(item);
    } else {
      res.status(404).json({ message: "user not found" });
    }
  }
});
////////////////////////////////////////////////////////////////
app.get("/users/:userid", (req, res) => {
  const userId = +req.params.userid;
  const user = users_data.users.find((user) => user.id === userId);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "user not found" });
  }
});
//////////////////////////////////////////////////////////////////////////
////////////////////////post part
//////////////////////////////////////////////////////////////////////////
app.post("/create-user", (req, res) => {
  const newUser = req.body;
  users_data.users.push(newUser);
  res.status(201).json({ message: "User added successfuly", user: newUser });
});
//////////////////////////////////////////////////////////////////////////////////
app.post("/create-whishlist", (req, res) => {
  const newWhishList = req.body;
  if (whishlist_data.whishlist.some((item) => item.id === newWhishList.id)) {
    whishlist_data.whishlist.forEach((item) => {
      if (item.id === newWhishList.id) {
        item.movies.push(newWhishList.movies);
        res.status(201).json({
          message: "movie added successfuly to whishlist",
          movie: newWhishList,
        });
      }
    });
  } else {
    whishlist_data.whishlist.push({
      id: newWhishList.id,
      movies: [newWhishList.movies],
    });
    res.status(201).json({
      message: "movie added successfuly to whishlist",
      movie: newWhishList,
    });
  }
});
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
app.listen(4040, () => {
  console.log("server listening on port  4040");
});
