const config = require("./config.js");
const app = require("./app.js");
const port = config.PORT || 3000;

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
