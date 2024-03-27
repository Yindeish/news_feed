const authorize_signin = async (req, res, next) => {
    if (!req.cookies?.token || req.cookies?.token === '') {
        res.status(401).json({ msg: 'Unauthorized! Signin needed!' })
    } else {
        console.log({ token: req.cookies?.token });
        next();
    }
}

export { authorize_signin }