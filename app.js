const app = require("express")();

app.get("/", (req, res) => {
  res.send("Welcome to home page ");
});
app.listen(4000, () => {
  console.log("Your app is running ");
});
