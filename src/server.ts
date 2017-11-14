import * as express from "express";
import * as logger from "morgan";
import * as bodyParser from "body-parser";

// creates and configures an ExpressJS web server.
class App {

  // ref to Express instance
  public express: express.Application;

  // run configuration methods on the Express instance.
  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
  }

  // configure Express middleware.
  private middleware(): void {
    this.express.use(logger("dev"));
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
  }

  // configure API endpoints.
  private routes(): void {
    /* This is just to get up and running, and to make sure what we've got is
     * working so far. This function will change when we start to add more
     * API endpoints */
    // tslint:disable-next-line:typedef
    let router = express.Router();
    // placeholder route handler
    router.get("/", (req, res, next) => {
      res.json({
        message: "Hello World!"
      });
    });
    this.express.use("/", router);
  }

}

export default new App().express;