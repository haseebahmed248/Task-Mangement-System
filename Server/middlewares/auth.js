import jwt from 'jsonwebtoken'

export const userAuth = async (req, res, next) => {
    console.log("Cookies:", req.cookies);
    console.log("Headers:", req.headers);
    
    const token = req.cookies.token;
    if (!token) {
      console.log("No token found in cookies");
      return res.status(401).json("Token not available");
    }
    
    try {
      const user = await new Promise((resolve, reject) => {
        jwt.verify(token, process.env.SECRET, (err, user) => {
          if (err) {
            console.log("Token verification failed:", err);
            reject(err);
          }
          resolve(user);
        });
      });
      
      console.log("User verified:", user);
      req.user = user;
      next();
    } catch (err) {
      console.log("Error in userAuth:", err);
      return res.status(401).json("Invalid Token");
    }
  }