import jwt from "jsonwebtoken";
import { status_msg } from "./status_code_msg.js";

const verify_token = (req, res, fnToRun) => {
    const token = req?.cookies?.token;

    if (!token || token === '') {
        status_msg({ msg: 'Unauthorized. Signin required!', code: 401 });
    }

    jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
        if (err) {
            status_msg({ msg: 'Error in getting token!', code: 500, res })
        } else {
            const user_id = decoded.user_id;
            if (user_id) {
                fnToRun(user_id);
            }
            else status_msg({ msg: 'Signin required!', code: 401, res })
        }
    });
}

export { verify_token }