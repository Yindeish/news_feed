import jwt from "jsonwebtoken";
import { send_mail } from "../utils/mail.js";
import { status_msg, server_err } from '../utils/status_code_msg.js'
import { httpOnly, maxAge, path, secure, sameSite } from '../utils/cookies_constants.js';
import { User } from '../user/user.model.js';

const signup = async (req, res) => {
    const { email, password, full_name } = req.body;

    if (!(email || password || full_name)) status_msg({ code: 400, msg: 'Fill in all credentials!', res })

    try {
        const account_exist = await User.findOne({ email })

        const password_taken = await User.findOne({ password })

        if (account_exist) {
            status_msg({ code: 400, msg: "This account already exists. Pick another gmail.", res })
        }

        if (password_taken) {
            status_msg({ code: 400, msg: "Password is taken. Take another one.", res })
        }

        else {

            const new_admin = new User({
                email,
                full_name,
                password,
                avatar: '',
                user_name: '',
                favourite_books: []
            });

            const saved_admin = await new_admin.save();

            if (saved_admin) {
                send_mail({
                    mail_options: {
                        to: account_exist?.email,
                        subject: 'Account Registration',
                        text: `Dear ${account_exist?.full_name},\n\nYour account has been successfully created. \n\nRegards,\nPoller Team`
                    }
                })

                status_msg({ code: 201, msg: 'Your account was created', res })
            }
            else status_msg({ code: 400, msg: 'Error in creating your account! Check internet connection.', res })
        }

    } catch (error) {
        server_err({ error, res })
    }
}

const signin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const admin = await User.findOne({ email })

        if (!admin) status_msg({ msg: 'Account not found. Enter the right email', code: 404, res });

        const password_is_correct = password == admin?.password;

        if (!password_is_correct) status_msg({ msg: 'Password is not correct!', code: 401, res });

        else {
            const token = jwt.sign({ user_id: admin.id }, process.env.JWT_SECRET, { expiresIn: '30d' });

            res.cookie("token", token, {
                httpOnly,
                maxAge,
                secure,
                sameSite,
                path
            });

            send_mail({
                mail_options: {
                    to: email,
                    subject: 'Account signin',
                    text: `Dear ${admin?.full_name},\n\nSuccessfully signed in. \n\nRegards,\nPoller Team`
                }
            })

            status_msg({ token, msg: `You are signed in`, code: 200, res });
        }

    } catch (error) {
        server_err({ error, res })
    }
}

const signout = async (req, res) => {
    try {
        const token = req?.cookies?.token;

        if (!token || token === '') {
            status_msg({ msg: 'You were not signed in', code: 401, res });
        }

        else {
            jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
                if (err) {
                    status_msg({ msg: 'Error in getting token!', code: 500, res });
                } else {
                    const user_id = decoded.user_id;

                    const admin = await User.findOne({ _id: user_id });

                    if (admin) {

                        res.cookie("token", '', {
                            httpOnly,
                            maxAge,
                            secure,
                            sameSite,
                            path
                        });

                        send_mail({
                            mail_options: {
                                to: admin?.email,
                                subject: 'Account signout',
                                text: `Dear ${admin?.full_name},\n\nSuccessfully signed out. \n\nRegards,\nPoller Team`
                            }
                        });

                        status_msg({ msg: "You're logged out", code: 200, res });
                    } else {
                        status_msg({ msg: 'User not found', code: 404, res });
                    }
                }
            });
        }
    } catch (error) {
        server_err({ error, res })
    }
}


export {
    signup, signin, signout,
}