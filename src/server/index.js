import express from "express";

const DEFAULT_PORT = 4444;
const port = process.env.PORT || DEFAULT_PORT;
const app = express();

app.use(express.json());

app.get("./tasklist", (req, res) => {
  void (async () => {
    try {
      res.send({
        list: [
          {
            name: "Task1",
            time: "2022-03-07",
            description:
              "Task1 description Task1 description Task1 description Task1 description",
            category: "Personal",
            deadline: "2022-03-27",
          },
          {
            name: "Task2",
            time: "2022-03-07",
            description:
              "Task2 description Task2 description Task2 description Task2 description",
            category: "Personal",
            deadline: "2022-04-27",
          },
        ],
      });
    } catch (err) {
      console.log("error", err);
    }
  })();
});
