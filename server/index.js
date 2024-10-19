const express = require("express");
const app = express();
const cors = require("cors");
const users_data = require("../server/JSON_DATA/users.json");
const WishListData = require("../server/JSON_DATA/whishlist.json");
const WatachLaterData = require("../server/JSON_DATA/watchlater.json");
app.use(cors());
app.use(express.json());

//////////////////////////////////////////////////////////////
//////////////////////////////get part
//////////////////////////////////////////////////////////////

app.get("/users", (_req, res) => {
  try {
    res.json(users_data.users);
  } catch (error) {
    console.log("Something went wrong", error);
  }
});

app.get("/users/:Id", (req, res) => {
  try {
    const userId = +req.params.Id;
    const user = users_data.users.find((user) => user.id === userId);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: "user not found" });
    }
  } catch (error) {
    console.log("Something went wrong", error);
  }
});

///////////////////////////////////////////////////////////////////////////////////////////

app.get("/whishlist/:Id", (req, res) => {
  try {
    const UserId = +req.params.Id;
    const item = WishListData.whishlist.find((items) => items.id === UserId);
    if (item) {
      res.json(item);
    } else {
      res.json({ movies: null });
    }
  } catch (error) {
    console.log("Something went wrong", error);
  }
});

////////////////////////////////////////////////////////////////

app.get("/watchlater/:Id", (req, res) => {
  try {
    const UserId = +req.params.Id;
    const item = WatachLaterData.watchlater.find(
      (items) => items.id === UserId
    );
    if (item) {
      res.json(item);
    } else {
      res.json({ movies: null });
    }
  } catch (error) {
    console.log("Something went wrong", error);
  }
});

//////////////////////////////////////////////////////////////////////////
////////////////////////post part
//////////////////////////////////////////////////////////////////////////

app.post("/users", (req, res) => {
  try {
    const newUser = req.body;
    users_data.users.push(newUser);
    res.status(201).json({ message: "User added successfuly", user: newUser });
  } catch (error) {
    console.log("Something went wrong", error);
  }
});

//////////////////////////////////////////////////////////////////////////////////

app.post("/whishlist/:Id", (req, res) => {
  try {
    const newWhishList = req.body;
    if (WishListData.whishlist.some((item) => item.id === newWhishList.id)) {
      WishListData.whishlist.forEach((item) => {
        if (item.id === newWhishList.id) {
          item.movies.push(newWhishList.movie);
        }
      });
    } else {
      WishListData.whishlist.push({
        id: newWhishList.id,
        movies: [newWhishList.movie],
      });
    }
    res.status(201).json({
      message: "movie added successfuly to whishlist",
      movie: newWhishList,
    });
  } catch (error) {
    console.log("Something went wrong", error);
  }
});

////////////////////////////////////////////////////////////////////////////////////////

app.post("/watchlater/:Id", (req, res) => {
  try {
    const newWatchlist = req.body;
    if (
      WatachLaterData.watchlater.some((item) => item.id === newWatchlist.id)
    ) {
      WatachLaterData.watchlater.forEach((item) => {
        if (item.id === newWatchlist.id) {
          item.movies.push(newWatchlist.movie);
        }
      });
    } else {
      WatachLaterData.watchlater.push({
        id: newWatchlist.id,
        movies: [newWatchlist.movie],
      });
    }
    res.status(201).json({
      message: "movie added successfuly to whishlist",
      movies: newWatchlist,
    });
  } catch (error) {
    console.log("Something went wrong", error);
  }
});

//////////////////////////////////////////////////////////////////////////////////
/////////////////////////////Delete Part
/////////////////////////////////////////////////////////////////////////////////////////

app.delete("/whishlist/:Id", (req, res) => {
  try {
    const result = req.body;
    WishListData.whishlist.forEach((item) => {
      if (item.id === result.userId) {
        NewArray = item.movies.filter((movie) => movie.id !== result.movieId);
        item.movies = NewArray;
      }
    });
    res.status(201).json({
      message: "movie removed successfuly from whishlist",
    });
  } catch (error) {
    res.send("Something went wrong", error);
  }
});

//////////////////////////////////////////////////////////////////////////////////////////////

app.delete("/watchlater/:Id", (req, res) => {
  try {
    const result = req.body;
    WatachLaterData.watchlater.forEach((item) => {
      if (item.id === result.userId) {
        NewArray = item.movies.filter((movie) => movie.id !== result.movieId);
        item.movies = NewArray;
      }
    });
    res.status(201).json({
      message: "movie removed successfuly from watchlater",
    });
  } catch (error) {
    res.send("Something went wrong", error);
  }
});

////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////

app.listen(4040, () => {
  console.log("server listening on port  4040");
});
