const express = require("express");

const app = express();

// Test

// app.get("/", (req, res) => res.send(`<h1 style="color:red;">Hello World</h1>`));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/users", require("./routes/api/users"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on the port ${PORT}`);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
