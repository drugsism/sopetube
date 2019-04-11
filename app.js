import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

import routes from "./routes";

import { results } from "./functional";

const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

// app.use("경로", express.router객체)
// app.use로 routes분기
const testRouter = express.Router();
app.use(
  "/test",
  testRouter.get("/", (req, res) =>
    res.send("app.use called express router Object.")
  )
);

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

//functional js test
app.get("/functional", (req, res) => {
  res.send(results);
});

export default app;

/*
// route 설명
// MVC 챕터에서 삭제 ---------------
const handleHome = (req, res) => {
  res.send("Home");
};

const handleProfile = (req, res) => {
  res.send("You are on my profile");
};

const betweenMiddleware = (req, res, next) => {
  console.log("Middleware");
  next();
};


app.use(betweenMiddleware);

app.get("/", handleHome);

app.get("/profile", handleProfile);


----------------------------------

*/
