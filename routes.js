// Global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

// User
const USERS = "/users";
const USER_DETAIL = "/:id/";
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";

// Video
const VIDEOS = "/videos";
const VIDEO_DETAIL = "/video-detail/:id";
const EDIT_VIDEO = "/:id/edit";
const DELETE_VIDEO = "/:id/delete";

const routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  search: SEARCH,
  users: USERS,
  user_detail: USER_DETAIL,
  edit_profile: EDIT_PROFILE,
  change_password: CHANGE_PASSWORD,
  videos: VIDEOS,
  video_detail: VIDEO_DETAIL,
  edit_video: EDIT_VIDEO,
  delete_video: DELETE_VIDEO
};

export default routes;
