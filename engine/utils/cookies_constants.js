const httpOnly = process.env.MODE == 'DEVELOPMENT' ? true : false;
const secure = process.env.MODE == 'DEVELOPMENT' ? true : false;
const sameSite = process.env.MODE == 'DEVELOPMENT' ? 'none' : 'strict';
const one_month_from_now = new Date();
one_month_from_now.setMonth(one_month_from_now.getMonth() + 1);
const maxAge = one_month_from_now;
const path = '/';

export { httpOnly, secure, maxAge, path, sameSite }