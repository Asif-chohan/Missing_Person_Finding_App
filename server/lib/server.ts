import App from "./app";
import errorhandler  from "errorhandler";

//get env PORT from server or use 8080
const PORT = process.env.PORT || 3838;


//error handler midelware
// only use in development



App.listen(PORT, () => {
  console.log("Express running on port " + PORT);
});
