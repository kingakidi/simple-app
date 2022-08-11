require("dotenv").config();
const app = require("express")();
const vhost = require("vhost");
const path = require("path");

const rootDomainRoutes = require("./routes/rootdomain.js");
const subDomainRoutes = require("./routes/subdomain.js");
app.use(vhost("locahost", rootDomainRoutes));
app
  .use(vhost(process.env.DOMAIN, rootDomainRoutes))
  .use(vhost("www." + process.env.DOMAIN, rootDomainRoutes))
  .use(vhost("localhost", rootDomainRoutes))

  .use(vhost("*." + process.env.DOMAIN, subDomainRoutes));
app.get("/", (req, res) => {
  console.log(process.env.DOMAIN);
  res.send("Welcome to home page ");
});
app.listen(4000, () => {
  console.log("Your app is running ");
});
