import express from "express";
import routes from "../routes";
import { home, search } from "../controllers/videoController";
import { join, login, logout } from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
globalRouter.get(routes.join, join);
globalRouter.get(routes.login, login);
globalRouter.get(routes.logout, logout);

export default globalRouter;

// Controller 생성후
// globalRouter.get(routes.home, (req, res) => {
//   res.send("index");
// });
// globalRouter.get(routes.search, (req, res) => {
//   res.send("search");
// });
// globalRouter.get(routes.join, (req, res) => {
//   res.send("join");
// });
// globalRouter.get(routes.login, (req, res) => {
//   res.send("login");
// });
// globalRouter.get(routes.logout, (req, res) => {
//   res.send("logout");
// });
// 이부분을 컨트롤러의 함수객체로 변경
