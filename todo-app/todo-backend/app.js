const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const redis = require("./redis/index");

const indexRouter = require("./routes/index");
const todosRouter = require("./routes/todos");
const morgan = require("morgan");

const app = express();

app.use(cors());

app.use(logger("dev"));
app.use(express.json());
app.use(
  morgan("dev", {
    skip: (req, res) => false,
    stream: {
      write: (message) => {
        // Add colors using ANSI escape codes
        // Example: status code color
        const statusColor = (status) => {
          if (status >= 500) return "\x1b[31m"; // red
          if (status >= 400) return "\x1b[33m"; // yellow
          if (status >= 300) return "\x1b[36m"; // cyan
          if (status >= 200) return "\x1b[32m"; // green
          return "\x1b[0m"; // reset
        };
        // Extract status code from message
        const match = message.match(/"\s(\d{3})\s/);
        const status = match ? parseInt(match[1], 10) : 0;
        const color = statusColor(status);
        process.stdout.write(color + message + "\x1b[0m");
      },
    },
  })
);

app.use("/", indexRouter);
app.use("/todos", todosRouter);

module.exports = app;
