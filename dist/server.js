"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var logger = require("morgan");
var bodyParser = require("body-parser");
// creates and configures an ExpressJS web server.
var App = /** @class */ (function () {
    // run configuration methods on the Express instance.
    function App() {
        this.express = express();
        this.middleware();
        this.routes();
    }
    // configure Express middleware.
    App.prototype.middleware = function () {
        this.express.use(logger("dev"));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    };
    // configure API endpoints.
    App.prototype.routes = function () {
        /* This is just to get up and running, and to make sure what we've got is
         * working so far. This function will change when we start to add more
         * API endpoints */
        // tslint:disable-next-line:typedef
        var router = express.Router();
        // placeholder route handler
        router.get("/", function (req, res, next) {
            res.json({
                message: "Hello World!"
            });
        });
        this.express.use("/", router);
    };
    return App;
}());
exports.default = new App().express;
//# sourceMappingURL=server.js.map