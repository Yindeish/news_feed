import { User } from './user.model.js'
import { status_msg } from "../utils/status_code_msg.js";
import { verify_token } from "../utils/verify_token.js";


const authorize_user = async (req, res, next) => {

    verify_token(req, res, async user_id => {
        const user = await User.findOne({ _id: user_id })

        if (user) {
            req.user = user;
            next();
        }
        else status_msg({ code: 401, msg: "You're not signed in!", res })
    })
}

export { authorize_user }