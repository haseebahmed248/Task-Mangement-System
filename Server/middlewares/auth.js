import jwt from 'jsonwebtoken';

export const userAuth = async (req, res, next) => {
    const token = req.cookies.token;
    console.log(token);
    if(!token){
        return res.json("Token not available");
    }
    try {
        const user = await new Promise((resolve, reject) => {
            jwt.verify(token, process.env.SECRET, (err, user) => {
                if (err) reject(err);
                resolve(user);
            });
        });
        req.user = user;
        next();
    } catch (err) {
        return res.json("Invalid Token");
    }
}