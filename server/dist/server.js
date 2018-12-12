"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
//get env PORT from server or use 8080
const PORT = process.env.PORT || 8080;
//error handler midelware
// only use in development
app_1.default.listen(PORT, () => {
    console.log("Express running on port " + PORT);
});
//# sourceMappingURL=server.js.map