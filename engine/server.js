import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from 'dotenv';
import { auth_route } from "./auth/auth.route.js";
import { connectToDB } from "./mongoDB_config/db.config.js";
import { authorize_user } from './user/user.middleware.js';
import { user_route } from './user/user.route.js';

dotenv.config();

const app = express();

const CLIENT_URL = process.env.CLIENT_URL;
const DEPLOYED_CLIENT_URL = process.env.DEPLOYED_CLIENT_URL;
const PORT = 3001;
const BASE_URL = "/api";
const AUTH_URL = "auth";
const USER_URL = "user";

app.use(express.json());
app.use(cors({
    origin: CLIENT_URL, DEPLOYED_CLIENT_URL,
    credentials: true,
}));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// Endpoints
app.use(`${BASE_URL}/${AUTH_URL}`, auth_route)

app.use(`${BASE_URL}/${USER_URL}`, authorize_user, user_route);


app.get('/', async (req, res) => {
    res.json({ msg: 'server is ready' })
})

// Endpoints
app.listen(PORT, async () => {
    connectToDB();
    console.log({ BASE_URL, CLIENT_URL });
});