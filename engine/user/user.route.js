import { Router } from "express";
import { edit_profile, get_bookmarks, get_disliked_news, get_liked_news, get_profile } from "./user.controller.js";


const user_route = Router();

user_route.get('/profile', get_profile);
user_route.patch('/profile/edit', edit_profile);
user_route.get('/bookmarks', get_bookmarks);
user_route.get('/liked_news', get_liked_news);
user_route.get('/disliked_news', get_disliked_news);

export { user_route }